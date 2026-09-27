"use client";

import { useState, useTransition } from "react";
import { downloadXlsxTemplate, fileToCsv } from "@/lib/spreadsheet";
import { importQuestions } from "./actions";
import type { ImportResult } from "@/lib/types";

const HEADERS = ["skill", "level", "difficulty", "type", "question", "option1", "option2", "option3", "option4", "correctAnswer", "explanation"];
const EXAMPLE_ROWS = [
  ["GRAMMAR", "B1", 2, "MULTIPLE_CHOICE", "I ___ tired.", "am", "is", "are", "", "am", "Present Simple of «to be»."],
  ["GRAMMAR", "B1", 2, "FILL_BLANK", "She ___ (work) here for 5 years.", "", "", "", "", "has worked;has been working", ""],
];

export function ImportQuestions() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleFile(file: File) {
    setFileName(file.name);
    setError(null);
    setResult(null);
    startTransition(async () => {
      try {
        const csv = await fileToCsv(file);
        setResult(await importQuestions(csv));
      } catch {
        setError("Не удалось импортировать. Проверьте, что файл заполнен по шаблону.");
      }
    });
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[17px] font-semibold">Импорт из Excel</p>
        <button
          type="button"
          onClick={() => downloadXlsxTemplate("questions-template.xlsx", HEADERS, EXAMPLE_ROWS)}
          className="text-[13px] font-semibold text-blue"
        >
          Скачать шаблон Excel
        </button>
      </div>
      <div className="mt-2 flex flex-col gap-1.5 text-[13px] text-muted">
        <p>Заполните шаблон и загрузите файл обратно (.xlsx или .csv).</p>
        <p>
          Так можно добавить два вида вопросов: <strong>«выбор ответа»</strong> и <strong>«заполнить пропуск»</strong>.
          Остальные виды (говорение, свободный ответ, сопоставление, порядок слов) добавляются формой выше, по одному.
        </p>
        <p>
          <strong>Для вопроса «выбор ответа»</strong> впишите варианты в колонки option1–option4 (четыре заполнять
          не обязательно), а в колонку correctAnswer — тот вариант, который правильный, слово в слово так же, как он
          написан в одной из колонок option1–option4.
        </p>
        <p>
          <strong>Для вопроса «заполнить пропуск»</strong> колонки option1–option4 оставьте пустыми. В correctAnswer
          впишите правильный ответ — а если подходит несколько вариантов ответа, перечислите их через точку с
          запятой «;», например: <code>has worked;has been working</code>.
        </p>
      </div>
      <label className="mt-3 flex h-[46px] w-fit cursor-pointer items-center rounded-2xl border border-dashed border-line px-4 text-[14px] font-semibold text-ink hover:border-blue">
        {pending ? "Импортируем…" : fileName ?? "Выбрать файл…"}
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          disabled={pending}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = "";
          }}
          className="hidden"
        />
      </label>
      {error && <p className="mt-3 text-[14px] font-semibold text-error">{error}</p>}
      {result && (
        <div className="mt-3 text-[14px]">
          <p className="font-semibold">Импортировано: {result.imported}</p>
          {result.skipped.length > 0 && (
            <ul className="mt-1 list-disc pl-5 text-muted">
              {result.skipped.map((s, i) => (
                <li key={i}>Строка {s.row}: {s.reason}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
