import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { and, desc, eq, SQL } from 'drizzle-orm';
import { parseCsv, splitMulti } from '../common/csv';
import { QUESTION_LEVELS } from '../common/levels';
import { definedOnly } from '../common/utils';
import { DB, Database } from '../db/db.module';
import { questionBank, Skill, skillEnum } from '../db/schema';
import { CreateQuestionDto, ImportQuestionsDto, ListQuestionsQueryDto, UpdateQuestionDto } from './dto/questions.dto';

@Injectable()
export class QuestionsService {
  constructor(@Inject(DB) private readonly db: Database) {}

  async list(q: ListQuestionsQueryDto) {
    const conditions: (SQL | undefined)[] = [];
    if (q.skill) conditions.push(eq(questionBank.skill, q.skill as Skill));
    if (q.level) conditions.push(eq(questionBank.level, q.level));
    if (q.type) conditions.push(eq(questionBank.type, q.type as (typeof questionBank.type.enumValues)[number]));
    const where = conditions.length ? and(...conditions) : undefined;

    const [items, total] = await Promise.all([
      this.db.query.questionBank.findMany({
        where,
        orderBy: desc(questionBank.createdAt),
        limit: q.pageSize,
        offset: (q.page - 1) * q.pageSize,
      }),
      this.db.$count(questionBank, where),
    ]);
    return { items, total, page: q.page, pageSize: q.pageSize };
  }

  async create(dto: CreateQuestionDto) {
    const [row] = await this.db.insert(questionBank).values(dto).returning();
    return row;
  }

  async update(id: string, dto: UpdateQuestionDto) {
    const [row] = await this.db.update(questionBank).set(definedOnly(dto)).where(eq(questionBank.id, id)).returning();
    if (!row) throw new NotFoundException('Question not found');
    return row;
  }

  async delete(id: string) {
    const rows = await this.db.delete(questionBank).where(eq(questionBank.id, id)).returning({ id: questionBank.id });
    if (!rows.length) throw new NotFoundException('Question not found');
    return { ok: true };
  }

  /**
   * Шаблон (Excel/CSV, только для MULTIPLE_CHOICE и FILL_BLANK — остальные типы добавляются через админку):
   * skill,level,difficulty,type,question,option1,option2,option3,option4,correctAnswer,explanation
   * - option1..option4: варианты ответа, каждый в своей колонке (только для MULTIPLE_CHOICE, пустые игнорируются)
   * - correctAnswer: для MULTIPLE_CHOICE — текст правильного варианта (должен точно совпадать с одним из option1..4);
   *   для FILL_BLANK — допустимые ответы через `;`
   */
  async importCsv(dto: ImportQuestionsDto) {
    const rows = parseCsv(dto.csv);
    let imported = 0;
    const skipped: { row: number; reason: string }[] = [];

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      const rowNum = i + 2;
      if (!r.skill || !r.level || !r.type || !r.question) {
        skipped.push({ row: rowNum, reason: 'skill, level, type и question обязательны' });
        continue;
      }
      if (!(skillEnum.enumValues as readonly string[]).includes(r.skill)) {
        skipped.push({ row: rowNum, reason: `неизвестный навык "${r.skill}"` });
        continue;
      }
      if (!(QUESTION_LEVELS as readonly string[]).includes(r.level)) {
        skipped.push({ row: rowNum, reason: `неизвестный уровень "${r.level}"` });
        continue;
      }

      let content: Record<string, unknown>;
      if (r.type === 'MULTIPLE_CHOICE') {
        const options = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6']
          .map((k) => r[k]?.trim())
          .filter((v): v is string => !!v);
        const correctIndex = options.findIndex((o) => o === r.correctAnswer);
        if (options.length < 2 || correctIndex === -1) {
          skipped.push({ row: rowNum, reason: 'correctAnswer должен точно совпадать с одним из option1..option6' });
          continue;
        }
        content = { question: r.question, options, correctIndex, explanation: r.explanation || undefined };
      } else if (r.type === 'FILL_BLANK') {
        content = { text: r.question, answers: splitMulti(r.correctAnswer) };
      } else {
        skipped.push({ row: rowNum, reason: 'через импорт поддерживаются только MULTIPLE_CHOICE и FILL_BLANK' });
        continue;
      }

      await this.db.insert(questionBank).values({
        skill: r.skill as Skill,
        level: r.level,
        difficulty: r.difficulty ? Number(r.difficulty) : 1,
        type: r.type as (typeof questionBank.type.enumValues)[number],
        content,
      });
      imported++;
    }

    return { imported, skipped };
  }
}
