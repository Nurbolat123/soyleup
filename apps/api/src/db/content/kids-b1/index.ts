import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const kidsB1: CourseSpec = {
  title: "Adventures and Discoveries — курс (B1)",
  description: "Курс для детей 9–12 лет: приключения, открытия и первые изобретатели — грамматика и лексика уровня B1 через увлекательные истории.",
  level: "B1",
  audience: "KIDS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
