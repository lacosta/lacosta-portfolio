"use client";

// @packages
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";

// @app
import { projects, type Project } from "@components/portfolio/data";
import { SectionHeading } from "@components/section-heading/section-heading";
import { useInView } from "@/lib/hooks/use-in-view";

// @own
import { FeaturedProject } from "./featured-project";
import { SecondaryProject } from "./secondary-project";

type Slug = Project["slug"];
type Phase = "idle" | "out" | "in";

/** Length of the fallback "out" step; matches the transition durations in _work.scss. */
const FALLBACK_OUT_MS = 260;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Projects = () => {
  const [featured, setFeatured] = useState<Slug>("mockadabra");
  const [phase, setPhase] = useState<Phase>("idle");
  const [announcement, setAnnouncement] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const focusTitleRef = useRef(false);
  const [gridRef, inView] = useInView<HTMLDivElement>();

  useEffect(() => () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (!focusTitleRef.current) return;
    focusTitleRef.current = false;
    titleRef.current?.focus({ preventScroll: true });
  }, [featured]);

  const commit = (slug: Slug) => {
    setFeatured(slug);
    const project = projects.find((item) => item.slug === slug);
    setAnnouncement(project ? `${project.title} is now featured` : "");
  };

  /**
   * Promotes a project. The cover morphs between slots with the View
   * Transitions API; browsers without it get a short wipe-and-fade.
   * `fromCard` moves focus to the new featured title, because the card that
   * was activated no longer exists in the secondary column.
   */
  const select = (slug: Slug, fromCard = false) => {
    if (slug === featured || phase === "out") return;
    focusTitleRef.current = fromCard;

    if (prefersReducedMotion()) {
      commit(slug);
      return;
    }
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(() => {
        flushSync(() => commit(slug));
      });
      return;
    }
    setPhase("out");
    timeoutRef.current = window.setTimeout(() => {
      commit(slug);
      setPhase("in");
    }, FALLBACK_OUT_MS);
  };

  const featuredProject = projects.find((project) => project.slug === featured) ?? projects[0];
  const others = projects.filter((project) => project.slug !== featured);

  const selector = (
    <div className="work-selector" role="group" aria-label="Choose featured project">
      <span className="work-selector__label" aria-hidden="true">
        featured
      </span>
      {projects.map((project) => {
        const active = project.slug === featured;
        return (
          <button
            key={project.slug}
            type="button"
            className="work-selector__option"
            aria-pressed={active}
            onClick={() => select(project.slug)}
            style={{ "--project-accent": `var(--accent-${project.slug})` } as CSSProperties}
          >
            <span className="work-selector__dot" aria-hidden="true" />
            <span className="work-selector__number">{project.number}</span> {project.shortTitle}
          </button>
        );
      })}
    </div>
  );

  return (
    <section id="work" className="work section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          index="02"
          eyebrow="Independent products"
          title="Selected work"
          aside={selector}
        />
        <p className="visually-hidden" aria-live="polite">
          {announcement}
        </p>

        <div ref={gridRef} className="work-grid" data-phase={phase} data-in-view={inView}>
          <FeaturedProject project={featuredProject} titleRef={titleRef} />
          <div className="work-secondary-list">
            <p className="work-secondary-list__label">Also building</p>
            {others.map((project, index) => (
              <SecondaryProject
                key={project.slug}
                project={project}
                variant={index === 0 ? "image-first" : "text-first"}
                onSelect={() => select(project.slug, true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
