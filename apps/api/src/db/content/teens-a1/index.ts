import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const teensA1: CourseSpec = {
  title: "Teen Life — курс (A1)",
  description: "Курс для подростков 13–17 лет: первые шаги в английском через школу, друзей, увлечения и повседневную жизнь.",
  level: "A1",
  audience: "TEENS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
