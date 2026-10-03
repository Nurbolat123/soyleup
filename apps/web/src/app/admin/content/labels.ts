import type { ExerciseType, LessonBlockType, Skill } from "@/lib/types";

export const SKILL_LABEL: Record<Skill, string> = {
  GRAMMAR: "Грамматика",
  VOCABULARY: "Лексика",
  READING: "Чтение",
  LISTENING: "Аудирование",
  SPEAKING: "Говорение",
};

export const EXERCISE_TYPE_LABEL: Record<ExerciseType, string> = {
  MULTIPLE_CHOICE: "Выбор ответа",
  FILL_BLANK: "Заполнить пропуск",
  MATCHING: "Сопоставление",
  ORDERING: "Порядок слов",
  FREE_RESPONSE: "Свободный ответ",
  SPEAKING: "Устный ответ",
};

export const BLOCK_TYPE_LABEL: Record<LessonBlockType, string> = {
  INTRO: "Введение",
  VOCABULARY: "Новые слова",
  GRAMMAR: "Грамматика",
  READING: "Чтение",
  LISTENING: "Аудирование",
  EXERCISE: "Упражнения",
  SPEAKING: "Говорение",
  MINI_TEST: "Мини-тест",
  HOMEWORK: "Домашнее задание",
};
