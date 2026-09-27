"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { deleteExercise, updateExercise, type ActionState } from "../../actions";
import { EXERCISE_TYPE_LABEL, SKILL_LABEL } from "../../labels";
import { contentToDefaults, ExerciseContentFields } from "./ExerciseContentFields";
import type { Exercise } from "@/lib/types";

const initial: ActionState = { error: null };

function ExerciseSummary({ exercise }: { exercise: Exercise }) {
  const c = exercise.content;
  const question = (c.question as string) || (c.text as string) || (c.prompt as string) || "";
  return (
    <div className="mt-2 text-[13px] text-ink-2">
      {question && <p>{question}</p>}
      {exercise.skill && <p className="mt-1 text-muted">Навык: {SKILL_LABEL[exercise.skill]}</p>}
    </div>
  );
}

export function ExerciseCard({ lessonId, exercise }: { lessonId: string; exercise: Exercise }) {
  const [editing, setEditing] = useState(false);
  const [deleting, startDelete] = useTransition();
  const action = updateExercise.bind(null, lessonId, exercise.id, exercise.type);
  const [state, formAction, pending] = useActionState(action, initial);

  const wasPending = useRef(false);
  useEffect(() => {
    if (wasPending.current && !pending && !state.error) setEditing(false);
    wasPending.current = pending;
  }, [pending, state]);

  return (
    <div className="rounded-xl border border-line bg-white p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-paper-2 px-2 py-0.5 text-[11px] font-semibold uppercase text-ink-2">
          {EXERCISE_TYPE_LABEL[exercise.type]}
        </span>
        <div className="flex gap-3">
          <button type="button" onClick={() => setEditing((v) => !v)} className="text-[12px] font-semibold text-blue">
            {editing ? "Отмена" : "Редактировать"}
          </button>
          <button
            type="button"
            disabled={deleting}
            onClick={() => {
              if (!window.confirm("Удалить упражнение?")) return;
              startDelete(() => deleteExercise(lessonId, exercise.id));
            }}
            className="text-[12px] font-semibold text-error disabled:opacity-60"
          >
            Удалить
          </button>
        </div>
      </div>

      {editing ? (
        <form action={formAction} className="mt-2 flex flex-col gap-2">
          <ExerciseContentFields
            type={exercise.type}
            defaults={{ ...contentToDefaults(exercise.type, exercise.content), skill: exercise.skill }}
            showSkill={exercise.type !== "SPEAKING" && exercise.type !== "FREE_RESPONSE"}
          />
          <button
            type="submit"
            disabled={pending}
            className="h-[34px] self-start rounded-full bg-blue px-4 text-[12px] font-semibold text-white hover:bg-blue-dark disabled:opacity-60"
          >
            {pending ? "Сохраняем…" : "Сохранить"}
          </button>
          {state.error && <p className="text-[12px] font-semibold text-error">{state.error}</p>}
        </form>
      ) : (
        <ExerciseSummary exercise={exercise} />
      )}
    </div>
  );
}
