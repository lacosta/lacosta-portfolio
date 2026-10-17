"use client";

// @packages
import { useId, useState, type ReactNode } from "react";
import { Mail, MessageSquare, Search } from "lucide-react";

// @app
import { contactLinks } from "@components/portfolio/data";

// @own
import { Dialog } from "./dialog";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </svg>
);

interface Command {
  id: string;
  label: string;
  keywords: string;
  icon: ReactNode;
  hint: string;
  href?: string;
}

const commands: Command[] = [
  {
    id: "conversation",
    label: "Start a conversation",
    keywords: "message form contact write",
    icon: <MessageSquare size={18} strokeWidth={1.75} aria-hidden="true" />,
    hint: "↵",
  },
  {
    id: "email",
    label: contactLinks.email,
    keywords: "email mail",
    icon: <Mail size={18} strokeWidth={1.75} aria-hidden="true" />,
    hint: "email",
    href: `mailto:${contactLinks.email}`,
  },
  {
    id: "github",
    label: contactLinks.github.replace("https://", ""),
    keywords: "github code repositories",
    icon: <GitHubIcon />,
    hint: "↗",
    href: contactLinks.github,
  },
  {
    id: "linkedin",
    label: contactLinks.linkedin.replace("https://www.", "").replace(/\/$/, ""),
    keywords: "linkedin profile",
    icon: <LinkedInIcon />,
    hint: "↗",
    href: contactLinks.linkedin,
  },
];

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [query, setQuery] = useState("");
  const inputId = useId();

  const normalized = query.trim().toLowerCase();
  const visible = commands.filter(
    (command) =>
      !normalized ||
      command.label.toLowerCase().includes(normalized) ||
      command.keywords.includes(normalized),
  );

  const openDialog = () => {
    setOpen(true);
    setSent(false);
  };

  return (
    <>
      <section id="contact" className="contact section" aria-labelledby="contact-heading">
        <div className="container contact__inner">
          <div className="contact__intro">
            <p className="eyebrow">
              <span className="eyebrow__index">§05</span> — Working on a frontend problem?
            </p>
            <h2 id="contact-heading" className="contact__title">
              Let&apos;s talk about <span className="contact__accent">the work.</span>
            </h2>
          </div>

          <div className="palette">
            <div className="palette__search">
              <Search size={16} strokeWidth={2} aria-hidden="true" className="palette__search-icon" />
              <label htmlFor={inputId} className="visually-hidden">
                Filter contact options
              </label>
              <input
                id={inputId}
                type="text"
                value={query}
                autoComplete="off"
                placeholder="How do you want to reach me?"
                className="palette__input"
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setQuery("");
                }}
              />
              <kbd className="palette__kbd" aria-hidden="true">
                esc
              </kbd>
            </div>
            <ul className="palette__list">
              {visible.map((command) => (
                <li key={command.id}>
                  {command.href ? (
                    <a
                      href={command.href}
                      className="palette__item"
                      {...(command.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <span className="palette__icon">{command.icon}</span>
                      <span className="palette__label">{command.label}</span>
                      <span className="palette__hint" aria-hidden="true">
                        {command.hint}
                      </span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="palette__item palette__item--primary"
                      onClick={openDialog}
                    >
                      <span className="palette__icon palette__icon--accent">{command.icon}</span>
                      <span className="palette__label">{command.label}</span>
                      <kbd className="palette__hint" aria-hidden="true">
                        {command.hint}
                      </kbd>
                    </button>
                  )}
                </li>
              ))}
              {visible.length === 0 && (
                <li className="palette__empty" role="status">
                  No matching contact option.
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
      {open && <Dialog sent={sent} setSent={setSent} close={() => setOpen(false)} />}
    </>
  );
};
