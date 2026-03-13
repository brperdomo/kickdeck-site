import { NextResponse } from "next/server";
import { z } from "zod";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const getStartedSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  interest: z.string().max(1000).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = getStartedSchema.parse(body);

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">
          New Free Trial Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(data.name)}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">
              <a href="mailto:${escapeHtml(data.email)}" style="color: #6366f1;">${escapeHtml(data.email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Organization</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(data.organization)}</td>
          </tr>
          ${
            data.interest
              ? `<tr style="background-color: #f9fafb;">
                  <td style="padding: 8px 12px; font-weight: 600; color: #555; vertical-align: top;">Interested In</td>
                  <td style="padding: 8px 12px; color: #1a1a2e; white-space: pre-wrap;">${escapeHtml(data.interest)}</td>
                </tr>`
              : ""
          }
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Submitted from the KickDeck website &mdash; Get Started form
        </p>
      </div>
    `;

    if (!process.env.BREVO_API_KEY) {
      console.warn(
        "[get-started] BREVO_API_KEY is not set. Skipping email send in development."
      );
      return NextResponse.json({ success: true });
    }

    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "KickDeck Website", email: process.env.DEFAULT_FROM_EMAIL || "no-reply@kickdeck.xyz" },
        to: [{ email: "info@kickdeck.xyz" }],
        replyTo: { email: data.email, name: data.name },
        subject: `[KickDeck] Free Trial Request from ${data.name} — ${data.organization}`,
        htmlContent: htmlBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`[get-started] Brevo API error (${response.status}):`, errorData);
      return NextResponse.json(
        { error: "Failed to submit request. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    console.error("[get-started] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
