export const Hero = () => {
  return (
    <section id="home" className="container hero">
      <p className="eyebrow animate-rise">
        Frontend Developer · React · TypeScript
      </p>
      <h1 className="hero__title animate-rise">
        Frontend work for
        <br />
        <span className="hero__title-accent">real-world systems.</span>
      </h1>
      <div className="hero__footer">
        <p className="hero__description">
          I work mainly with React and TypeScript. Most of my experience comes
          from enterprise applications and financial products — building
          reusable components, integrating APIs, evolving existing systems and
          dealing with the edge cases that show up in production.
        </p>
      </div>
      <div className="hero__availability">
        <span className="hero__rule" />
        <span className="eyebrow">React · TypeScript · production systems</span>
      </div>
    </section>
  );
};
