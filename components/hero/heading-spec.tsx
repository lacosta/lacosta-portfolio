"use client";

// @packages
import { useEffect, useRef, useState } from "react";

/**
 * Inspection marks around the hero heading. The label reports the heading's
 * real rendered size, so it stays truthful across breakpoints.
 */
export const HeadingSpec = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [spec, setSpec] = useState<string | null>(null);

  useEffect(() => {
    const heading = ref.current?.parentElement?.querySelector("h1");
    if (!heading) return;
    const measure = () => {
      const style = getComputedStyle(heading);
      const fontSize = parseFloat(style.fontSize);
      const lineHeight = parseFloat(style.lineHeight) / fontSize;
      setSpec(`h1 · ${Math.round(fontSize)} / ${lineHeight.toFixed(2)}`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="heading-spec" aria-hidden="true">
      <span className="heading-spec__corner heading-spec__corner--tl" />
      <span className="heading-spec__corner heading-spec__corner--tr" />
      <span className="heading-spec__corner heading-spec__corner--bl" />
      <span className="heading-spec__corner heading-spec__corner--br" />
      {spec && <span className="heading-spec__label">{spec}</span>}
    </div>
  );
};
