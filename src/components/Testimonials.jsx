import { content } from "../content.js";
import Section from "./Section.jsx";

export default function Testimonials({ section }) {
  return (
    <Section section={section}>
      <div className="grid grid--3">
        {content.testimonials.map((t) => (
          <figure key={t.name + t.quote.slice(0, 20)} className="card quote">
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span className="muted">{t.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
