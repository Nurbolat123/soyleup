import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const kidsA2: CourseSpec = {
  title: "School and Friends — курс (A2)",
  description: "Курс для детей 7–12 лет: школа, друзья и повседневные ситуации на английском с грамматикой уровня A2.",
  level: "A2",
  audience: "KIDS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
