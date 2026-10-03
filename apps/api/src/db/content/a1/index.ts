import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const a1: CourseSpec = {
  title: "Daily Life — курс (A1)",
  description: "Курс для взрослых с нулевым уровнем: базовая лексика и грамматика английского языка на темы повседневной жизни.",
  level: "A1",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
