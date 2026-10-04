import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const teensA2: CourseSpec = {
  title: "High School Days — курс (A2)",
  description: "Курс для подростков 13–17 лет: школьная жизнь, увлечения, соцсети и первые планы на будущее — грамматика уровня A2.",
  level: "A2",
  audience: "TEENS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
