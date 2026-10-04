/**
 * Аудио для платформы: произношение слов словаря + LISTENING-блоки в уроках
 * (аудирование: та же запись, что уже есть в READING-блоке урока, плюс транскрипт).
 *
 * Голос — espeak-ng (бесплатный офлайн-синтезатор, звучит механически; апгрейд
 * на платный голос — отдельная задача). Требуется:
 *   1. espeak-ng установлен (`sudo apt-get install -y espeak-ng` / `brew install espeak-ng`);
 *   2. MinIO запущен (`docker compose up -d minio` из корня репозитория).
 *
 * Идемпотентно: слово с уже заполненным audioUrl и урок с уже существующим
 * LISTENING-блоком пропускаются — можно безопасно перезапускать после добавления
 * новых уроков/слов.
 */
import { drizzle } from 'drizzle-orm/node-postgres';
import { and, eq, gt, isNull, sql } from 'drizzle-orm';
import { Pool } from 'pg';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { createS3Client, ensureBucket } from '../common/s3';
import { lessonBlocks, vocabularyWords } from './schema';

const execFileAsync = promisify(execFile);

try { process.loadEnvFile(); } catch { /* optional */ }

const BUCKET = process.env.S3_BUCKET_CONTENT ?? 'content';
const PUBLIC_URL_BASE = (process.env.S3_PUBLIC_URL_BASE ?? 'http://localhost:9000/content').replace(/\/$/, '');

function slugify(word: string): string {
  return word.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'word';
}

async function synthesize(text: string, outPath: string): Promise<void> {
  await execFileAsync('espeak-ng', ['-v', 'en-us', '-s', '150', '-w', outPath, text]);
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  const s3 = createS3Client({
    endpoint: process.env.S3_ENDPOINT ?? 'http://localhost:9000',
    region: process.env.S3_REGION ?? 'us-east-1',
    accessKey: process.env.S3_ACCESS_KEY ?? 'soyleup',
    secretKey: process.env.S3_SECRET_KEY ?? 'soyleup-minio',
  });

  try {
    await ensureBucket(s3, BUCKET, { publicRead: true });
  } catch (e) {
    console.error(`Хранилище файлов недоступно: ${(e as Error).message}`);
    console.error('Запустите MinIO (docker compose up -d minio из корня репозитория) и повторите команду.');
    await pool.end();
    process.exit(1);
  }

  try {
    await execFileAsync('espeak-ng', ['--version']);
  } catch {
    console.error('espeak-ng не найден. Установите: sudo apt-get install -y espeak-ng (или brew install espeak-ng на macOS).');
    await pool.end();
    process.exit(1);
  }

  const tmp = await mkdtemp(path.join(tmpdir(), 'soyleup-audio-'));

  async function upload(key: string, filePath: string): Promise<string> {
    const body = await readFile(filePath);
    await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: body, ContentType: 'audio/wav' }));
    return `${PUBLIC_URL_BASE}/${key}`;
  }

  // 1. Произношение слов словаря ------------------------------------------------
  console.log('Ищу слова словаря без аудио…');
  const words = await db
    .select({ word: vocabularyWords.word })
    .from(vocabularyWords)
    .where(isNull(vocabularyWords.audioUrl))
    .groupBy(vocabularyWords.word);
  console.log(`Найдено ${words.length} уникальных слов без аудио.`);

  let wordsDone = 0;
  for (const { word } of words) {
    const slug = slugify(word);
    const file = path.join(tmp, `${slug}.wav`);
    await synthesize(word, file);
    const url = await upload(`vocab/${slug}.wav`, file);
    await db.update(vocabularyWords).set({ audioUrl: url }).where(eq(vocabularyWords.word, word));
    await rm(file, { force: true });
    wordsDone++;
    if (wordsDone % 100 === 0) console.log(`  слова: ${wordsDone}/${words.length}`);
  }
  console.log(`Готово: аудио для ${wordsDone} слов.`);

  // 2. LISTENING-блоки из текста READING-блоков -----------------------------------
  console.log('Ищу уроки без LISTENING-блока…');
  const readingBlocks = await db
    .select({ id: lessonBlocks.id, lessonId: lessonBlocks.lessonId, order: lessonBlocks.order, content: lessonBlocks.content })
    .from(lessonBlocks)
    .where(eq(lessonBlocks.type, 'READING'));

  const existingListening = await db
    .select({ lessonId: lessonBlocks.lessonId })
    .from(lessonBlocks)
    .where(eq(lessonBlocks.type, 'LISTENING'));
  const haveListening = new Set(existingListening.map((r) => r.lessonId));

  const toProcess = readingBlocks.filter((b) => !haveListening.has(b.lessonId));
  console.log(`Найдено ${toProcess.length} уроков без LISTENING-блока.`);

  let lessonsDone = 0;
  for (const block of toProcess) {
    const text = (block.content as { text?: string }).text ?? '';
    if (!text.trim()) continue;

    const file = path.join(tmp, `listening-${block.lessonId}.wav`);
    await synthesize(text, file);
    const url = await upload(`listening/${block.lessonId}.wav`, file);
    await rm(file, { force: true });

    await db.transaction(async (tx) => {
      await tx
        .update(lessonBlocks)
        .set({ order: sql`${lessonBlocks.order} + 1` })
        .where(and(eq(lessonBlocks.lessonId, block.lessonId), gt(lessonBlocks.order, block.order)));
      await tx.insert(lessonBlocks).values({
        lessonId: block.lessonId,
        type: 'LISTENING',
        order: block.order + 1,
        title: 'Аудирование',
        content: { audioUrl: url, transcript: text },
      });
    });

    lessonsDone++;
    if (lessonsDone % 50 === 0) console.log(`  уроки: ${lessonsDone}/${toProcess.length}`);
  }
  console.log(`Готово: LISTENING-блок добавлен в ${lessonsDone} уроков.`);

  await rm(tmp, { recursive: true, force: true });
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
