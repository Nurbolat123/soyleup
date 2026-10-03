import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const b1: CourseSpec = {
  title: "Work & Life — курс (B1)",
  description: "Курс для взрослых уровня B1: работа, учёба, технологии, деньги и путешествия — с грамматикой, словарём и практикой говорения.",
  level: "B1",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
