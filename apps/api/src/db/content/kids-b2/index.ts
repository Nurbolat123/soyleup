import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const kidsB2: CourseSpec = {
  title: "Explorers and Inventors — курс (B2)",
  description: "Курс для детей 10–12 лет: исследователи, изобретения и научные факты в формате детского научно-популярного журнала — грамматика уровня B2.",
  level: "B2",
  audience: "KIDS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
