import Link from "next/link";
import { apiFetch } from "@/lib/api";
import { DashboardShell } from "@/components/DashboardShell";
import type { PublicUser } from "@/lib/types";

const CARDS = [
  { href: "/admin/content/courses", title: "Курсы и уроки", desc: "Конструктор курса, модулей, уроков и упражнений с предпросмотром" },
  { href: "/admin/content/vocabulary", title: "Словарь", desc: "Слова, переводы, примеры. Импорт из CSV" },
  { href: "/admin/content/questions", title: "Банк вопросов", desc: "Вопросы для placement-теста по навыкам и уровням. Импорт из CSV" },
];

export default async function AdminContentPage() {
  const me = await apiFetch<PublicUser>("/users/me");
  const noAccess = me.role === "CURATOR" && !me.canManageContent;

  return (
    <DashboardShell role={me.role} name={me.firstName} title="Контент" wide>
      {me.role === "ADMIN" ? (
        <Link href="/admin" className="text-sm text-muted">
          ← Пользователи
        </Link>
      ) : (
        <Link href="/curator" className="text-sm text-muted">
          ← Кабинет куратора
        </Link>
      )}
      {noAccess ? (
        <div className="mt-6 rounded-2xl border border-line bg-card p-6 text-muted">
          Доступ к управлению контентом вам пока не открыт — попросите администратора включить его
          в настройках вашего аккаунта.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-line bg-card p-6 no-underline transition-colors hover:border-blue"
            >
              <p className="text-[17px] font-semibold text-ink">{c.title}</p>
              <p className="mt-2 text-[14px] text-muted">{c.desc}</p>
            </Link>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}
