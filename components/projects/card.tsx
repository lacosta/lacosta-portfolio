// @packages
import { ArrowUpRight } from "lucide-react";

// @app
import type { projects } from "@components/portfolio/data";

type Project = (typeof projects)[number];

export const Card = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <article className="work-card">
      <div className={`work-card__visual work-card__visual--${project.tone}`}>
        <div className="work-card__arrow">
          <ArrowUpRight size={17} />
        </div>
        <div
          className="work-card__shape"
          style={{ "--index": index } as React.CSSProperties}
        />
        <span className="work-card__number">0{index + 1}</span>
      </div>
      <p className="work-card__category">{project.category}</p>
      <h3 className="work-card__title">{project.title}</h3>
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
