"use client";

// @packages
import { FormEvent, useState } from "react";
import { Check, Send, X } from "lucide-react";

interface DialogProps {
  sent: boolean;
  setSent: (value: boolean) => void;
  close: () => void;
}

export const Dialog = ({ sent, setSent, close }: DialogProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      if (!response.ok) throw new Error("send");
      setSent(true);
      event.currentTarget.reset();
    } catch {
      setError("The message could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="dialog-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && close()}
    >
      <div className="dialog">
        <div className="dialog__header">
          <div>
            <div className="dialog__icon">
              <Send size={19} />
            </div>
            <h2 id="contact-title" className="dialog__title">
              Tell me what you&apos;re working on.
            </h2>
            <p className="dialog__intro">
              A short description is enough to start a conversation.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close contact form"
            onClick={close}
            className="dialog__close"
          >
            <X size={20} />
          </button>
        </div>
        {sent ? (
          <div className="form-success">
            <Check size={22} />
            <p className="form-success__title">Message sent.</p>
            <p className="form-success__copy">
              Thanks. I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="form">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
            <label className="form__field">
              What are you working on?
              <textarea
                required
                name="message"
                rows={4}
                className="form__input"
                placeholder="A frontend problem, product or team context..."
              />
            </label>
            {error && <p className="form__error">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="button form__button"
            >
              {loading ? "Sending..." : "Send message"} <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const Field = ({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) => {
  return (
    <label className="form__field">
      {label}
      <input
        required
        name={name}
        type={type}
        className="form__input"
        placeholder={placeholder}
      />
    </label>
  );
};
