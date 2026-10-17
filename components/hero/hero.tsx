// @app
import { experience } from "@components/portfolio/data";

// @own
import { HeadingSpec } from "./heading-spec";

const current = experience[0];
const since = Math.min(...experience.map((job) => Number(job.start.slice(0, 4))));
const focus = ["Design systems", "Accessibility", "Performance"];

export const Hero = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="eyebrow hero__eyebrow">
          <span className="eyebrow__index">§01</span> — Frontend Developer · React · TypeScript
        </p>
        <div className="rule hero__rule" aria-hidden="true" />

        <div className="hero__grid">
          <div className="hero__heading">
            <h1 id="hero-title" className="hero__title">
              <span className="hero__line">
                <span>Frontend work</span>
              </span>
              <span className="hero__line">
                <span>
                  for <span className="hero__accent">real‑world</span>
                </span>
              </span>
              <span className="hero__line">
                <span>systems.</span>
              </span>
            </h1>
            <HeadingSpec />
          </div>

          <p className="hero__intro">
            I work mainly with React and TypeScript. Most of my experience comes
            from enterprise applications and financial products — building
            reusable components, integrating APIs, evolving existing systems and
            dealing with the edge cases that show up in production.
          </p>

          <aside className="profile" aria-label="Profile summary">
            <p className="profile__header">
              <span>Profile</span>
              <span className="profile__count" aria-hidden="true">
                4 props
              </span>
            </p>
            <dl className="profile__list">
              <div className="profile__row">
                <dt className="profile__label">role</dt>
                <dd className="profile__value">
                  <span className="profile__primary">{current.role}</span>
                  <span className="profile__secondary">Frontend · React &amp; TypeScript</span>
                </dd>
              </div>
              <div className="profile__row">
                <dt className="profile__label">at</dt>
                <dd className="profile__value">
                  <span className="profile__primary">{current.company}</span>
                </dd>
              </div>
              <div className="profile__row profile__row--baseline">
                <dt className="profile__label">since</dt>
                <dd className="profile__value profile__value--inline">
                  <span className="profile__year">{since}</span>
                  <span className="profile__secondary">in production frontend</span>
                </dd>
              </div>
              <div className="profile__row">
                <dt className="profile__label">focus</dt>
                <dd className="profile__value">
                  <ul className="profile__focus">
                    {focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="hero__actions">
            <a href="#work" className="button button--accent">
              See selected work
            </a>
            <a href="#contact" className="button button--outline hero__secondary-action">
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
