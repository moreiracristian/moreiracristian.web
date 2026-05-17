import { sql } from "@vercel/postgres";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  const fullMessage = `${company ? `[${company}] ` : ""}${message}`;

  await sql`
    INSERT INTO contacts (name, email, message)
    VALUES (${name}, ${email}, ${fullMessage})
  `;

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Sitio Web <onboarding@resend.dev>",
      to: "bymoreiracristian@gmail.com",
      subject: `Nuevo mensaje de ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:8px">
          <h2 style="margin:0 0 16px;color:#111827">Nuevo mensaje desde tu sitio web</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:90px">Nombre</td><td style="padding:8px 0;color:#111827;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3b82f6">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#6b7280">Empresa</td><td style="padding:8px 0;color:#111827">${company}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e5e7eb">
            <p style="margin:0;color:#374151;line-height:1.6">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top:16px;font-size:12px;color:#9ca3af">Respondé directamente a este email para contestarle a ${name}.</p>
        </div>
      `,
      replyTo: email,
    });
  }

  return NextResponse.json({ ok: true });
}
