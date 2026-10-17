// @app
import { principles, skills } from "@components/portfolio/data";

export const About = () => {
  return (
    <section id="approach" className="approach section" aria-labelledby="approach-title">
      <div className="container approach__inner">
        <div className="approach__intro">
          <p className="eyebrow">
            <span className="eyebrow__index">§04</span> — How I work
          </p>
          <h2 id="approach-title" className="approach__title">
            I care about how things work, not just that they work.
          </h2>
          <p className="approach__copy">
            Whether I&apos;m building something new, debugging an issue or
            improving existing code, I try to leave things a little clearer than
            I found them.
          </p>
        </div>
        <ol className="principles">
          {principles.map((principle, index) => (
            <li key={principle.name} className="principles__item">
              <span className="principles__index">{String(index + 1).padStart(2, "0")}</span>
              <code className="principles__name">{principle.name}</code>
              <p className="principles__description">{principle.description}</p>
            </li>
          ))}
          <li className="principles__item principles__item--toolbox">
            <span className="principles__index" aria-hidden="true">
              —
            </span>
            <span className="principles__name principles__name--muted">toolbox</span>
            <p className="principles__toolbox">
              {skills.map((skill, index) => (
                <span key={skill}>
                  {index > 0 && (
                    <span className="principles__separator" aria-hidden="true">
                      {" / "}
                    </span>
                  )}
                  {skill}
                </span>
              ))}
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};
