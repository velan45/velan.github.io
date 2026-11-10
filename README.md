# Velan D - Professional Developer Portfolio

> Modern, responsive, and high-performance portfolio website showcasing projects in full-stack web development, AI tooling, Linux socket programming, and systems engineering.

🌐 **Live Website**: [https://velan45.github.io](https://velan45.github.io)

---

## 👑 Owner Portal & Visibility Management (Private to You)

You have full control over what is displayed to public visitors directly from your browser:

### 1. How to Access the Owner Portal
- **Method A**: Click the **"Owner Access"** button in the website footer.
- **Method B**: Press the keyboard shortcut `Ctrl + Shift + A` (or `Cmd + Shift + A` on Mac) anywhere on the page.
- **Master Passkey**: Enter your secret passkey (`velan-admin-2026` by default; can be changed in settings).

### 2. What You Can Control
- **👁️ Section Visibility**: Show or hide entire sections (About, Skills, Projects, Services, Contact, or Badges) with one click.
- **💼 Project Visibility**: Toggle any project ON or OFF. Hidden projects are completely removed from public view, while remaining visible with a `[Hidden from Public]` tag in your Owner Mode preview.
- **➕ Add / Edit Projects**: Add new projects, edit titles, descriptions, badges, tags, features, and source code links without writing code.
- **👤 Profile & Bio**: Modify your headline, bio paragraphs, availability status ("Available" vs "Busy"), contact email, and social URLs.
- **🚀 One-Click Publish to GitHub**:
  - Enter your GitHub Personal Access Token in the **Publish & Sync** tab.
  - Click **"Commit & Push Updates to GitHub"**.
  - The portfolio communicates directly with the GitHub REST API to commit your updated `data/portfolio-data.json`.
  - GitHub Pages will automatically deploy your updates worldwide in ~1–2 minutes!
- **📥 Manual Export**: Download updated `portfolio-data.json` at any time.

---

## ✨ Key Portfolio Features

- **Personalized Design System**: Custom CSS tokens supporting smooth dark mode & light mode toggling with `localStorage` persistence.
- **Dynamic Typewriter & Micro-Interactions**: Fluid hero section with floating highlight badges, animated typewriter, and online availability indicator.
- **Categorized Project Showcase**: Interactive filterable project gallery (Web & AI, Systems & Networking, Python & Tools) with deep-dive technical modals and direct GitHub links.
- **Skills Matrix**: Categorized breakdown of frontend, backend, systems, and AI tools with skill pills.
- **Interactive Contact Hub**: Email copy with instant toast confirmation, validated contact form with prefilled `mailto:` integration, and direct LinkedIn & GitHub links.
- **Zero-Dependency Core**: Pure modern HTML5, CSS3, and Vanilla JavaScript for instant loading, high accessibility, and perfect static hosting on GitHub Pages.
- **Vite Ready**: Includes Vite tooling for local developer workflow and hot reloading.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Variables, Flexbox, Grid), JavaScript (ES6+), Web Crypto API
- **Typography**: Google Fonts (Inter, Outfit, JetBrains Mono)
- **Tooling**: Vite
- **Deployment**: GitHub Pages

---

## 🚀 Local Development

To run the portfolio locally:

```bash
# Clone the repository
git clone git@github.com:velan45/velan.github.io.git
cd velan.github.io

# Install dependencies (optional, for Vite dev server)
npm install

# Start local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 📬 Contact & Connect

- **Email**: [velan45@gmail.com](mailto:velan45@gmail.com)
- **GitHub**: [@velan45](https://github.com/velan45)
- **LinkedIn**: [Velan D](https://www.linkedin.com/in/velan-d-43486118b/)
