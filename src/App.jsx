import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { content, visibleSections, resumes, certificates } from "./content.js";
import { useActiveSection, useReveal, useScroll, useTheme } from "./hooks.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Credentials from "./components/Credentials.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CommandPalette from "./components/CommandPalette.jsx";

const SECTION_COMPONENTS = {
  about: About,
  experience: Experience,
  resume: Credentials,
  certificates: Credentials,
  skills: Skills,
  projects: Projects,
  services: Services,
  testimonials: Testimonials,
  contact: Contact,
};

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { progress, scrolled } = useScroll();
  const sectionIds = useMemo(() => visibleSections.map((s) => s.id), []);
  const active = useActiveSection(sectionIds);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(0);

  useReveal();

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content.profile.email);
      notify("Email copied to clipboard");
    } catch {
      notify(content.profile.email);
    }
  }, [notify]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const commands = useMemo(() => {
    const go = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const open = (url) => () => window.open(url, "_blank", "noopener,noreferrer");
    const list = [
      { group: "Navigate", label: "Home", icon: "hash", run: go("top") },
      ...visibleSections.map((s) => ({ group: "Navigate", label: s.nav, icon: "hash", run: go(s.id) })),
      { group: "Actions", label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`, icon: theme === "dark" ? "sun" : "moon", run: toggleTheme },
      { group: "Actions", label: "Copy email address", icon: "copy", run: copyEmail },
    ];
    resumes.forEach((r) =>
      list.push({ group: "Documents", label: r.title, icon: "file", run: open(r.url) })
    );
    certificates.forEach((c) =>
      list.push({ group: "Documents", label: c.title, icon: "award", run: open(c.url) })
    );
    content.profile.socials
      .filter((s) => /^https?:/.test(s.url))
      .forEach((s) => list.push({ group: "Links", label: s.label, icon: s.icon, run: open(s.url) }));
    content.projects
      .filter((p) => p.visible !== false && (p.demo || p.github))
      .forEach((p) => list.push({ group: "Projects", label: p.title, icon: "folder", run: open(p.demo || p.github) }));
    return list;
  }, [theme, toggleTheme, copyEmail]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--a" aria-hidden="true" />
      <div className="bg-glow bg-glow--b" aria-hidden="true" />

      <a className="skip-link" href="#main">Skip to content</a>

      <Navbar
        sections={visibleSections}
        active={active}
        scrolled={scrolled}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main id="main">
        <Hero onOpenPalette={() => setPaletteOpen(true)} />
        {visibleSections.map((section) => {
          const Component = SECTION_COMPONENTS[section.id];
          return Component ? (
            <Component key={section.id} section={section} onCopyEmail={copyEmail} notify={notify} />
          ) : null;
        })}
      </main>

      <Footer />

      {paletteOpen && <CommandPalette commands={commands} onClose={() => setPaletteOpen(false)} />}

      <div className={`toast ${toast ? "toast--show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
