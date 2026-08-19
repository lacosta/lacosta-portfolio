// @app
import { experience } from "@components/portfolio/data";

export const Experience = () => {
  return (
    <section id="experience" className="container experience split-section">
      <p className="eyebrow">Experience</p>
      <div className="experience__list">
        {experience.map((job) => (
          <div key={`${job.company}-${job.date}`} className="experience__item">
            <p className="experience__date">{job.date}</p>
            <div className="experience__content">
              <div className="experience__heading">
                <div className="experience__identity">
                  <img className="experience__logo" src={job.logo} alt={`${job.company} logo`} />
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <p className="experience__company">{job.company}</p>
                  </div>
                </div>
                <span className="experience__location">{job.location}</span>
              </div>
              <p className="experience__description">{job.description}</p>
              <p className="experience__details">{job.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
