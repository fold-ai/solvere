"use server";

export type RequestState =
  | { status: "idle" }
  | { status: "sent"; message: string }
  | { status: "error"; message: string }
  | { status: "unconfigured"; message: string };

const CONTACT_TO = process.env.CONTACT_TO ?? "jacob.wang@solvere.sg";
const CONTACT_FROM = process.env.CONTACT_FROM ?? "Solvere site <onboarding@resend.dev>";

/**
 * The demo request.
 *
 * Delivery goes through Resend over plain fetch rather than an SDK, so the
 * project keeps one fewer dependency and one fewer thing to upgrade. If the
 * key is not set the action says so and the form falls back to a mailto link,
 * which still reaches the same inbox; it just asks the visitor to press send.
 *
 * Nothing is stored. The fields exist to reply to, as the page promises.
 */
export async function requestDemo(
  _previous: RequestState,
  formData: FormData,
): Promise<RequestState> {
  // A field no person sees and no person fills. Bots fill everything.
  if (String(formData.get("company_website") ?? "").trim() !== "") {
    return { status: "sent", message: "Thanks. We will be in touch." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const firm = String(formData.get("firm") ?? "").trim();
  const want = formData.get("want") === "call" ? "call" : "module";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address does not look right." };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "unconfigured",
      message: "Email delivery is not configured on this deployment.",
    };
  }

  const subject =
    want === "call" ? `Call request from ${firm || email}` : `Module request from ${firm || email}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject,
        text: [
          `Firm: ${firm || "(not given)"}`,
          `Reply to: ${email}`,
          `Wanted: ${want === "call" ? "a call" : "the module and its coverage report"}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return { status: "error", message: "That did not send. Try the email address below." };
    }
  } catch {
    return { status: "error", message: "That did not send. Try the email address below." };
  }

  return {
    status: "sent",
    message:
      want === "call"
        ? "Thanks. A calendar link is on its way to that address."
        : "Thanks. The module and its coverage report are on their way.",
  };
}
