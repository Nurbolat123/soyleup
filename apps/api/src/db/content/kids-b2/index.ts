import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const kidsB2: CourseSpec = {
  title: "Explorers and Inventors — курс (B2)",
  description: "Курс для детей 10–12 лет: исследователи, изобретения и научные факты в формате детского научно-популярного журнала — грамматика уровня B2.",
  level: "B2",
  audience: "KIDS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
