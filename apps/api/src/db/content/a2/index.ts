import type { CourseSpec } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

export const a2: CourseSpec = {
  title: "Travel & Shopping — курс (A2)",
  description: "Второй уровень курса: повседневные ситуации взрослого человека — путешествия, покупки, работа, здоровье и общение, с грамматикой уровня A2.",
  level: "A2",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary, ...module2.vocabulary, ...module3.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
    { title: module2.title, lessons: module2.lessons },
    { title: module3.title, lessons: module3.lessons },
  ],
};
