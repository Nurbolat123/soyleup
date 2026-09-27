"use client";

import { useState, useTransition } from "react";
import { downloadXlsxTemplate, fileToCsv } from "@/lib/spreadsheet";
import { importWords } from "./actions";
import type { ImportResult } from "@/lib/types";

const HEADERS = [
  "word", "translationRu", "translationKk", "definition", "level", "transcription", "audioUrl",
  "examples", "collocations", "relatedWords",
];
const EXAMPLE_ROWS = [
  ["honest", "честный", "адал", "truthful and sincere", "B1", "/ˈɒnɪst/", "", "He is always honest with me.", "honest opinion", "honesty"],
];

export function ImportVocabulary() {
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
        setResult(await importWords(csv));
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
          onClick={() => downloadXlsxTemplate("vocabulary-template.xlsx", HEADERS, EXAMPLE_ROWS)}
          className="text-[13px] font-semibold text-blue"
        >
          Скачать шаблон Excel
        </button>
      </div>
      <p className="mt-2 text-[13px] text-muted">
        Заполните шаблон и загрузите файл обратно (.xlsx или .csv). Несколько примеров/сочетаний в одной ячейке —
        через «;».
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
                <li key={i}>
                  Строка {s.row}: {s.reason}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
