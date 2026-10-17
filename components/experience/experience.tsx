"use client";

// @packages
import { useEffect, useRef, useState, type CSSProperties } from "react";

// @app
import { experience, type Role } from "@components/portfolio/data";
import { SectionHeading } from "@components/section-heading/section-heading";
import { useInView } from "@/lib/hooks/use-in-view";

const laneLabels: Record<Role["lane"], string> = {
  head: "HEAD",
  main: "main",
  branch: "parallel",
};

/** "2023-01" → 2023.0; month precision keeps server and client renders identical. */
const toYears = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return year + (month - 1) / 12;
};

const formatDate = (value: string) => {
  const [year, month] = value.split("-");
  return `${month}/${year}`;
};

const roles = [...experience]
  .sort((a, b) => toYears(b.start) - toYears(a.start))
  .map((job) => ({
    ...job,
    range: `${formatDate(job.start)} — ${job.end ? formatDate(job.end) : "Present"}`,
  }));

const firstYear = Math.min(...roles.map((job) => Math.floor(toYears(job.start))));

/**
 * The ruler depends on today's date, so it is computed on the client only;
 * the page is statically prerendered and would otherwise freeze "Present".
 */
const buildRuler = (today: Date) => {
  const present = today.getFullYear() + today.getMonth() / 12;
  const span = today.getFullYear() + 1 - firstYear;
  return {
    span,
    years: Array.from({ length: span }, (_, index) => firstYear + index),
    bands: roles.map((job) => {
      const start = toYears(job.start);
      const end = job.end ? toYears(job.end) : present;
      return {
        fromYear: Math.floor(start),
        toYear: Math.floor(end),
        left: ((start - firstYear) / span) * 100,
        width: ((end - start) / span) * 100,
      };
    }),
  };
};

export const Experience = () => {
  const [active, setActive] = useState(0);
  const [ruler, setRuler] = useState<ReturnType<typeof buildRuler> | null>(null);
  const [sectionRef, inView] = useInView<HTMLDivElement>({ rootMargin: "0px 0px -25% 0px" });
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setRuler(buildRuler(new Date()));
  }, []);

  // The role crossing the reading line becomes active while scrolling.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = itemRefs.current.indexOf(entry.target as HTMLLIElement);
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const item of itemRefs.current) if (item) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  const current = roles[active];
  const band = ruler?.bands[active];

  return (
    <section id="experience" className="experience section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          index="03"
          eyebrow="git log --graph"
          title="Experience"
        />

        <div
          ref={sectionRef}
          className="timeline-wrap"
          data-in-view={inView}
          style={{ "--active-color": `var(--lane-${current.lane})` } as CSSProperties}
        >
          <div className="timeline-ruler" aria-hidden="true">
            {ruler && band && (
              <>
                <div
                  className="timeline-ruler__years"
                  style={{ "--years": ruler.span } as CSSProperties}
                >
                  {ruler.years.map((year) => (
                    <span
                      key={year}
                      className="timeline-ruler__year"
                      data-active={year >= band.fromYear && year <= band.toYear}
                    >
                      {year}
                    </span>
                  ))}
                </div>
                <div className="timeline-ruler__track">
                  <div
                    className="timeline-ruler__band"
                    style={{ left: `${band.left}%`, width: `${band.width}%` }}
                  >
                    <span className="timeline-ruler__label">
                      {current.range}
                      <span className="timeline-ruler__company"> · {current.company}</span>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          <ol className="timeline">
            {roles.map((role, index) => {
              const isActive = index === active;
              const isLast = index === roles.length - 1;
              return (
                <li
                  key={`${role.company}-${role.start}`}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className={`timeline__item timeline__item--${role.lane}`}
                  data-active={isActive}
                  style={{ "--step": index } as CSSProperties}
                  onMouseEnter={() => setActive(index)}
                >
                  <div className="timeline__graph" aria-hidden="true">
                    {index > 0 && <span className="timeline__line timeline__line--above" />}
                    {(!isLast || role.lane === "branch") && (
                      <span className="timeline__line timeline__line--below" />
                    )}
                    {role.lane === "branch" && (
                      <span className="timeline__branch">
                        <span className="timeline__branch-in" />
                        <span className="timeline__branch-stem" />
                        <span className="timeline__branch-out" />
                      </span>
                    )}
                    <span className="timeline__node" />
                  </div>
                  <article className="timeline__entry">
                    <span className="timeline__ticks" aria-hidden="true" />
                    <p className="timeline__meta">
                      <span className="timeline__lane">{laneLabels[role.lane]}</span>
                      <span>{role.range}</span>
                      <span>{role.location}</span>
                    </p>
                    <div className="timeline__body">
                      <h3 className="timeline__title">
                        <button
                          type="button"
                          className="timeline__select"
                          aria-pressed={isActive}
                          onClick={() => setActive(index)}
                          onFocus={() => setActive(index)}
                        >
                          {role.company}{" "}
                          <span className="timeline__role">· {role.role}</span>
                        </button>
                      </h3>
                      <p className="timeline__description">{role.description}</p>
                      <p className="timeline__details">{role.details}</p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
