// @app
import { projects } from "@components/portfolio/data";

// @own
import { Card } from "./card";

export const Projects = () => {
  return (
    <section id="work" className="work">
      <div className="container section__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Production frontend work</p>
            <h2 className="section-heading__title">
              Frontend problems, in context.
            </h2>
          </div>
          <span className="section-heading__meta">2022 — 2024</span>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <Card key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
