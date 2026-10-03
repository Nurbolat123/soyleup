/**
 * Настоящие учебные уроки (взрослые, A1–C1): 5 курсов по 10 уроков.
 * Идемпотентно: курс с таким же названием не создаётся повторно — ручные правки
 * куратора/админа через конструктор не затираются при повторном запуске.
 */
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { Pool } from 'pg';
import { courses, questionBank, vocabularyWords } from './schema';
import { seedCourse } from './content/engine';
import { a1 } from './content/a1';
import { a2 } from './content/a2';
import { b1 } from './content/b1';
import { b2 } from './content/b2';
import { c1 } from './content/c1';

try { process.loadEnvFile(); } catch { /* optional */ }

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  console.log('Удаляю прежний демо-контент (если есть)…');
  await db.delete(courses).where(eq(courses.isDemo, true)); // модули/уроки/блоки/упражнения — каскадом
  await db.delete(vocabularyWords).where(eq(vocabularyWords.isDemo, true));
  await db.delete(questionBank).where(eq(questionBank.isDemo, true));

  console.log('Создаю настоящие учебные курсы (взрослые, A1–C1)…');
  for (const spec of [a1, a2, b1, b2, c1]) {
    const existing = await db.select({ id: courses.id }).from(courses).where(eq(courses.title, spec.title)).limit(1);
    if (existing.length > 0) {
      console.log(`  Пропускаю «${spec.title}» — уже существует.`);
      continue;
    }
    console.log(`  ${spec.title}`);
    await seedCourse(db, spec);
  }

  await pool.end();
  console.log('Готово: 5 курсов (A1–C1), 10 уроков на курс.');
}

main().catch((e) => { console.error(e); process.exit(1); });
