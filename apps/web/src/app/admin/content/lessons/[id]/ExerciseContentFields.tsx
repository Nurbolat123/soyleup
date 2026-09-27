"use client";

import type { ExerciseType, Skill } from "@/lib/types";

const SKILL_LABEL: Record<Skill, string> = {
  GRAMMAR: "Грамматика",
  VOCABULARY: "Лексика",
  READING: "Чтение",
  LISTENING: "Аудирование",
  SPEAKING: "Говорение",
};
const SKILLS: Skill[] = ["GRAMMAR", "VOCABULARY", "READING", "LISTENING", "SPEAKING"];

interface Defaults {
  question?: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  text?: string;
  answers?: string[];
  pairs?: { left: string; right: string }[];
  sequence?: string[];
  rubric?: string;
  prompt?: string;
  skill?: Skill | null;
}

/** Превращает сохранённый content упражнения обратно в поля формы (для редактирования). */
export function contentToDefaults(type: ExerciseType, content: Record<string, unknown>): Defaults {
  switch (type) {
    case "MULTIPLE_CHOICE": {
      const options = (content.options as string[] | undefined) ?? [];
      const correctIndex = content.correctIndex as number | undefined;
      return {
        question: content.question as string | undefined,
        options,
        correctAnswer: correctIndex != null ? options[correctIndex] : undefined,
        explanation: content.explanation as string | undefined,
      };
    }
    case "FILL_BLANK":
      return { text: content.text as string | undefined, answers: content.answers as string[] | undefined };
    case "MATCHING":
      return { pairs: content.pairs as { left: string; right: string }[] | undefined };
    case "ORDERING": {
      const tokens = (content.tokens as string[] | undefined) ?? [];
      const correctOrder = (content.correctOrder as number[] | undefined) ?? [];
      return { sequence: correctOrder.map((i) => tokens[i]) };
    }
    case "FREE_RESPONSE":
      return { question: content.question as string | undefined, rubric: content.rubric as string | undefined };
    case "SPEAKING":
      return { prompt: content.prompt as string | undefined, rubric: content.rubric as string | undefined };
  }
}

/** Поля содержимого упражнения — обычные поля формы вместо ручного JSON. */
export function ExerciseContentFields({
  type, defaults, showSkill,
}: {
  type: ExerciseType; defaults?: Defaults; showSkill?: boolean;
}) {
  return (
    <>
      <Fields type={type} defaults={defaults} />
      {showSkill && (
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-muted">Какой навык проверяет (необязательно)</label>
          <select name="skill" defaultValue={defaults?.skill ?? ""} className="h-[38px] rounded-lg border border-line bg-white px-3 text-[14px]">
            <option value="">—</option>
            {SKILLS.map((s) => (
              <option key={s} value={s}>{SKILL_LABEL[s]}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

function Fields({ type, defaults }: { type: ExerciseType; defaults?: Defaults }) {
  if (type === "MULTIPLE_CHOICE") {
    return (
      <>
        <TextField name="question" label="Вопрос" defaultValue={defaults?.question} />
        <TextArea name="options" label="Варианты ответа — по одному на строке" defaultValue={defaults?.options?.join("\n")} placeholder={"works\nhas worked"} />
        <TextField name="correctAnswer" label="Правильный вариант — впишите его точно так же, как в списке выше" defaultValue={defaults?.correctAnswer} />
        <TextField name="explanation" label="Пояснение (необязательно)" defaultValue={defaults?.explanation} />
      </>
    );
  }
  if (type === "FILL_BLANK") {
    return (
      <>
        <TextField name="text" label="Текст с пропуском" defaultValue={defaults?.text} placeholder="She ___ (work) here for 5 years." />
        <TextArea name="answers" label="Допустимые ответы — по одному на строке" defaultValue={defaults?.answers?.join("\n")} placeholder="has worked" />
      </>
    );
  }
  if (type === "MATCHING") {
    return (
      <TextArea
        name="pairs"
        label="Пары «слово — перевод», по одной паре на строке"
        defaultValue={defaults?.pairs?.map((p) => `${p.left} — ${p.right}`).join("\n")}
        placeholder={"deadline — крайний срок\nachieve — достигать"}
        rows={4}
      />
    );
  }
  if (type === "ORDERING") {
    return (
      <TextField
        name="sequence"
        label="Правильный порядок слов, через запятую или пробел"
        defaultValue={defaults?.sequence?.join(", ")}
        placeholder="I, have, finished, the, report"
      />
    );
  }
  if (type === "FREE_RESPONSE") {
    return (
      <>
        <TextField name="question" label="Вопрос" defaultValue={defaults?.question} />
        <TextField name="rubric" label="По чему оценивать (необязательно)" defaultValue={defaults?.rubric} placeholder="grammar, vocabulary, structure" />
      </>
    );
  }
  // SPEAKING
  return (
    <>
      <TextArea name="prompt" label="Задание для устного ответа" defaultValue={defaults?.prompt} rows={2} />
      <TextField name="rubric" label="По чему оценивать (необязательно)" defaultValue={defaults?.rubric} placeholder="vocabulary, grammar, fluency, pronunciation" />
    </>
  );
}

function TextField({ name, label, defaultValue, placeholder }: { name: string; label: string; defaultValue?: string; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-semibold text-muted">{label}</label>
      <input name={name} type="text" defaultValue={defaultValue} placeholder={placeholder} className="h-[38px] rounded-lg border border-line px-3 text-[14px]" />
    </div>
  );
}

function TextArea({
  name, label, defaultValue, placeholder, rows = 3,
}: {
  name: string; label: string; defaultValue?: string; placeholder?: string; rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-semibold text-muted">{label}</label>
      <textarea name={name} rows={rows} defaultValue={defaultValue} placeholder={placeholder} className="rounded-lg border border-line px-3 py-2 text-[14px]" />
    </div>
  );
}
