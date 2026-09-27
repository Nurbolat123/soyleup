"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { deleteBlock, updateBlock, type ActionState } from "../../actions";
import { BLOCK_TYPE_LABEL } from "../../labels";
import type { LessonBlock, Exercise } from "@/lib/types";
import { AddExerciseForm } from "./AddExerciseForm";
import { BlockContentFields } from "./BlockContentFields";
import { ExerciseCard } from "./ExerciseCard";

const initial: ActionState = { error: null };

function BlockContentSummary({ block }: { block: LessonBlock }) {
  const c = block.content as Record<string, unknown>;
  const rows: [string, string][] = [];
  if (typeof c.text === "string" && c.text) rows.push(["Текст", c.text]);
  if (typeof c.explanation === "string" && c.explanation) rows.push(["Объяснение", c.explanation]);
  if (Array.isArray(c.words)) rows.push(["Слова", (c.words as string[]).join(", ")]);
  if (typeof c.audioUrl === "string" && c.audioUrl) rows.push(["Аудио", c.audioUrl]);
  if (typeof c.transcript === "string" && c.transcript) rows.push(["Транскрипт", c.transcript]);
  if (typeof c.videoUrl === "string" && c.videoUrl) rows.push(["Видео", c.videoUrl]);
  if (!rows.length) return <p className="mt-3 text-[13px] text-muted">Нет своего содержимого — только упражнения ниже.</p>;
  return (
    <dl className="mt-3 flex flex-col gap-1.5 rounded-lg bg-paper px-3 py-2 text-[13px]">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt className="font-semibold text-muted">{label}</dt>
          <dd className="whitespace-pre-wrap text-ink-2">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BlockCard({
  lessonId,
  block,
}: {
  lessonId: string;
  block: LessonBlock & { exercises: Exercise[] };
}) {
  const [editing, setEditing] = useState(false);
  const [deleting, startDelete] = useTransition();
  const action = updateBlock.bind(null, lessonId, block.id, block.type);
  const [state, formAction, pending] = useActionState(action, initial);

  const wasPending = useRef(false);
  useEffect(() => {
    if (wasPending.current && !pending && !state.error) setEditing(false);
    wasPending.current = pending;
  }, [pending, state]);

  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-ink px-3 py-1 text-[12px] font-semibold text-paper">{BLOCK_TYPE_LABEL[block.type]}</span>
          <span className="text-[15px] font-semibold">{block.title || "без заголовка"}</span>
        </div>
        <div className="flex gap-4">
          <button type="button" onClick={() => setEditing((v) => !v)} className="text-[13px] font-semibold text-blue">
            {editing ? "Отмена" : "Редактировать"}
          </button>
          <button
            type="button"
            disabled={deleting}
            onClick={() => {
              if (!window.confirm("Удалить блок вместе с упражнениями?")) return;
              startDelete(() => deleteBlock(lessonId, block.id));
            }}
            className="text-[13px] font-semibold text-error disabled:opacity-60"
          >
            Удалить блок
          </button>
        </div>
      </div>

      {editing ? (
        <form action={formAction} className="mt-3 flex flex-col gap-2">
          <input
            name="title"
            type="text"
            defaultValue={block.title ?? ""}
            placeholder="Заголовок"
            className="h-[38px] rounded-lg border border-line px-3 text-[14px]"
          />
          <BlockContentFields type={block.type} defaults={block.content as Record<string, unknown>} />
          <button
            type="submit"
            disabled={pending}
            className="h-[36px] self-start rounded-full bg-blue px-4 text-[13px] font-semibold text-white hover:bg-blue-dark disabled:opacity-60"
          >
            {pending ? "Сохраняем…" : "Сохранить"}
          </button>
          {state.error && <p className="text-[13px] font-semibold text-error">{state.error}</p>}
        </form>
      ) : (
        <BlockContentSummary block={block} />
      )}

      <div className="mt-4 flex flex-col gap-2">
        {block.exercises.map((ex) => (
          <ExerciseCard key={ex.id} lessonId={lessonId} exercise={ex} />
        ))}
        <AddExerciseForm lessonId={lessonId} blockId={block.id} nextOrder={block.exercises.length} />
      </div>
    </div>
  );
}
