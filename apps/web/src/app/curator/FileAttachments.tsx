"use client";

import { useState } from "react";

export function FileAttachments({
  label,
  count,
  fetchUrls,
}: {
  label: string;
  count: number;
  fetchUrls: () => Promise<{ urls: string[] }>;
}) {
  const [urls, setUrls] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleOpen() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchUrls();
      setUrls(res.urls);
    } catch {
      setError("Не удалось загрузить файлы.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-4">
      <p className="text-[14px] font-semibold">
        {label} ({count})
      </p>
      {urls ? (
        <ul className="mt-2 flex flex-col gap-1.5">
          {urls.map((url, i) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noreferrer" className="text-[14px] text-blue underline">
                Открыть файл {i + 1}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <button
          type="button"
          onClick={handleOpen}
          disabled={loading}
          className="mt-2 h-[40px] rounded-2xl border border-ink px-4 text-[14px] font-semibold text-ink disabled:opacity-40"
        >
          {loading ? "Загружаем…" : "Показать файлы"}
        </button>
      )}
      {error && <p className="mt-2 text-[13px] font-semibold text-error">{error}</p>}
    </div>
  );
}
