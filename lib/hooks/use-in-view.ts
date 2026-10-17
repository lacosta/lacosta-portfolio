"use client";

// @packages
import { useEffect, useRef, useState } from "react";

/**
 * "idle" until the observer reports, so server-rendered markup stays visible
 * without JavaScript. Elements below the fold become "hidden" and then
 * "visible" once, which is when reveal transitions play.
 */
export type InViewState = "idle" | "hidden" | "visible";

export const useInView = <T extends Element>(
  options: IntersectionObserverInit = { rootMargin: "0px 0px -15% 0px" },
) => {
  const ref = useRef<T>(null);
  const [state, setState] = useState<InViewState>("idle");
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        } else {
          setState((current) => (current === "idle" ? "hidden" : current));
        }
      },
      { root, rootMargin, threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return [ref, state] as const;
};
