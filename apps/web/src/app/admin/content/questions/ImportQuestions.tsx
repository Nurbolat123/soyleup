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
      <p className="mt-2 text-[13px] text-muted">
        Заполните шаблон и загрузите файл обратно (.xlsx или .csv). Через импорт можно добавить только MULTIPLE_CHOICE и
        FILL_BLANK — остальные типы добавляются формой выше. option1–option4 — варианты ответа (для FILL_BLANK не
        нужны); correctAnswer — для MULTIPLE_CHOICE точный текст правильного варианта, для FILL_BLANK — допустимые
        ответы через «;».
      </p>
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
