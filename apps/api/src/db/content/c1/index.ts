import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const c1: CourseSpec = {
  title: "Global Issues — курс (C1)",
  description: "Курс для продвинутых учеников уровня C1: академическая лексика и сложные грамматические конструкции через темы глобальных проблем — от климата и технологий до философии счастья.",
  level: "C1",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
