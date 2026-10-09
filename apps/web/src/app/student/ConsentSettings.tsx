"use client";

import { useTransition } from "react";
import { setOwnConsent } from "./actions";
import type { ActiveConsent, ConsentType } from "@/lib/types";

const CONSENT_LABELS: Record<ConsentType, string> = {
  DATA_PROCESSING: "Обработка персональных данных",
  VOICE_RECORDING: "Запись голоса (Speaking)",
  CAMERA: "Камера при самостоятельной работе",
  MICROPHONE: "Микрофон при самостоятельной работе",
  MARKETING: "Маркетинговые рассылки",
};

// DATA_PROCESSING выдаётся автоматически при регистрации взрослого ученика,
// а его отзыв — это отдельная процедура удаления аккаунта, не переключатель здесь.
const CONSENT_ORDER: ConsentType[] = ["VOICE_RECORDING", "CAMERA", "MICROPHONE", "MARKETING"];

export function ConsentSettings({ activeConsents }: { activeConsents: ActiveConsent[] }) {
  const [pending, startTransition] = useTransition();
  const grantedTypes = new Set(activeConsents.map((c) => c.type));

  function toggleConsent(type: ConsentType) {
    startTransition(() => setOwnConsent(type, !grantedTypes.has(type)));
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <p className="text-[17px] font-semibold">Согласия</p>
      <p className="mt-1 text-[14px] text-muted">
        Нужны для записи голоса в устной части и для контроля самостоятельной работы через
        камеру/микрофон — без согласия эти функции просто недоступны.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {CONSENT_ORDER.map((type) => {
          const granted = grantedTypes.has(type);
          return (
            <label
              key={type}
              className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3"
            >
              <span className="text-[15px]">{CONSENT_LABELS[type]}</span>
              <input
                type="checkbox"
                checked={granted}
                disabled={pending}
                onChange={() => toggleConsent(type)}
                className="h-5 w-5 accent-blue"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
