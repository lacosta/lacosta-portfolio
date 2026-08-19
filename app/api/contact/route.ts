// @packages
import { NextResponse } from "next/server";
import { parseContactMessage, sendContactMessage } from "@/lib/contact/contact-service";

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const contactMessage = parseContactMessage(formData);

  if (!contactMessage) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const result = await sendContactMessage(contactMessage);

  if (!result.configured) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 },
    );
  }

  if (result.error)
    return NextResponse.json(
      { error: "Unable to send message" },
      { status: 500 },
    );
  return NextResponse.json({ ok: true });
};
