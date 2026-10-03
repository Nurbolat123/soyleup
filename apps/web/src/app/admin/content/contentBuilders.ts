import type { ExerciseType, LessonBlockType } from "@/lib/types";

function lines(raw: FormDataEntryValue | null): string[] {
  return String(raw ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function str(formData: FormData, name: string): string {
  return String(formData.get(name) ?? "").trim();
}

/** Собирает content блока урока из отдельных полей формы — без ручного JSON. */
export function buildBlockContent(type: LessonBlockType, formData: FormData): { content: Record<string, unknown> } | { error: string } {
  const videoUrl = str(formData, "videoUrl");
  switch (type) {
    case "INTRO":
    case "READING":
    case "HOMEWORK": {
      const text = str(formData, "text");
      if (!text) return { error: "Заполните текст блока" };
      return { content: { text, ...(videoUrl && { videoUrl }) } };
    }
    case "GRAMMAR": {
      const explanation = str(formData, "explanation");
      if (!explanation) return { error: "Заполните объяснение" };
      return { content: { explanation, ...(videoUrl && { videoUrl }) } };
    }
    case "VOCABULARY": {
      const words = lines(formData.get("words"));
      if (!words.length) return { error: "Добавьте хотя бы одно слово" };
      return { content: { words } };
    }
    case "LISTENING": {
      const audioUrl = str(formData, "audioUrl");
      const transcript = str(formData, "transcript");
      if (!audioUrl) return { error: "Загрузите аудио" };
      return { content: { audioUrl, ...(transcript && { transcript }), ...(videoUrl && { videoUrl }) } };
    }
    case "EXERCISE":
    case "SPEAKING":
    case "MINI_TEST":
      return { content: {} };
  }
}

/** Собирает content упражнения (или вопроса банка теста) из отдельных полей формы — без ручного JSON. */
export function buildExerciseContent(type: ExerciseType, formData: FormData): { content: Record<string, unknown> } | { error: string } {
  switch (type) {
    case "MULTIPLE_CHOICE": {
      const question = str(formData, "question");
      const options = lines(formData.get("options"));
      const correctAnswer = str(formData, "correctAnswer");
      const explanation = str(formData, "explanation");
      if (!question) return { error: "Заполните вопрос" };
      if (options.length < 2) return { error: "Добавьте минимум два варианта ответа" };
      const correctIndex = options.findIndex((o) => o === correctAnswer);
      if (correctIndex === -1) return { error: "Правильный вариант должен точно совпадать с одним из введённых вариантов" };
      return { content: { question, options, correctIndex, ...(explanation && { explanation }) } };
    }
    case "FILL_BLANK": {
      const text = str(formData, "text");
      const answers = lines(formData.get("answers"));
      if (!text) return { error: "Заполните текст с пропуском" };
      if (!answers.length) return { error: "Добавьте хотя бы один допустимый ответ" };
      return { content: { text, answers } };
    }
    case "MATCHING": {
      const pairLines = lines(formData.get("pairs"));
      const pairs = pairLines
        .map((line) => {
          const match = line.match(/^(.+?)\s+[—-]\s+(.+)$/);
          return match ? { left: match[1].trim(), right: match[2].trim() } : null;
        })
        .filter((p): p is { left: string; right: string } => !!p);
      if (!pairs.length) return { error: "Добавьте хотя бы одну пару в формате «слово — перевод»" };
      return { content: { pairs } };
    }
    case "ORDERING": {
      const sequence = str(formData, "sequence")
        .split(/[,\s]+/)
        .map((s) => s.trim())
        .filter(Boolean);
      if (sequence.length < 2) return { error: "Введите минимум два слова в правильном порядке" };
      const shuffled = sequence.map((word, i) => ({ word, i })).sort(() => Math.random() - 0.5);
      const tokens = shuffled.map((s) => s.word);
      const correctOrder = sequence.map((_, i) => shuffled.findIndex((s) => s.i === i));
      return { content: { tokens, correctOrder } };
    }
    case "FREE_RESPONSE": {
      const question = str(formData, "question");
      const rubric = str(formData, "rubric");
      if (!question) return { error: "Заполните вопрос" };
      return { content: { question, ...(rubric && { rubric }) } };
    }
    case "SPEAKING": {
      const prompt = str(formData, "prompt");
      const rubric = str(formData, "rubric");
      if (!prompt) return { error: "Заполните задание" };
      return { content: { prompt, ...(rubric && { rubric }) } };
    }
  }
}
