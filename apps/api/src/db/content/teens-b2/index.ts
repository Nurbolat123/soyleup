import type { CourseSpec } from '../types';
import { module1 } from './module1';

export const teensB2: CourseSpec = {
  title: "The Digital Generation — курс (B2)",
  description: "Курс для подростков 13–17 лет: соцсети, технологии и серьёзные дискуссионные темы, близкие подростковой жизни — грамматика уровня B2.",
  level: "B2",
  audience: "TEENS",
  vocabulary: [...module1.vocabulary],
  modules: [
    { title: module1.title, lessons: module1.lessons },
  ],
};
