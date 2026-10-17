"use client";

// @packages
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

// @app
import { Wordmark } from "@components/brand/wordmark";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "How I work", href: "#approach" },
];

export const Header = () => {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Primary navigation">
        <a href="#home" className="site-header__brand" aria-label="lacosta.dev, back to home">
          <Wordmark />
        </a>
        <div className="site-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="site-header__actions">
          <button
            type="button"
            className="icon-button"
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            onClick={toggleTheme}
          >
            {light ? <Moon size={17} strokeWidth={1.6} /> : <Sun size={17} strokeWidth={1.6} />}
          </button>
          <span className="site-header__divider" aria-hidden="true" />
          <a href="#contact" className="button button--outline site-header__cta">
            Get in touch
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button icon-button--outlined site-header__menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        {[...navigation, { label: "Contact", href: "#contact" }].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-menu__link"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};
