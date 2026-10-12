// @app
import { projects } from "@components/portfolio/data";

// @own
import { Card } from "./card";

export const Projects = () => {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="container section__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Independent products</p>
            <h2 id="work-title" className="section-heading__title">
              Selected work.
            </h2>
          </div>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <Card key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
