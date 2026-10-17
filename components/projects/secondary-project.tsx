// @packages
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import type { CSSProperties } from "react";

// @app
import type { Project } from "@components/portfolio/data";

// @own
import {
  ExternalLink,
  ProjectStatus,
  availableLinks,
  mediaTransitionName,
} from "./project-parts";

interface SecondaryProjectProps {
  project: Project;
  variant: "image-first" | "text-first";
  onSelect: () => void;
}

export const SecondaryProject = ({ project, variant, onSelect }: SecondaryProjectProps) => {
  const links = availableLinks(project);
  const titleId = `work-${project.slug}-title`;

  return (
    <article
      className={`work-secondary work-secondary--${variant}`}
      aria-labelledby={titleId}
      style={{ "--project-accent": `var(--accent-${project.slug})` } as CSSProperties}
    >
      <span className="work-secondary__ticks" aria-hidden="true" />
      <p className="work-meta work-secondary__meta">
        <span>
          {project.number}
          <span className="work-secondary__meta-status"> · {project.status.tone === "live" ? "live" : "in development"}</span>
        </span>
        <span className="work-meta__kind">{project.kind}</span>
      </p>
      <div
        className="work-secondary__media"
        style={{
          background: project.cover.background,
          viewTransitionName: mediaTransitionName(project.slug),
        }}
      >
        <Image
          src={project.cover.src}
          alt=""
          width={project.cover.width}
          height={project.cover.height}
          sizes="(max-width: 767px) 72px, (max-width: 1360px) 30vw, 420px"
          className="work-secondary__image"
          style={{ objectPosition: project.cover.position }}
        />
        <span className="work-secondary__hint" aria-hidden="true">
          <Maximize2 size={11} strokeWidth={2} />
          feature
        </span>
      </div>
      <h3 id={titleId} className="work-secondary__title">
        <button type="button" className="work-secondary__select" onClick={onSelect}>
          <span className="visually-hidden">Feature </span>
          {project.title}
        </button>
      </h3>
      <div className="work-secondary__status">
        <ProjectStatus status={project.status} />
      </div>
      <p className="work-secondary__summary">{project.summary}</p>
      <div className="work-secondary__footer">
        <span className="work-secondary__stack">{project.tags.join(" · ")}</span>
        {links.length > 0 && (
          <span className="work-secondary__links">
            {links.map((link) => (
              <ExternalLink
                key={link.label}
                link={link}
                projectTitle={project.title}
                className="project-link project-link--compact"
              />
            ))}
          </span>
        )}
      </div>
    </article>
  );
};
