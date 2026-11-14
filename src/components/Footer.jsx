import { content } from "../content.js";
import Icon from "./Icon.jsx";
import { SocialLinks } from "./Section.jsx";

export default function Footer() {
  const { profile } = content;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted small">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
        <SocialLinks socials={profile.socials} />
        <a href="#top" className="icon-btn" aria-label="Back to top" title="Back to top">
          <Icon name="arrowUp" />
        </a>
      </div>
    </footer>
  );
}
