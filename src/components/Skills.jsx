import { content } from "../content.js";
import Section from "./Section.jsx";

export default function Skills({ section }) {
  return (
    <Section section={section}>
      <div className="grid grid--3">
        {content.skills
          .filter((group) => group.visible !== false)
          .map((group) => (
            <article key={group.category} className="card skill">
              <h3>{group.category}</h3>
              <p className="muted">{group.description}</p>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </Section>
  );
}
