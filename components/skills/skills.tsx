// @app
import { skills } from "@components/portfolio/data";

export const Skills = () => {
  return (
    <section className="skills">
      <div className="container section__inner split-section">
        <p className="eyebrow">Tools and practices</p>
        <div className="skills__list">
          {skills.map((skill) => (
            <span key={skill} className="skills__item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
