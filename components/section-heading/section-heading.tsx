"use client";

// @packages
import type { ReactNode } from "react";

// @app
import { useInView } from "@/lib/hooks/use-in-view";

interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  aside?: ReactNode;
}

export const SectionHeading = ({
  id,
  index,
  eyebrow,
  title,
  aside,
}: SectionHeadingProps) => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="section-heading" data-in-view={inView}>
      <p className="eyebrow">
        <span className="eyebrow__index">§{index}</span> — {eyebrow}
      </p>
      <div className="section-heading__row">
        <h2 id={id} className="section-heading__title">
          {title}
        </h2>
        {aside}
      </div>
      <div className="rule section-heading__rule" aria-hidden="true" />
    </div>
  );
};
