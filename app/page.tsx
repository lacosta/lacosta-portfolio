"use client";

// @packages
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Moon, Sun } from "lucide-react";

// @own
import { About } from "@components/about/about";
import { Contact } from "@components/contact/contact";
import { Experience } from "@components/experience/experience";
import { Hero } from "@components/hero/hero";
import { Projects } from "@components/projects/projects";
import { Skills } from "@components/skills/skills";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "How I work", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const Page = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <main className="site">
      <header className="site-header container">
        <nav className="site-header__nav" aria-label="Primary navigation">
          <Link
            href="#home"
            aria-label="LACOSTA, back to home"
            className="brand"
          >
            <Image
              src="/lacosta-logo.svg"
              alt=""
              width={36}
              height={36}
              priority
              className="brand__mark"
            />
            <span className="brand__name">
              LACOSTA<span className="brand__dot">.</span>
            </span>
          </Link>
          <div className="site-nav">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </header>

      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>LACOSTA · Frontend Developer</span>
          <div className="site-footer__links">
            <a
              href="https://github.com/lacosta"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="site-footer__link"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/lacostadev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="site-footer__link"
            >
              IN
            </a>
            <a
              href="mailto:lacosta.code@gmail.com"
              aria-label="Email"
              className="site-footer__link"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Page;
