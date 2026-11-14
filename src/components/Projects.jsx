import { useMemo, useState } from "react";
import { content } from "../content.js";
import Section, { ExternalLink } from "./Section.jsx";
import Icon from "./Icon.jsx";
import Modal from "./Modal.jsx";

const ALL = "All";

export default function Projects({ section }) {
  const projects = useMemo(
    () =>
      content.projects
        .filter((p) => p.visible !== false)
        .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
    []
  );
  const categories = useMemo(() => [ALL, ...new Set(projects.map((p) => p.category))], [projects]);
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);

  const shown = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section section={section}>
      <div className="filters" role="tablist" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={`filter ${filter === c ? "is-active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
            <span className="filter__count">
              {c === ALL ? projects.length : projects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid--3 projects">
        {shown.map((p) => (
          <article key={p.id} className={`card project ${p.featured ? "project--featured" : ""}`}>
            <header className="project__head">
              <span className="pill">{p.category}</span>
              {p.featured && (
                <span className="pill pill--accent">
                  <Icon name="star" size={12} /> Featured
                </span>
              )}
            </header>
            <h3 className="project__title">{p.title}</h3>
            <p className="muted project__summary">{p.summary}</p>
            <ul className="chips">
              {p.tech.map((t) => (
                <li key={t} className="chip chip--mono">
                  {t}
                </li>
              ))}
            </ul>
            <footer className="project__actions">
              <button type="button" className="btn btn--ghost btn--sm" onClick={() => setSelected(p)}>
                Case study <Icon name="arrowRight" size={16} />
              </button>
              <div className="project__links">
                {p.github && (
                  <ExternalLink href={p.github} className="icon-btn" aria-label={`${p.title} source code`} title="Source code">
                    <Icon name="github" />
                  </ExternalLink>
                )}
                {p.demo && (
                  <ExternalLink href={p.demo} className="icon-btn" aria-label={`${p.title} live demo`} title="Live demo">
                    <Icon name="external" />
                  </ExternalLink>
                )}
              </div>
            </footer>
          </article>
        ))}
      </div>

      {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}

function ProjectDialog({ project, onClose }) {
  return (
    <Modal labelledBy="project-dialog-title" onClose={onClose}>
      {(close) => (
      <div className="dialog__body">
        <header className="dialog__head">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h2 id="project-dialog-title">{project.title}</h2>
          </div>
          <button type="button" className="icon-btn" onClick={close} aria-label="Close">
            <Icon name="close" />
          </button>
        </header>

        <p className="lead">{project.summary}</p>

        <div className="case">
          {project.problem && (
            <div className="case__block">
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="case__block">
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
          )}
        </div>

        {project.impact?.length > 0 && (
          <>
            <h3>Highlights</h3>
            <ul className="bullets">
              {project.impact.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </>
        )}

        <ul className="chips">
          {project.tech.map((t) => (
            <li key={t} className="chip chip--mono">
              {t}
            </li>
          ))}
        </ul>

        <footer className="dialog__actions">
          {project.github && (
            <ExternalLink href={project.github} className="btn btn--ghost">
              <Icon name="github" /> Source code
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink href={project.demo} className="btn btn--primary">
              Live demo <Icon name="external" />
            </ExternalLink>
          )}
        </footer>
      </div>
      )}
    </Modal>
  );
}
