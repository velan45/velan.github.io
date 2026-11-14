import { content } from "../content.js";
import Section from "./Section.jsx";
import Icon from "./Icon.jsx";

export default function About({ section }) {
  const { profile, highlights, stats } = content;
  return (
    <Section section={section}>
      <div className="about">
        <div className="about__bio">
          {profile.bio.map((p, i) => (
            <p key={i} className={i === 0 ? "lead" : undefined}>
              {p}
            </p>
          ))}
          <ul className="highlights">
            {highlights.map((h) => (
              <li key={h.title} className="highlight">
                <span className="highlight__icon">
                  <Icon name="check" size={16} />
                </span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label} className="card stat">
              <span className="stat__value gradient-text">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
