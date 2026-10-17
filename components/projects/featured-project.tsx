// @packages
import Image from "next/image";
import type { CSSProperties, Ref } from "react";

// @app
import type { Project } from "@components/portfolio/data";

// @own
import {
  ExternalLink,
  ProjectStatus,
  availableLinks,
  mediaTransitionName,
} from "./project-parts";

interface FeaturedProjectProps {
  project: Project;
  titleRef: Ref<HTMLHeadingElement>;
}

export const FeaturedProject = ({ project, titleRef }: FeaturedProjectProps) => {
  const [primary, secondary] = availableLinks(project);

  return (
    <article
      className="work-featured"
      aria-labelledby="work-featured-title"
      style={{ "--project-accent": `var(--accent-${project.slug})` } as CSSProperties}
    >
      <p className="work-meta">
        <span>{project.number} · featured</span>
        <span className="work-meta__kind">{project.kind}</span>
      </p>
      <div
        className="work-featured__media"
        style={{
          background: project.cover.background,
          viewTransitionName: mediaTransitionName(project.slug),
        }}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1360px) 62vw, 860px"
          priority={project.slug === "mockadabra"}
          className="work-featured__image"
          style={{ objectPosition: project.cover.position }}
        />
      </div>
      <div className="work-featured__panel">
        <ProjectStatus status={project.status} />
        <div className="work-featured__heading">
          <h3
            id="work-featured-title"
            ref={titleRef}
            tabIndex={-1}
            className="work-featured__title"
          >
            {project.title}
          </h3>
          <p className="work-featured__stack">{project.tags.join(" · ")}</p>
        </div>
        <p className="work-featured__tagline">{project.tagline}</p>
        <ul className="work-featured__features" aria-label={`${project.title} features`}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {(primary || secondary || project.note) && (
          <div className="work-featured__actions">
            {primary && (
              <ExternalLink
                link={primary}
                projectTitle={project.title}
                className="button button--project"
              />
            )}
            {secondary && (
              <ExternalLink
                link={secondary}
                projectTitle={project.title}
                className="project-link"
              />
            )}
            {project.note && !primary && (
              <span className="work-featured__note">{project.note}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
