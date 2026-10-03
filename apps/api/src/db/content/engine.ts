import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { courseModules, courses, exercises, lessonBlocks, lessons, vocabularyWords } from '../schema';
import type { CourseSpec } from './types';

/** Создаёт курс/модуль/уроки/блоки/упражнения и словарь уровня из декларативного описания CourseSpec. */
export async function seedCourse(db: NodePgDatabase, spec: CourseSpec) {
  await db.insert(vocabularyWords).values(spec.vocabulary.map((w) => ({
    word: w.word,
    translationRu: w.ru,
    definition: w.def,
    level: spec.level,
    transcription: w.transcription,
    examples: [w.example],
  }))).onConflictDoNothing();

  const [course] = await db.insert(courses).values({
    title: spec.title,
    description: spec.description,
    level: spec.level,
    audience: spec.audience,
  }).returning();

  for (let mi = 0; mi < spec.modules.length; mi++) {
    const moduleSpec = spec.modules[mi];
    const [module] = await db.insert(courseModules).values({
      courseId: course.id,
      title: moduleSpec.title,
      order: mi,
    }).returning();

    for (let li = 0; li < moduleSpec.lessons.length; li++) {
      const l = moduleSpec.lessons[li];
      const [lesson] = await db.insert(lessons).values({
        moduleId: module.id,
        title: l.title,
        description: l.description,
        order: li,
        estimatedMinutes: l.estimatedMinutes,
      }).returning();

      for (let bi = 0; bi < l.blocks.length; bi++) {
        const b = l.blocks[bi];
        const [block] = await db.insert(lessonBlocks).values({
          lessonId: lesson.id,
          type: b.type,
          order: bi,
          title: b.title,
          content: b.content ?? {},
        }).returning();

        if (b.exercises?.length) {
          await db.insert(exercises).values(b.exercises.map((e, ei) => ({
            lessonBlockId: block.id,
            type: e.type,
            order: ei,
            content: e.content,
            skill: e.skill,
          })));
        }
      }
    }
  }

  return course;
}
