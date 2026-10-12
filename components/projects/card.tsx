"use client";

// @packages
import Image from "next/image";
import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";

// @app
import type { Project } from "@components/portfolio/data";

export const Card = ({ project }: { project: Project }) => {
  const coverRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointRef = useRef({ x: 0, y: 0 });
  const mediaRef = useRef<{
    hover: MediaQueryList;
    reducedMotion: MediaQueryList;
  } | null>(null);

  const resetCover = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    const cover = coverRef.current;
    if (!cover) return;
    cover.dataset.active = "false";
    for (const property of ["--tilt-x", "--tilt-y", "--depth-x", "--depth-y"]) {
      cover.style.removeProperty(property);
    }
  }, []);

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaRef.current = { hover, reducedMotion };
    const handleMediaChange = () => {
      if (!hover.matches || reducedMotion.matches) resetCover();
    };
    hover.addEventListener("change", handleMediaChange);
    reducedMotion.addEventListener("change", handleMediaChange);
    window.addEventListener("blur", resetCover);
    return () => {
      hover.removeEventListener("change", handleMediaChange);
      reducedMotion.removeEventListener("change", handleMediaChange);
      window.removeEventListener("blur", resetCover);
      resetCover();
    };
  }, [resetCover]);

  const moveCover = (event: PointerEvent<HTMLDivElement>) => {
    const media = mediaRef.current;
    if (
      event.pointerType !== "mouse" ||
      !media?.hover.matches ||
      media.reducedMotion.matches
    ) {
      return;
    }
    pointRef.current = { x: event.clientX, y: event.clientY };
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const cover = coverRef.current;
      if (!cover || !media.hover.matches || media.reducedMotion.matches) return;
      const bounds = cover.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const clamp = (value: number) => Math.max(-1, Math.min(1, value));
      const x = clamp(((pointRef.current.x - bounds.left) / bounds.width) * 2 - 1);
      const y = clamp(((pointRef.current.y - bounds.top) / bounds.height) * 2 - 1);
      if (cover.dataset.active !== "true") cover.dataset.active = "true";
      cover.style.setProperty("--tilt-x", `${-y * 2}deg`);
      cover.style.setProperty("--tilt-y", `${x * 3}deg`);
      cover.style.setProperty("--depth-x", `${x * 6}px`);
      cover.style.setProperty("--depth-y", `${y * 6}px`);
    });
  };

  return (
    <article className="work-card" aria-labelledby={`${project.slug}-title`}>
      <div
        ref={coverRef}
        className="work-card__visual"
        onPointerEnter={moveCover}
        onPointerMove={moveCover}
        onPointerLeave={resetCover}
        onPointerCancel={resetCover}
      >
        <div className="work-card__stage">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1168px) calc((100vw - 112px) / 3), 352px"
            loading="lazy"
            draggable={false}
            className="work-card__image"
          />
        </div>
        <span className="work-card__light" aria-hidden="true" />
        <p className="work-card__status">{project.status}</p>
      </div>
      <p className="work-card__category">{project.category}</p>
      <div className="work-card__heading">
        <h3 id={`${project.slug}-title`} className="work-card__title">
          {project.title}
        </h3>
        {project.publicLink?.href && (
          <a
            href={project.publicLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.publicLink.label} for ${project.title} (opens in a new tab)`}
            aria-description={project.publicLink.description}
            title={project.publicLink.description
              ? `${project.publicLink.label} — ${project.publicLink.description}`
              : project.publicLink.label}
            className="work-card__link"
          >
            <span className="work-card__link-label">{project.publicLink.label}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
      <p className="work-card__description">{project.description}</p>
      <div className="work-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
