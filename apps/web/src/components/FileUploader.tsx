"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";

const MAX_FILE_SIZE_MB = 20;
const ACCEPT = "image/jpeg,image/png,image/webp,image/heic,application/pdf,.doc,.docx";

interface Attachment {
  key: string;
  name: string;
  previewUrl: string | null;
}

function isImageFile(file: File): boolean {
  return file.type.startsWith("image/");
}

export function FileUploader({
  onPresign,
  onChange,
  maxFiles = 10,
}: {
  onPresign: (fileName: string, contentType: string) => Promise<{ uploadUrl: string; key: string }>;
  onChange: (keys: string[]) => void;
  maxFiles?: number;
}) {
  const [files, setFiles] = useState<Attachment[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    setError(null);
    const toUpload = Array.from(fileList).slice(0, Math.max(0, maxFiles - files.length));

    const tooLarge = toUpload.find((f) => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);
    if (tooLarge) {
      setError(`Файл «${tooLarge.name}» больше ${MAX_FILE_SIZE_MB} МБ — выберите файл поменьше.`);
      return;
    }

    setUploading(true);
    try {
      const uploaded: Attachment[] = [];
      for (const file of toUpload) {
        const { uploadUrl, key } = await onPresign(file.name, file.type);
        const res = await fetch(uploadUrl, { method: "PUT", headers: { "Content-Type": file.type }, body: file });
        if (!res.ok) throw new Error("upload failed");
        uploaded.push({ key, name: file.name, previewUrl: isImageFile(file) ? URL.createObjectURL(file) : null });
      }
      const next = [...files, ...uploaded];
      setFiles(next);
      onChange(next.map((f) => f.key));
    } catch {
      setError("Не удалось загрузить один или несколько файлов. Проверьте соединение и попробуйте ещё раз.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeFile(key: string) {
    const next = files.filter((f) => f.key !== key);
    setFiles(next);
    onChange(next.map((f) => f.key));
  }

  return (
    <div className="flex flex-col gap-3">
      {files.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {files.map((f) => (
            <div key={f.key} className="relative">
              {f.previewUrl ? (
                <img src={f.previewUrl} alt="" className="h-20 w-20 rounded-xl border border-line object-cover" />
              ) : (
                <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-xl border border-line bg-paper-2 px-1 text-center">
                  <span className="text-[22px]">📄</span>
                  <span className="w-full truncate text-[11px] text-muted">{f.name}</span>
                </div>
              )}
              <button
                type="button"
                onClick={() => removeFile(f.key)}
                aria-label={`Удалить ${f.name}`}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[14px] leading-none text-paper"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {files.length < maxFiles && (
        <label className="inline-flex h-[46px] w-fit cursor-pointer items-center rounded-2xl border border-line px-5 text-[14px] font-semibold text-ink transition-colors hover:border-blue">
          {uploading ? "Загружаем…" : "Добавить файл"}
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPT}
            multiple
            disabled={uploading}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
        </label>
      )}
      <p className="text-[13px] text-muted">Фото, PDF или Word-документ — до {MAX_FILE_SIZE_MB} МБ каждый.</p>

      {error && <p className="text-[14px] font-semibold text-error">{error}</p>}
    </div>
  );
}
