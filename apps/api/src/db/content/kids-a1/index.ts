import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const kidsA1: CourseSpec = {
  title: "My World — курс (A1)",
  description: "Курс для детей 7–12 лет: первые слова и простые фразы английского через семью, игрушки, питомцев и повседневную жизнь.",
  level: "A1",
  audience: "KIDS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
