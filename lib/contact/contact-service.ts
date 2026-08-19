// @packages
import { Resend } from "resend";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const parseContactMessage = (
  formData: FormData,
): ContactMessage | null => {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message || !email.includes("@")) {
    return null;
  }

  return { name, email, message };
};

export const sendContactMessage = async (contactMessage: ContactMessage) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { configured: false, error: null };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      process.env.CONTACT_FROM_EMAIL ||
      "Website contact <onboarding@resend.dev>",
    to: ["lacosta.code@gmail.com"],
    replyTo: contactMessage.email,
    subject: `New message from ${contactMessage.name}`,
    text: `Name: ${contactMessage.name}\nEmail: ${contactMessage.email}\n\nMessage:\n${contactMessage.message}`,
  });

  return { configured: true, error };
};
