import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const a2: CourseSpec = {
  title: "Travel & Shopping — курс (A2)",
  description: "Второй уровень курса: повседневные ситуации взрослого человека — путешествия, покупки, работа, здоровье и общение, с грамматикой уровня A2.",
  level: "A2",
  audience: "ADULTS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
