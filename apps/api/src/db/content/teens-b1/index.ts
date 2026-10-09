import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const teensB1: CourseSpec = {
  title: "Being a Teenager Today — курс (B1)",
  description: "Курс для подростков 13–17 лет: давление сверстников, дружба, соцсети, подработка и поиск себя — грамматика уровня B1.",
  level: "B1",
  audience: "TEENS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
