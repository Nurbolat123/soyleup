import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const teensC1: CourseSpec = {
  title: "Identity and Society — курс (C1)",
  description: "Курс для продвинутых подростков 16–17 лет: идентичность, технологии и общество на уровне эссе — сложная грамматика, темы без взрослого контента.",
  level: "C1",
  audience: "TEENS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
