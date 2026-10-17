// @packages
import { ArrowUpRight } from "lucide-react";

// @app
import type { Project, ProjectLink } from "@components/portfolio/data";

export const ProjectStatus = ({ status }: { status: Project["status"] }) => {
  return (
    <p className={`project-status project-status--${status.tone}`}>
      <span className="project-status__dot" aria-hidden="true" />
      {status.label}
    </p>
  );
};

export const availableLinks = (project: Project) =>
  project.links.filter(
    (link): link is ProjectLink & { href: string } => link.href !== null,
  );

interface ExternalLinkProps {
  link: ProjectLink & { href: string };
  projectTitle: string;
  className: string;
}

export const ExternalLink = ({ link, projectTitle, className }: ExternalLinkProps) => {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={link.description}
    >
      <span className="project-link__label">{link.label}</span>
      <span className="visually-hidden">
        {" "}
        for {projectTitle} (opens in a new tab)
      </span>
      <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
    </a>
  );
};

/** Shared view-transition name so the cover morphs between the featured and secondary slots. */
export const mediaTransitionName = (slug: Project["slug"]) => `project-media-${slug}`;
