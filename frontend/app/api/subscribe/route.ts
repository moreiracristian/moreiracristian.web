import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.POSTGRES_URL!);

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }
  try {
    await sql`INSERT INTO subscribers (email) VALUES (${email})`;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Email ya registrado" }, { status: 409 });
  }
}
