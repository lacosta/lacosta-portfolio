export const About = () => {
  return (
    <section id="approach" className="container about split-section">
      <p className="eyebrow">How I work</p>
      <div>
        <h2 className="about__title">
          I care about how things work, not just that they work.
        </h2>
        <div className="about__copy">
          <p>
            I like understanding how an application is put together before
            changing it — why something behaves the way it does, where a problem
            actually comes from and which patterns are already established in
            the codebase.
          </p>
          <p>
            I prefer simple, reusable solutions over unnecessary abstractions. I
            care about accessibility, maintainability and testing the behavior
            that matters. Whether I&apos;m building something new, debugging an
            issue or improving existing code, I try to leave things a little
            clearer than I found them.
          </p>
        </div>
      </div>
    </section>
  );
};
