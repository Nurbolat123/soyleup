"use client";

import { AudioUploadField } from "../../AudioUploadField";
import type { LessonBlockType } from "@/lib/types";

const TEXT_LABEL: Record<string, string> = {
  INTRO: "Текст введения",
  READING: "Текст для чтения",
  HOMEWORK: "Что нужно сделать дома",
};

interface Defaults {
  text?: string;
  explanation?: string;
  videoUrl?: string;
  words?: string[];
  audioUrl?: string;
  transcript?: string;
}

/** Поля содержимого блока урока — обычные поля формы вместо ручного JSON. */
export function BlockContentFields({ type, defaults: raw }: { type: LessonBlockType; defaults?: Record<string, unknown> }) {
  const defaults = raw as Defaults | undefined;
  if (type === "INTRO" || type === "READING" || type === "HOMEWORK") {
    return (
      <>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-muted">{TEXT_LABEL[type]}</label>
          <textarea name="text" rows={4} defaultValue={defaults?.text} className="rounded-lg border border-line px-3 py-2 text-[14px]" />
        </div>
        <VideoUrlField defaultValue={defaults?.videoUrl} />
      </>
    );
  }

  if (type === "GRAMMAR") {
    return (
      <>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-muted">Объяснение</label>
          <textarea name="explanation" rows={4} defaultValue={defaults?.explanation} className="rounded-lg border border-line px-3 py-2 text-[14px]" />
        </div>
        <VideoUrlField defaultValue={defaults?.videoUrl} />
      </>
    );
  }

  if (type === "VOCABULARY") {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-semibold text-muted">Слова — по одному на строке</label>
        <textarea
          name="words"
          rows={4}
          defaultValue={defaults?.words?.join("\n")}
          placeholder={"achieve\nbalance\ndeadline"}
          className="rounded-lg border border-line px-3 py-2 text-[14px]"
        />
      </div>
    );
  }

  if (type === "LISTENING") {
    return (
      <>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-muted">Аудио</label>
          <AudioUploadField name="audioUrl" defaultValue={defaults?.audioUrl} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-muted">Транскрипт (необязательно)</label>
          <textarea name="transcript" rows={3} defaultValue={defaults?.transcript} className="rounded-lg border border-line px-3 py-2 text-[14px]" />
        </div>
        <VideoUrlField defaultValue={defaults?.videoUrl} />
      </>
    );
  }

  // EXERCISE / SPEAKING / MINI_TEST — блок без своего содержимого, упражнения добавляются отдельно ниже
  return <p className="text-[13px] text-muted">У этого типа блока нет своего содержимого — упражнения добавляются отдельно, после сохранения блока.</p>;
}

function VideoUrlField({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-semibold text-muted">Видео — ссылка на YouTube/Vimeo (необязательно)</label>
      <input
        name="videoUrl"
        type="url"
        defaultValue={defaultValue}
        placeholder="https://www.youtube.com/watch?v=…"
        className="h-[38px] rounded-lg border border-line px-3 text-[14px]"
      />
    </div>
  );
}
