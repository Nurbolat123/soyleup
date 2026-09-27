"use server";

import { revalidatePath } from "next/cache";
import { apiFetch, ApiError } from "@/lib/api";
import { buildBlockContent, buildExerciseContent } from "./contentBuilders";
import type {
  Audience, CefrTarget, Course, ExerciseType, LessonBlockType,
} from "@/lib/types";

export interface ActionState {
  error: string | null;
}

const ok: ActionState = { error: null };

function fail(e: unknown): ActionState {
  return { error: e instanceof ApiError ? e.message : "Не удалось сохранить" };
}

// ── Курс ─────────────────────────────────────────────────
export async function createCourse(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    await apiFetch<Course>("/admin/content/courses", {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
        description: formData.get("description") || undefined,
        level: formData.get("level") as CefrTarget,
        audience: formData.get("audience") as Audience,
      }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath("/admin/content/courses");
  return ok;
}

export async function deleteCourse(id: string) {
  await apiFetch(`/admin/content/courses/${id}`, { method: "DELETE" });
  revalidatePath("/admin/content/courses");
}

// ── Модуль ───────────────────────────────────────────────
export async function createModule(courseId: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    await apiFetch(`/admin/content/courses/${courseId}/modules`, {
      method: "POST",
      body: JSON.stringify({ title: formData.get("title") }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath(`/admin/content/courses/${courseId}`);
  return ok;
}

export async function deleteModule(courseId: string, id: string) {
  await apiFetch(`/admin/content/modules/${id}`, { method: "DELETE" });
  revalidatePath(`/admin/content/courses/${courseId}`);
}

// ── Урок ─────────────────────────────────────────────────
export async function createLesson(
  courseId: string,
  moduleId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    await apiFetch(`/admin/content/modules/${moduleId}/lessons`, {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
        estimatedMinutes: formData.get("estimatedMinutes") ? Number(formData.get("estimatedMinutes")) : undefined,
      }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath(`/admin/content/courses/${courseId}`);
  return ok;
}

export async function deleteLesson(courseId: string, id: string) {
  await apiFetch(`/admin/content/lessons/${id}`, { method: "DELETE" });
  revalidatePath(`/admin/content/courses/${courseId}`);
}

// ── Блок урока ───────────────────────────────────────────
export async function createBlock(lessonId: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const type = formData.get("type") as LessonBlockType;
  const built = buildBlockContent(type, formData);
  if ("error" in built) return { error: built.error };
  try {
    await apiFetch(`/admin/content/lessons/${lessonId}/blocks`, {
      method: "POST",
      body: JSON.stringify({
        type,
        title: formData.get("title") || undefined,
        order: formData.get("order") ? Number(formData.get("order")) : undefined,
        content: built.content,
      }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath(`/admin/content/lessons/${lessonId}`);
  return ok;
}

export async function updateBlock(
  lessonId: string,
  id: string,
  type: LessonBlockType,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const built = buildBlockContent(type, formData);
  if ("error" in built) return { error: built.error };
  try {
    await apiFetch(`/admin/content/blocks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title: formData.get("title") || undefined, content: built.content }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath(`/admin/content/lessons/${lessonId}`);
  return ok;
}

export async function deleteBlock(lessonId: string, id: string) {
  await apiFetch(`/admin/content/blocks/${id}`, { method: "DELETE" });
  revalidatePath(`/admin/content/lessons/${lessonId}`);
}

// ── Упражнение ───────────────────────────────────────────
export async function createExercise(lessonId: string, blockId: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const type = formData.get("type") as ExerciseType;
  const built = buildExerciseContent(type, formData);
  if ("error" in built) return { error: built.error };
  try {
    await apiFetch(`/admin/content/blocks/${blockId}/exercises`, {
      method: "POST",
      body: JSON.stringify({
        type,
        skill: formData.get("skill") || undefined,
        order: formData.get("order") ? Number(formData.get("order")) : undefined,
        content: built.content,
      }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath(`/admin/content/lessons/${lessonId}`);
  return ok;
}

export async function updateExercise(
  lessonId: string,
  id: string,
  type: ExerciseType,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const built = buildExerciseContent(type, formData);
  if ("error" in built) return { error: built.error };
  try {
    await apiFetch(`/admin/content/exercises/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ content: built.content, skill: formData.get("skill") || undefined }),
    });
  } catch (e) {
    return fail(e);
  }
  revalidatePath(`/admin/content/lessons/${lessonId}`);
  return ok;
}

export async function deleteExercise(lessonId: string, id: string) {
  await apiFetch(`/admin/content/exercises/${id}`, { method: "DELETE" });
  revalidatePath(`/admin/content/lessons/${lessonId}`);
}
