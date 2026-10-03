import type { ExerciseType, LessonBlockType, Skill } from '../schema';

export interface ExerciseSpec {
  type: ExerciseType;
  /** Какой навык проверяет упражнение — для пересчёта баллов (вес 0.1 у мини-теста урока). */
  skill?: Skill;
  content: Record<string, unknown>;
}

export interface BlockSpec {
  type: LessonBlockType;
  title?: string;
  content?: Record<string, unknown>;
  exercises?: ExerciseSpec[];
}

export interface LessonSpec {
  title: string;
  description?: string;
  estimatedMinutes: number;
  blocks: BlockSpec[];
}

export interface VocabEntry {
  word: string;
  ru: string;
  def: string;
  transcription: string;
  example: string;
}

export interface ModuleSpec {
  title: string;
  lessons: LessonSpec[];
}

/** Один файл модуля экспортирует это: свой словарь + свои уроки. */
export interface ModuleContent {
  title: string;
  vocabulary: VocabEntry[];
  lessons: LessonSpec[];
}

export interface CourseSpec {
  title: string;
  description: string;
  level: string;
  audience: 'KIDS' | 'TEENS' | 'ADULTS';
  /** Весь словарь уровня — объединение словарей всех модулей. */
  vocabulary: VocabEntry[];
  modules: ModuleSpec[];
}
