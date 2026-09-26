"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = new FormData(event.currentTarget);
    const newPassword = form.get("newPassword");
    const confirm = form.get("confirm");
    if (newPassword !== confirm) {
      setError("Пароли не совпадают");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => undefined);
        setError(data?.message ?? "Ссылка недействительна или устарела. Запросите новую.");
        setSubmitting(false);
        return;
      }
      router.push("/login");
    } catch {
      setError("Не удалось отправить запрос. Проверьте интернет-соединение.");
      setSubmitting(false);
    }
  }

  if (!token) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-paper px-5 py-12">
        <div className="w-full max-w-[420px] rounded-3xl border border-line bg-card p-9 text-center">
          <p className="text-[16px] text-muted">
            В ссылке нет кода восстановления. Запросите новую ссылку.
          </p>
          <Link href="/forgot-password" className="mt-4 inline-block text-blue">
            Восстановить пароль
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-5 py-12">
      <div className="w-full max-w-[420px] rounded-3xl border border-line bg-card p-9">
        <h1 className="display text-[28px] leading-tight">Новый пароль</h1>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="newPassword" className="text-sm font-semibold">
              Новый пароль
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              required
              minLength={8}
              maxLength={72}
              autoComplete="new-password"
              className="h-[50px] rounded-2xl border border-line px-4 text-[16px] focus:border-blue focus:outline-none"
            />
            <span className="text-[13px] text-muted">Минимум 8 символов.</span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirm" className="text-sm font-semibold">
              Повторите пароль
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              minLength={8}
              maxLength={72}
              autoComplete="new-password"
              className="h-[50px] rounded-2xl border border-line px-4 text-[16px] focus:border-blue focus:outline-none"
            />
          </div>

          {error && <p className="text-[15px] font-semibold text-error">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="h-[54px] rounded-2xl bg-ink text-[17px] font-semibold text-paper transition-colors hover:bg-[#2A2D34] disabled:opacity-60"
          >
            {submitting ? "Сохраняем…" : "Сохранить новый пароль"}
          </button>
        </form>
      </div>
    </main>
  );
}
