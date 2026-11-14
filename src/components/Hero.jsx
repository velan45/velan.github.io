import { content, asset, primaryResume } from "../content.js";
import { useTypewriter } from "../hooks.js";
import Icon from "./Icon.jsx";
import { SocialLinks } from "./Section.jsx";
import { shortcutLabel } from "./Navbar.jsx";

export default function Hero({ onOpenPalette }) {
  const { profile, sections, projects } = content;
  const typed = useTypewriter(profile.headlinePhrases);
  const featured = projects.filter((p) => p.visible !== false && p.featured).length;

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className={`status ${profile.available ? "status--on" : "status--off"}`}>
            <span className="status__dot" aria-hidden="true" />
            {profile.availabilityText}
          </span>

          <h1 className="hero__title">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero__typed" aria-label={`${profile.headlinePrefix} ${profile.headlinePhrases.join(", ")}`}>
            <span aria-hidden="true">
              {profile.headlinePrefix} <span className="hero__typed-text">{typed}</span>
              <span className="caret" />
            </span>
          </p>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__cta">
            {sections.projects?.visible && (
              <a href="#projects" className="btn btn--primary">
                View my work <Icon name="arrowRight" />
              </a>
            )}
            {primaryResume && (
              <a href={primaryResume.url} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                <Icon name="file" /> Résumé
              </a>
            )}
            {sections.contact?.visible && (
              <a href="#contact" className="btn btn--ghost">
                Get in touch
              </a>
            )}
          </div>

          <div className="hero__meta">
            <SocialLinks socials={profile.socials} />
            <button type="button" className="hint" onClick={onOpenPalette}>
              Press <kbd>{shortcutLabel}</kbd> to jump anywhere
            </button>
          </div>
        </div>

        <aside className="hero__card reveal" aria-label="Profile summary">
          <div className="profile-card">
            <div className="profile-card__glow" aria-hidden="true" />
            <div className="profile-card__avatar">
              <img src={asset(profile.avatar)} alt={profile.name} width="160" height="160" loading="eager" />
              {profile.available && <span className="profile-card__online" title="Available" />}
            </div>
            <h2 className="profile-card__name">{profile.name}</h2>
            <p className="profile-card__role">{profile.role}</p>
            <p className="profile-card__loc">
              <Icon name="pin" size={14} /> {profile.location}
            </p>
            <ul className="chips chips--center">
              {profile.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            <div className="profile-card__terminal" aria-hidden="true">
              <span className="t-prompt">$</span> whoami --json
              <pre>{`{ "featured_projects": ${featured},\n  "open_to_work": ${profile.available} }`}</pre>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
