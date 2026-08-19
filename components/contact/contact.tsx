"use client";

// @packages
import { useState } from "react";
import { Mail } from "lucide-react";

// @own
import { Dialog } from "./dialog";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <section id="contact" className="container contact">
        <div className="contact__content">
          <div>
            <p className="eyebrow contact__eyebrow">
              Working on a frontend problem?
            </p>
            <h2 className="contact__title">
              Let&apos;s talk about
              <br />
              <span className="contact__title-accent">the work.</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setSent(false);
            }}
            className="button"
          >
            Start a conversation <Mail size={16} />
          </button>
        </div>
      </section>
      {open && (
        <Dialog sent={sent} setSent={setSent} close={() => setOpen(false)} />
      )}
    </>
  );
};
