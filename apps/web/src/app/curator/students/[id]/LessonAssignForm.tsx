"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { assignLesson, unassignLesson } from "../../curator-actions";
import type { CuratorLessonOption } from "@/lib/types";

export function LessonAssignForm({
  studentId,
  lessonOptions,
  assignedLesson,
}: {
  studentId: string;
  lessonOptions: CuratorLessonOption[];
  assignedLesson: { id: string; title: string } | null;
}) {
  const router = useRouter();
  const [selected, setSelected] = useState(assignedLesson?.id ?? "");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAssign() {
    if (!selected) return;
    setPending(true);
    setError(null);
    try {
      await assignLesson(studentId, selected);
      router.refresh();
    } catch {
      setError("Не удалось назначить урок. Попробуйте ещё раз.");
    } finally {
      setPending(false);
    }
  }

  async function handleUnassign() {
    setPending(true);
    setError(null);
    try {
      await unassignLesson(studentId);
      setSelected("");
      router.refresh();
    } catch {
      setError("Не удалось отменить назначение. Попробуйте ещё раз.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {assignedLesson ? (
        <p className="text-[14px] text-muted">
          Сейчас в плане на день: <span className="font-semibold text-ink">«{assignedLesson.title}»</span> (назначено вручную)
        </p>
      ) : (
        <p className="text-[14px] text-muted">Сейчас план на день подбирается автоматически по курсу ученика.</p>
      )}

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="h-[46px] rounded-2xl border border-line bg-white px-4 text-[15px]"
      >
        <option value="">Выберите урок…</option>
        {lessonOptions.map((course) => (
          <optgroup key={course.id} label={course.title}>
            {course.modules.flatMap((m) =>
              m.lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  {m.title} — {l.title}
                </option>
              )),
            )}
          </optgroup>
        ))}
      </select>

      {error && <p className="text-[14px] font-semibold text-error">{error}</p>}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleAssign}
          disabled={pending || !selected}
          className="h-[44px] rounded-2xl bg-blue px-6 text-[14px] font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Сохраняем…" : "Назначить"}
        </button>
        {assignedLesson && (
          <button
            type="button"
            onClick={handleUnassign}
            disabled={pending}
            className="h-[44px] rounded-2xl border border-line px-6 text-[14px] font-semibold text-ink disabled:opacity-60"
          >
            Вернуть автоподбор
          </button>
        )}
      </div>
    </div>
  );
}
