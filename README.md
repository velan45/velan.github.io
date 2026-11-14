# Velan D — Developer Portfolio

React + Vite static portfolio, deployed to GitHub Pages. **All content lives in one file: [content/portfolio.json](content/portfolio.json)** — no code changes needed to update the site.

🌐 Live: https://velan45.github.io

## Features

- **Content-driven** — profile, sections, projects, skills, experience, services, testimonials and contact all come from JSON.
- **Command palette** — press `Ctrl K` / `⌘K` to jump to sections, open projects, copy email or switch theme.
- **Project case studies** — filterable gallery with Problem → Solution → Highlights dialogs.
- **SEO built in** — meta tags, Open Graph/Twitter cards, schema.org `Person` JSON-LD, `sitemap.xml` and `robots.txt` generated at build time from the JSON.
- **Dark/light theme** (system-aware, no flash), scroll progress, reveal animations, `prefers-reduced-motion` support.
- **Accessible** — semantic landmarks, skip link, keyboard-friendly dialogs, focus styles.
- **Zero backend** — contact form uses `mailto:` by default or any form service endpoint (e.g. Formspree).

## Updating content

Edit [content/portfolio.json](content/portfolio.json), commit and push to `main`. GitHub Actions rebuilds and deploys automatically. You can even edit it directly on github.com.

| Want to… | Change |
| --- | --- |
| Hide/show a section | `sections.<id>.visible` |
| Reorder sections | Reorder the keys inside `sections` |
| Rename nav label / heading | `sections.<id>.nav`, `.title`, `.eyebrow` |
| Hide a project | `projects[].visible: false` |
| Pin a project to the top | `projects[].featured: true` |
| Add a live demo button | `projects[].demo: "https://…"` |
| Add a résumé or certificate | Drop the file into `documents/` (see below) |
| Change photo | Replace `public/profile.jpg` (or set `profile.avatar`) |
| Toggle "available" badge | `profile.available`, `profile.availabilityText` |
| Add a social link | `profile.socials[]` — `icon`: `github`, `linkedin`, `x`, `email`, `website` |
| Use a real contact form | `contact.formEndpoint` (e.g. `https://formspree.io/f/xxxx`) |
| Show testimonials | Fill `testimonials[]`, set `sections.testimonials.visible: true` |
| Update SEO / domain | `site.*` |

## Résumés & certificates (PDF / JPEG / PNG / WebP)

Drop files into these folders — they are discovered automatically at build time, no code changes needed:

```
documents/resumes/        ← résumés (first/primary one powers the hero "Résumé" button)
documents/certificates/   ← certificates, awards, transcripts
```

Each file gets a card with a preview, an in-page viewer, a download button and an optional "Verify" link. They're also searchable in the command palette. The **Résumé** and **Certificates** sections each get their own nav link and hide themselves when their folder is empty.

Metadata is optional — without it the title is derived from the file name (`aws-cloud-practitioner.pdf` → "Aws Cloud Practitioner"). To customise, add an entry keyed by the exact file name under `documents` in [content/portfolio.json](content/portfolio.json):

```json
"documents": {
  "resumes": {
    "velan-resume.pdf": { "title": "Résumé — Software Developer", "primary": true }
  },
  "certificates": {
    "aws-cloud-practitioner.jpg": {
      "title": "AWS Certified Cloud Practitioner",
      "issuer": "Amazon Web Services",
      "date": "2025-06",
      "credentialUrl": "https://www.credly.com/badges/…",
      "description": "Cloud fundamentals, security and pricing.",
      "visible": true
    }
  }
}
```

| Field | Effect |
| --- | --- |
| `title` | Display name (defaults to file name) |
| `issuer`, `date` (`YYYY` or `YYYY-MM`) | Shown under the title; newest first |
| `credentialUrl` | Adds a "Verify credential" link |
| `primary` | Pins a résumé first and uses it for the hero button |
| `visible: false` | Hides the file without deleting it |

> ⚠️ Everything in `documents/` is published publicly. Remove personal details (phone, address, ID numbers) you don't want online before committing.

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/
npm run preview   # serve the production build
```

## Deployment (one-time setup)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and publishes `dist/`.

To host under a project path (e.g. `username.github.io/portfolio/`), set `base: "/portfolio/"` in [vite.config.js](vite.config.js) and update `site.url`.

## Project structure

```
content/portfolio.json   ← all editable content
documents/               ← résumés & certificates (auto-discovered)
public/                  ← static assets (photo, favicon)
src/App.jsx              ← layout, command palette wiring
src/components/          ← one component per section
src/styles.css           ← design tokens & styles
vite.config.js           ← React plugin + SEO/sitemap generator
```
