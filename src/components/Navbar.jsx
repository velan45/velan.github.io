import { useEffect, useState } from "react";
import { content } from "../content.js";
import Icon from "./Icon.jsx";

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
export const shortcutLabel = isMac ? "⌘K" : "Ctrl K";

export default function Navbar({ sections, active, scrolled, theme, onToggleTheme, onOpenPalette }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { site } = content;

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const hasContact = sections.some((s) => s.id === "contact");

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="brand" aria-label={`${site.brand} home`} onClick={closeMenu}>
          <span className="brand__badge">{site.brandInitials}</span>
          <span className="brand__name">{site.brand}</span>
        </a>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Primary">
          <ul className="nav__list">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`nav__link ${active === s.id ? "is-active" : ""}`}
                  aria-current={active === s.id ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {s.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button type="button" className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
            <Icon name="search" size={15} />
            <kbd>{shortcutLabel}</kbd>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title="Toggle theme"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          {hasContact && (
            <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
              Hire me
            </a>
          )}
          <button
            type="button"
            className="icon-btn navbar__menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
