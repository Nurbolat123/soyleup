"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export function ForgotPasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const email = new FormData(event.currentTarget).get("email");

    setSubmitting(true);
    try {
      await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      // Ответ одинаковый независимо от того, найден email или нет — это осознанно,
      // чтобы через эту форму нельзя было проверить, зарегистрирован ли адрес.
      setDone(true);
    } catch {
      setError("Не удалось отправить запрос. Проверьте интернет-соединение.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-5 py-12">
      <div className="w-full max-w-[420px] rounded-3xl border border-line bg-card p-9">
        <Link href="/login" className="text-sm text-muted">
          ← Ко входу
        </Link>
        <h1 className="display mt-4 text-[28px] leading-tight">Восстановление пароля</h1>

        {done ? (
          <p className="mt-6 text-[15px] leading-relaxed">
            Если такой email зарегистрирован — на него отправлена ссылка для сброса пароля.
            Ссылка действует 1 час. Проверьте почту (и папку «Спам»).
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
            <p className="text-[15px] text-muted">
              Введите email, указанный при регистрации — пришлём ссылку для нового пароля.
            </p>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-[50px] rounded-2xl border border-line px-4 text-[16px] focus:border-blue focus:outline-none"
              />
            </div>

            {error && <p className="text-[15px] font-semibold text-error">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="h-[54px] rounded-2xl bg-ink text-[17px] font-semibold text-paper transition-colors hover:bg-[#2A2D34] disabled:opacity-60"
            >
              {submitting ? "Отправляем…" : "Отправить ссылку"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
