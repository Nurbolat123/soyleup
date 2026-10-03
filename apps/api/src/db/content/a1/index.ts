import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const a1: CourseSpec = {
  title: "Daily Life — курс (A1)",
  description: "Курс для взрослых с нулевым уровнем: базовая лексика и грамматика английского языка на темы повседневной жизни.",
  level: "A1",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
