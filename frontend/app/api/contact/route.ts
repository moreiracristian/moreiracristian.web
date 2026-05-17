import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }
  await sql`
    INSERT INTO contacts (name, email, message)
    VALUES (${name}, ${email}, ${`${company ? `[${company}] ` : ""}${message}`})
  `;
  return NextResponse.json({ ok: true });
}
