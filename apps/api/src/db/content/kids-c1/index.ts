import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const kidsC1: CourseSpec = {
  title: "Big Ideas — курс (C1)",
  description: "Курс для продвинутых детей 11–12 лет: большие идеи и серьёзные вопросы, но через детскую оптику — сложная грамматика уровня C1 без взрослой тематики.",
  level: "C1",
  audience: "KIDS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
