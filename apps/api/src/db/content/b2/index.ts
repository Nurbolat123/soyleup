import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const b2: CourseSpec = {
  title: "Technology & Society — курс (B2)",
  description: "Курс для уровня B2: десять уроков о технологиях, медиа, праве, искусстве, образовании, работе и науке с грамматикой продвинутого уровня.",
  level: "B2",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
