import Icon from "./Icon.jsx";

/** Shared section wrapper with heading and scroll-reveal animation. */
export default function Section({ section, children, className = "" }) {
  return (
    <section id={section.id} className={`section ${className}`} aria-labelledby={`${section.id}-title`}>
      <div className="container reveal">
        <header className="section-head">
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 id={`${section.id}-title`} className="section-title">
            {section.title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

export function ExternalLink({ href, children, className = "", ...rest }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export function SocialLinks({ socials, className = "" }) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map((s) => (
        <li key={s.url}>
          {/^https?:/.test(s.url) ? (
            <ExternalLink href={s.url} className="icon-btn" aria-label={s.label} title={s.label}>
              <Icon name={s.icon} />
            </ExternalLink>
          ) : (
            <a href={s.url} className="icon-btn" aria-label={s.label} title={s.label}>
              <Icon name={s.icon} />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
