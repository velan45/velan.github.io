import { content } from "../content.js";
import Section from "./Section.jsx";

export default function Experience({ section }) {
  return (
    <Section section={section}>
      <ol className="timeline">
        {content.experience.map((job) => (
          <li key={`${job.company}-${job.role}-${job.period}`} className="timeline__item">
            <span className="timeline__dot" aria-hidden="true" />
            <article className="card timeline__card">
              <header className="timeline__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="muted">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <span className="pill">{job.period}</span>
              </header>
              {job.summary && <p>{job.summary}</p>}
              {job.achievements?.length > 0 && (
                <ul className="bullets">
                  {job.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
              {job.tech?.length > 0 && (
                <ul className="chips">
                  {job.tech.map((t) => (
                    <li key={t} className="chip chip--mono">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
