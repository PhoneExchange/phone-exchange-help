import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BodySchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
  hp: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = BodySchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    // 허니팟 트리거 (봇이면 바로 204)
    if (parsed.data.hp) {
      return NextResponse.json({ ok: true }, { status: 204 });
    }

    const { name, email, subject, message } = parsed.data;

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
        <h2 style="margin:0 0 8px">New contact message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Subject:</b> ${escapeHtml(subject)}</p>
        <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
        <p style="color:#777;font-size:12px">Sent from Help Center contact form</p>
      </div>
    `;

    const text = `New contact message
            Name: ${name}
            Email: ${email}
            Subject: ${subject}

            ${message}
            `;

    const to = process.env.CONTACT_TO!;
    const from = process.env.CONTACT_FROM!;

    if (!to || !from) {
      return NextResponse.json({ ok: false, error: "Email config missing" }, { status: 500 });
    }

    const result = await resend.emails.send({
      from,
      to,
      subject: `[Phone Exchange] ${subject}`,
      html,
      text,
      replyTo: email,
      headers: {
        "X-Contact-Source": "help-center",
      },
    });

    if ((result as any).error) {
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
