import { notFound } from "next/navigation";
import { apiFetch, ApiError } from "@/lib/api";
import type { MeResponse } from "@/lib/types";
import { getLesson } from "./actions";
import { LessonPlayer } from "./LessonPlayer";

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let lesson;
  try {
    lesson = await getLesson(id);
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) notFound();
    throw e;
  }
  const user = await apiFetch<MeResponse>("/users/me");
  const hasVoiceConsent = user.activeConsents.some((c) => c.type === "VOICE_RECORDING");

  return (
    <LessonPlayer
      lessonId={id}
      initialLesson={lesson}
      hasVoiceConsent={hasVoiceConsent}
      hasCurator={user.hasCurator}
    />
  );
}
