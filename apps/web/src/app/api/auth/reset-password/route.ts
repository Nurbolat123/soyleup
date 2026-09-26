import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "@/lib/config";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const apiRes = await fetch(`${API_URL}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await apiRes.json().catch(() => undefined);
  return NextResponse.json(data, { status: apiRes.status });
}
