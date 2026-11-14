import { content } from "../content.js";
import Section from "./Section.jsx";
import Icon from "./Icon.jsx";

export default function Services({ section }) {
  return (
    <Section section={section}>
      <div className="grid grid--3">
        {content.services
          .filter((s) => s.visible !== false)
          .map((s, i) => (
            <article key={s.title} className="card service">
              <span className="service__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.desc}</p>
              <ul className="ticks">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={16} /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </Section>
  );
}
