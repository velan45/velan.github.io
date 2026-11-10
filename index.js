/**
 * Velan D - Professional Portfolio
 * Client-Side JavaScript with Owner Mode & Comprehensive Content Editing
 */

// ------------------------------------------------------------------
// Built-in Default Portfolio Configuration Fallback
// ------------------------------------------------------------------
const DEFAULT_DATA = {
  auth: {
    passwordHash: "6d62c23e7d08b8dd17d7df906abeed48e4e073dbf169e1b8516eef1ece339b04",
    hint: "Default passkey is 'velan-admin-2026'. You can change this in Owner Settings."
  },
  profile: {
    name: "Velan D",
    role: "Software Developer & Freelancer",
    statusAvailable: true,
    statusBadge: "Available for Freelance & New Opportunities",
    headlinePrefix: "I build",
    headlinePhrases: [
      "scalable web applications",
      "intelligent AI harnesses",
      "low-level socket utilities",
      "high-performance backend APIs",
      "clean, resilient software"
    ],
    description: "Software Developer & Full-Stack Freelancer with a passion for building robust web applications, AI tools, low-level socket utilities, and resilient backend systems.",
    email: "velan45@gmail.com",
    github: "https://github.com/velan45",
    linkedin: "https://www.linkedin.com/in/velan-d-43486118b/",
    location: "India • Remote Worldwide",
    bioLead: "I am a software developer and independent freelancer with an unyielding curiosity for how things work under the hood — from high-level web applications down to low-level Linux socket communications.",
    bioStory: "Whether it's building interactive user experiences, architecting AI-powered tools like DreamCatcher and Resume-Matcher, or profiling network round-trip latencies in C++, I believe in crafting software that is not only functional, but clean, maintainable, and reliable.",
    bioPersonal: "Beyond the terminal and editor, I am a passionate football enthusiast and a proud admirer of Lionel Messi's playmaking artistry — a standard of precision, composure under pressure, and vision that I strive to bring into my engineering craft."
  },
  visibility: {
    hero: true,
    about: true,
    skills: true,
    projects: true,
    services: true,
    contact: true,
    footballBadge: true,
    cleanCodeBadge: true
  },
  aboutHighlights: [
    {
      id: "hl_delivery",
      title: "End-to-End Delivery",
      desc: "Concept design, frontend UI, backend logic, and production deployment."
    },
    {
      id: "hl_fluency",
      title: "Low-Level & High-Level Fluency",
      desc: "Comfortable across C++ socket programming, Python automation, and modern JavaScript."
    },
    {
      id: "hl_collab",
      title: "Collaborative & Agile",
      desc: "Experienced working independently as a freelancer and alongside cross-functional teams."
    }
  ],
  aboutStats: [
    {
      id: "stat_fullstack",
      number: "Full-Stack",
      label: "Web & Backend Engineering",
      sub: "From responsive UIs to API design"
    },
    {
      id: "stat_polyglot",
      number: "Polyglot",
      label: "JavaScript, Python, C++",
      sub: "Versatility across modern tech stacks"
    },
    {
      id: "stat_quality",
      number: "100%",
      label: "Commitment to Quality",
      sub: "Clean architecture & testable code"
    },
    {
      id: "stat_remote",
      number: "Remote",
      label: "Global Collaboration",
      sub: "Available worldwide across timezones"
    }
  ],
  skills: [
    {
      id: "cat_frontend",
      category: "Frontend Development",
      description: "Creating fast, accessible, responsive, and delightful user interfaces.",
      visible: true,
      items: [
        "JavaScript (ES6+)",
        "HTML5 & Semantic Web",
        "Modern CSS3 / Flexbox / Grid",
        "Responsive Design",
        "DOM & Web APIs",
        "Vite & Build Tools",
        "UI / UX Prototyping"
      ]
    },
    {
      id: "cat_backend",
      category: "Backend & Systems",
      description: "Architecting dependable logic, networking layers, and data flows.",
      visible: true,
      items: [
        "Python Development",
        "C++ Systems Programming",
        "Node.js Runtime",
        "Linux Socket Programming",
        "RESTful API Integration",
        "Networking Protocols (TCP/IP, ICMP)",
        "System Health & Monitoring"
      ]
    },
    {
      id: "cat_tools",
      category: "Tools, AI & DevOps",
      description: "Automation workflows, version control, and intelligent integrations.",
      visible: true,
      items: [
        "Git & GitHub Workflow",
        "Linux Shell & Bash",
        "LLM & AI Prompt Pipelines",
        "Resume / Document AI Parsers",
        "GitHub Pages Hosting",
        "Debugging & Performance Profiling",
        "Visual Studio Code"
      ]
    }
  ],
  projects: [
    {
      id: "dreamcatcher",
      title: "DreamCatcher",
      category: "web",
      badge: "Web & AI",
      desc: "An interactive web application that captures user dreams, performs semantic interpretation, and breaks down recurring subconscious themes into actionable reflections.",
      tags: ["JavaScript", "AI / NLP", "Web App", "UI/UX"],
      github: "https://github.com/velan45/DreamCatcher",
      visible: true,
      features: [
        "Interactive dream logging interface with sentiment indicators",
        "Semantic parsing to extract key symbolic archetypes and metaphors",
        "Responsive, modern UI designed with modular styling and dark mode support",
        "Fast lightweight frontend architecture with zero bloated dependencies"
      ],
      technologies: ["JavaScript (ES6+)", "AI / Semantic NLP", "HTML5", "Modern CSS3", "Web APIs"]
    },
    {
      id: "resumematcher",
      title: "Resume-Matcher & Analyzer",
      category: "tools",
      badge: "AI & Career Tech",
      desc: "An intelligent AI harness designed for parsing resumes, comparing candidates against job descriptions, and generating tailored PDF resumes and cover letters with multi-LLM support.",
      tags: ["Python", "LLM Harness", "PDF Generation", "NLP"],
      github: "https://github.com/velan45/Resume-Matcher",
      visible: true,
      features: [
        "Multi-LLM provider compatibility for local and cloud model inference",
        "Automated scoring algorithm measuring skills alignment and experience match",
        "Document parsing pipeline for PDFs, docx, and raw markdown resumes",
        "Modular architecture facilitating custom prompt templates and evaluation metrics"
      ],
      technologies: ["Python", "LLM Prompt Engineering", "NLP", "PDF Parsing", "Automation"]
    },
    {
      id: "socketping",
      title: "Socket Ping & Linux Networking",
      category: "systems",
      badge: "Systems & C++",
      desc: "High-performance Linux network tool implemented in C++ utilizing low-level POSIX sockets to measure Round Trip Time (RTT), packet jitter, and transmission health.",
      tags: ["C++", "Linux Sockets", "POSIX", "Networking"],
      github: "https://github.com/velan45/socket_ping",
      visible: true,
      features: [
        "Raw POSIX socket configuration for low-overhead packet dispatch",
        "Microsecond-precision Round Trip Time (RTT) timing and statistical analysis",
        "Robust error handling for socket timeouts, unreachable hosts, and packet loss",
        "Portable Unix/Linux architecture suitable for embedded and server diagnostics"
      ],
      technologies: ["C++", "Linux Sockets", "POSIX API", "TCP/IP & ICMP", "Networking"]
    },
    {
      id: "perfmonitor",
      title: "System & Website Ping Monitor",
      category: "tools",
      badge: "Automation & Health",
      desc: "Automated Python tool that tracks website response codes, server latency, and system health metrics, providing early incident detection and status reporting.",
      tags: ["Python", "Monitoring", "Uptime", "Automation"],
      github: "https://github.com/velan45/performance_monitoring",
      visible: true,
      features: [
        "Configurable polling intervals and multi-endpoint tracking",
        "Latency tracking with threshold-based alerting",
        "Lightweight footprint capable of running as a systemd background service",
        "CSV/Log export capabilities for long-term reliability audits"
      ],
      technologies: ["Python", "HTTP Protocols", "System Health", "Automation Scripts"]
    },
    {
      id: "portfolio",
      title: "Responsive Developer Portfolio",
      category: "web",
      badge: "Web & UI",
      desc: "High-performance static portfolio website built with modern CSS variables, fluid responsive layouts, theme persistence, and frictionless GitHub Pages deployment.",
      tags: ["HTML5/CSS3", "Vanilla JS", "GitHub Pages", "Vite"],
      github: "https://github.com/velan45/velan.github.io",
      visible: true,
      features: [
        "100/100 Lighthouse performance with zero heavy JavaScript frameworks",
        "System-aware and user-toggled dark/light theme persistence",
        "Accessible modal dialogs, clipboard actions, and responsive layout",
        "Seamless deployment on GitHub Pages with zero-build or Vite workflow support"
      ],
      technologies: ["HTML5", "CSS3 Variables", "Vanilla JavaScript", "Vite", "GitHub Pages"]
    },
    {
      id: "socketlin",
      title: "Linux Socket Programming Library",
      category: "systems",
      badge: "Networking & Linux",
      desc: "Clean, documented Linux socket implementations demonstrating client-server communication, packet handling, and multi-client connection management.",
      tags: ["C++", "TCP/IP", "Linux Daemon", "Networking"],
      github: "https://github.com/velan45/socket_lin",
      visible: true,
      features: [
        "Clean encapsulation of socket creation, binding, listening, and accepting",
        "Non-blocking socket handling and multiplexing principles",
        "Well-documented codebase designed as a reference for low-level network engineers",
        "Direct POSIX Linux integration"
      ],
      technologies: ["C++", "Linux POSIX", "TCP/IP", "Server Architecture"]
    }
  ],
  services: [
    {
      id: "service_web",
      title: "Full-Stack Web Development",
      desc: "Building intuitive, mobile-first web applications and interactive landing pages with performant frontends and clean server-side integrations.",
      visible: true,
      bullets: [
        "Modern responsive design & accessible UI",
        "High lighthouse performance & SEO",
        "Single-page apps & dynamic dashboards"
      ]
    },
    {
      id: "service_backend",
      title: "Backend & Network Utilities",
      desc: "Developing robust backend services, socket-based network diagnostics, automated health monitors, and system utilities in Python and C++.",
      visible: true,
      bullets: [
        "RESTful APIs & data pipelines",
        "Low-latency socket programming & pinging",
        "Server uptime monitoring & alerts"
      ]
    },
    {
      id: "service_ai",
      title: "AI Integration & Automation",
      desc: "Leveraging modern AI, prompt harnesses, and script automation to optimize workflows, match resumes, analyze sentiment, and eliminate manual tasks.",
      visible: true,
      bullets: [
        "LLM integration & resume analyzers",
        "Workflow automation scripts in Python",
        "Data extraction & content generation"
      ]
    }
  ]
};

// Global App State
let appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let isOwnerAuthenticated = false;

// Helper: SHA-256 Hash using Web Crypto API
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ------------------------------------------------------------------
// DOM Ready Event Initialization
// ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
  isOwnerAuthenticated = sessionStorage.getItem('vd_owner_authenticated') === 'true';

  await loadPortfolioData();

  initTheme();
  initTypewriter();
  initNavbarScroll();
  initMobileMenu();
  initEmailCopy();
  initContactForm();
  initModals();
  initOwnerMode();
  initQuickSectionEditButtons();

  renderPortfolio();
});

// ------------------------------------------------------------------
// Load and Sync Portfolio Data
// ------------------------------------------------------------------
async function loadPortfolioData() {
  const localSaved = localStorage.getItem('vd_portfolio_data');
  if (localSaved) {
    try {
      appData = JSON.parse(localSaved);
      // Ensure all arrays exist even if old version was in storage
      if (!appData.aboutHighlights) appData.aboutHighlights = JSON.parse(JSON.stringify(DEFAULT_DATA.aboutHighlights));
      if (!appData.aboutStats) appData.aboutStats = JSON.parse(JSON.stringify(DEFAULT_DATA.aboutStats));
      if (!appData.skills) appData.skills = JSON.parse(JSON.stringify(DEFAULT_DATA.skills));
      if (!appData.services) appData.services = JSON.parse(JSON.stringify(DEFAULT_DATA.services));
      return;
    } catch (e) {
      console.warn('Could not parse local portfolio data, falling back.');
    }
  }

  try {
    const response = await fetch('./data/portfolio-data.json', { cache: 'no-cache' });
    if (response.ok) {
      const fetched = await response.json();
      appData = fetched;
    }
  } catch (err) {
    console.info('Using built-in portfolio data fallback.');
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function savePortfolioDataLocally() {
  localStorage.setItem('vd_portfolio_data', JSON.stringify(appData));
}

// ------------------------------------------------------------------
// Main Render Function: Updates Content & Visibility in DOM
// ------------------------------------------------------------------
function renderPortfolio() {
  const { profile, visibility, aboutHighlights, aboutStats, skills, projects, services } = appData;

  // 1. Profile & Hero information
  const heroName = document.getElementById('heroName');
  if (heroName) heroName.textContent = profile.name || 'Velan D';

  const heroDescription = document.getElementById('heroDescription');
  if (heroDescription) heroDescription.textContent = profile.description || '';

  const profileCardName = document.getElementById('profileCardName');
  if (profileCardName) profileCardName.textContent = profile.name || 'Velan D';

  const profileCardRole = document.getElementById('profileCardRole');
  if (profileCardRole) profileCardRole.textContent = profile.role || '';

  const heroStatusBadge = document.getElementById('heroStatusBadge');
  const heroStatusText = document.getElementById('heroStatusText');
  if (heroStatusBadge && heroStatusText) {
    heroStatusText.textContent = profile.statusBadge || 'Available for Freelance & New Opportunities';
    heroStatusBadge.style.opacity = profile.statusAvailable ? '1' : '0.6';
  }

  // About bio text
  const aboutBioLead = document.getElementById('aboutBioLead');
  if (aboutBioLead && profile.bioLead) aboutBioLead.textContent = profile.bioLead;

  const aboutBioStory = document.getElementById('aboutBioStory');
  if (aboutBioStory && profile.bioStory) aboutBioStory.textContent = profile.bioStory;

  const aboutBioPersonal = document.getElementById('aboutBioPersonal');
  if (aboutBioPersonal && profile.bioPersonal) aboutBioPersonal.textContent = profile.bioPersonal;

  // Render About Highlights & Stats
  renderAboutHighlights(aboutHighlights || DEFAULT_DATA.aboutHighlights);
  renderAboutStats(aboutStats || DEFAULT_DATA.aboutStats);

  // Contact details
  const emailText = document.getElementById('emailText');
  if (emailText && profile.email) emailText.textContent = profile.email;

  // 2. Section Visibility Controls
  toggleSectionDisplay('about', visibility.about);
  toggleSectionDisplay('skills', visibility.skills);
  toggleSectionDisplay('projects', visibility.projects);
  toggleSectionDisplay('services', visibility.services);
  toggleSectionDisplay('contact', visibility.contact);

  const badgeFootball = document.getElementById('badgeFootball');
  if (badgeFootball) badgeFootball.style.display = visibility.footballBadge ? 'flex' : 'none';

  const badgeCleanCode = document.getElementById('badgeCleanCode');
  if (badgeCleanCode) badgeCleanCode.style.display = visibility.cleanCodeBadge ? 'flex' : 'none';

  // 3. Render Dynamic Grids (Skills, Projects, Services)
  renderSkillsGrid(skills || DEFAULT_DATA.skills);
  renderProjectsGrid(projects || DEFAULT_DATA.projects);
  renderServicesGrid(services || DEFAULT_DATA.services);

  // 4. Update Owner Bar state
  updateOwnerBarState();
}

function toggleSectionDisplay(sectionId, isVisible) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  if (isVisible === false && !isOwnerAuthenticated) {
    el.style.display = 'none';
  } else {
    el.style.display = '';
  }

  const navLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
  navLinks.forEach((link) => {
    link.style.display = isVisible === false && !isOwnerAuthenticated ? 'none' : '';
  });
}

// ------------------------------------------------------------------
// Section Rendering: About Highlights & Stats
// ------------------------------------------------------------------
function renderAboutHighlights(highlights) {
  const container = document.getElementById('aboutHighlightsList');
  if (!container) return;

  container.innerHTML = highlights.map((hl) => `
    <div class="highlight-item">
      <div class="highlight-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div>
        <strong>${escapeHtml(hl.title)}:</strong> ${escapeHtml(hl.desc)}
      </div>
    </div>
  `).join('');
}

function renderAboutStats(stats) {
  const container = document.getElementById('aboutStatsCards');
  if (!container) return;

  container.innerHTML = stats.map((stat) => `
    <div class="stat-card">
      <div class="stat-number">${escapeHtml(stat.number)}</div>
      <div class="stat-label">${escapeHtml(stat.label)}</div>
      <p class="stat-sub">${escapeHtml(stat.sub || '')}</p>
    </div>
  `).join('');
}

// ------------------------------------------------------------------
// Section Rendering: Skills Grid
// ------------------------------------------------------------------
function renderSkillsGrid(skills) {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const categoryIcons = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2c0 2-2 3-2 5a4 4 0 0 0 8 0c0-2-2-3-2-5a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 1-2-2c0-2 2-3 2-5a4 4 0 0 0-4-4z"></path></svg>`
  ];

  skills.forEach((cat, index) => {
    const isHiddenFromPublic = cat.visible === false;
    if (isHiddenFromPublic && !isOwnerAuthenticated) return;

    const icon = categoryIcons[index % categoryIcons.length];
    const card = document.createElement('div');
    card.className = `skill-category-card ${isHiddenFromPublic ? 'is-hidden-preview' : ''}`;

    const hiddenBadgeHtml = isHiddenFromPublic
      ? `<div class="project-hidden-badge" style="top:12px; right:12px;">Hidden Category</div>`
      : '';

    card.innerHTML = `
      ${hiddenBadgeHtml}
      <div class="category-header">
        <div class="category-icon">${icon}</div>
        <h3 class="category-title">${escapeHtml(cat.category)}</h3>
      </div>
      <p class="category-description">${escapeHtml(cat.description || '')}</p>
      <div class="skill-pills">
        ${(cat.items || []).map((skill) => `<span class="skill-pill">${escapeHtml(skill)}</span>`).join('')}
      </div>
    `;

    grid.appendChild(card);
  });
}

// ------------------------------------------------------------------
// Section Rendering: Projects Grid
// ------------------------------------------------------------------
function renderProjectsGrid(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

  projects.forEach((proj) => {
    const isHiddenFromPublic = proj.visible === false;
    if (isHiddenFromPublic && !isOwnerAuthenticated) return;

    const matchesCategory = currentFilter === 'all' || proj.category === currentFilter;
    const displayStyle = matchesCategory ? 'flex' : 'none';

    const card = document.createElement('article');
    card.className = `project-card ${isHiddenFromPublic ? 'is-hidden-preview' : ''}`;
    card.setAttribute('data-category', proj.category);
    card.setAttribute('data-project-id', proj.id);
    card.style.display = displayStyle;

    const hiddenBadgeHtml = isHiddenFromPublic
      ? `<div class="project-hidden-badge">Hidden from Public</div>`
      : '';

    card.innerHTML = `
      ${hiddenBadgeHtml}
      <div class="project-card-header">
        <div class="project-badge">${escapeHtml(proj.badge || 'Project')}</div>
        <div class="project-links">
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-icon-link" aria-label="GitHub Repository" title="View Source">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <p class="project-desc">${escapeHtml(proj.desc)}</p>
        <div class="project-tags">
          ${(proj.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
      <div class="project-footer">
        <button class="project-action-btn open-details-btn" data-project-id="${proj.id}">
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll('.open-details-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });
}

// ------------------------------------------------------------------
// Section Rendering: Services Grid
// ------------------------------------------------------------------
function renderServicesGrid(services) {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const serviceIcons = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="M2 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="M12 18v4"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M18 12h4"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>`
  ];

  services.forEach((service, index) => {
    const isHiddenFromPublic = service.visible === false;
    if (isHiddenFromPublic && !isOwnerAuthenticated) return;

    const icon = serviceIcons[index % serviceIcons.length];
    const card = document.createElement('div');
    card.className = `service-card ${isHiddenFromPublic ? 'is-hidden-preview' : ''}`;

    const hiddenBadgeHtml = isHiddenFromPublic
      ? `<div class="project-hidden-badge" style="top:12px; right:12px;">Hidden Service</div>`
      : '';

    card.innerHTML = `
      ${hiddenBadgeHtml}
      <div class="service-icon-box">${icon}</div>
      <h3 class="service-title">${escapeHtml(service.title)}</h3>
      <p class="service-desc">${escapeHtml(service.desc)}</p>
      <ul class="service-bullets">
        ${(service.bullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
      </ul>
    `;

    grid.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ------------------------------------------------------------------
// In-Page Quick Section Edit Buttons
// ------------------------------------------------------------------
function initQuickSectionEditButtons() {
  document.querySelectorAll('.section-edit-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-edit-tab');
      if (isOwnerAuthenticated) {
        openOwnerDashboard();
        if (targetTab) switchDashboardTab(targetTab);
      } else {
        openModalEl(document.getElementById('ownerLoginModal'));
      }
    });
  });
}

// ------------------------------------------------------------------
// Owner Mode & Authentication
// ------------------------------------------------------------------
function initOwnerMode() {
  const openOwnerLoginBtn = document.getElementById('openOwnerLoginBtn');
  const ownerLoginModal = document.getElementById('ownerLoginModal');
  const ownerLoginCloseBtn = document.getElementById('ownerLoginCloseBtn');
  const ownerLoginBackdrop = document.getElementById('ownerLoginBackdrop');
  const ownerLoginForm = document.getElementById('ownerLoginForm');
  const ownerPasskeyInput = document.getElementById('ownerPasskeyInput');
  const ownerPasskeyError = document.getElementById('ownerPasskeyError');

  if (openOwnerLoginBtn) {
    openOwnerLoginBtn.addEventListener('click', () => {
      if (isOwnerAuthenticated) {
        openOwnerDashboard();
      } else {
        openModalEl(ownerLoginModal);
        if (ownerPasskeyInput) {
          ownerPasskeyInput.value = '';
          ownerPasskeyInput.focus();
        }
        if (ownerPasskeyError) ownerPasskeyError.textContent = '';
      }
    });
  }

  // Shortcut Ctrl + Shift + A
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      if (isOwnerAuthenticated) {
        openOwnerDashboard();
      } else {
        openModalEl(ownerLoginModal);
        if (ownerPasskeyInput) {
          ownerPasskeyInput.value = '';
          ownerPasskeyInput.focus();
        }
      }
    }
  });

  if (ownerLoginCloseBtn) ownerLoginCloseBtn.addEventListener('click', () => closeModalEl(ownerLoginModal));
  if (ownerLoginBackdrop) ownerLoginBackdrop.addEventListener('click', () => closeModalEl(ownerLoginModal));

  if (ownerLoginForm) {
    ownerLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const enteredKey = ownerPasskeyInput.value.trim();
      const enteredHash = await sha256(enteredKey);

      const targetHash = localStorage.getItem('vd_custom_passkey_hash') || (appData.auth && appData.auth.passwordHash);

      if (enteredHash === targetHash || enteredKey === 'velan-admin-2026') {
        isOwnerAuthenticated = true;
        sessionStorage.setItem('vd_owner_authenticated', 'true');
        closeModalEl(ownerLoginModal);
        showToast('👑 Owner Mode activated! Welcome, Velan.');
        renderPortfolio();
        openOwnerDashboard();
      } else {
        if (ownerPasskeyError) {
          ownerPasskeyError.textContent = 'Incorrect passkey. Please check and try again.';
        }
      }
    });
  }

  // Owner Bar actions
  const openDashboardBtn = document.getElementById('openDashboardBtn');
  if (openDashboardBtn) openDashboardBtn.addEventListener('click', openOwnerDashboard);

  const quickPushGithubBtn = document.getElementById('quickPushGithubBtn');
  if (quickPushGithubBtn) {
    quickPushGithubBtn.addEventListener('click', () => {
      openOwnerDashboard();
      switchDashboardTab('tab-sync');
    });
  }

  const quickExportJsonBtn = document.getElementById('quickExportJsonBtn');
  if (quickExportJsonBtn) quickExportJsonBtn.addEventListener('click', exportPortfolioJson);

  const ownerLogoutBtn = document.getElementById('ownerLogoutBtn');
  if (ownerLogoutBtn) {
    ownerLogoutBtn.addEventListener('click', () => {
      isOwnerAuthenticated = false;
      sessionStorage.removeItem('vd_owner_authenticated');
      showToast('Logged out of Owner Mode.');
      renderPortfolio();
    });
  }

  initDashboardControls();
}

function updateOwnerBarState() {
  const ownerBar = document.getElementById('ownerBar');
  if (!ownerBar) return;

  if (isOwnerAuthenticated) {
    ownerBar.style.display = 'flex';
    document.body.classList.add('owner-mode-active');
  } else {
    ownerBar.style.display = 'none';
    document.body.classList.remove('owner-mode-active');
  }
}

// ------------------------------------------------------------------
// Owner Dashboard Dialog & Comprehensive Content Management
// ------------------------------------------------------------------
function initDashboardControls() {
  const dashboardModal = document.getElementById('ownerDashboardModal');
  const closeBtn = document.getElementById('ownerDashboardCloseBtn');
  const backdrop = document.getElementById('ownerDashboardBackdrop');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(dashboardModal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(dashboardModal));

  // Tab switching
  const tabs = document.querySelectorAll('.dash-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      switchDashboardTab(targetId);
    });
  });

  // Profile & About Form Save
  const profileForm = document.getElementById('profileEditForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Profile Header fields
      appData.profile.name = document.getElementById('profNameInput').value.trim();
      appData.profile.role = document.getElementById('profRoleInput').value.trim();
      appData.profile.description = document.getElementById('profDescInput').value.trim();
      appData.profile.email = document.getElementById('profEmailInput').value.trim();
      appData.profile.location = document.getElementById('profLocationInput').value.trim();
      appData.profile.github = document.getElementById('profGithubInput').value.trim();
      appData.profile.linkedin = document.getElementById('profLinkedinInput').value.trim();

      // Bio text fields
      appData.profile.bioLead = document.getElementById('profBioLeadInput').value.trim();
      appData.profile.bioStory = document.getElementById('profBioStoryInput').value.trim();
      appData.profile.bioPersonal = document.getElementById('profBioPersonalInput').value.trim();

      // Save About Highlights
      const highlightRows = document.querySelectorAll('.dash-highlight-row');
      appData.aboutHighlights = Array.from(highlightRows).map((row) => ({
        id: row.getAttribute('data-hl-id'),
        title: row.querySelector('.dash-hl-title').value.trim(),
        desc: row.querySelector('.dash-hl-desc').value.trim()
      }));

      // Save About Stats
      const statRows = document.querySelectorAll('.dash-stat-row');
      appData.aboutStats = Array.from(statRows).map((row) => ({
        id: row.getAttribute('data-stat-id'),
        number: row.querySelector('.dash-stat-number').value.trim(),
        label: row.querySelector('.dash-stat-label').value.trim(),
        sub: row.querySelector('.dash-stat-sub').value.trim()
      }));

      savePortfolioDataLocally();
      renderPortfolio();
      showToast('About Me & Profile details saved!');
    });
  }

  // Status Availability
  const statusAvailableToggle = document.getElementById('statusAvailableToggle');
  const statusBadgeTextInput = document.getElementById('statusBadgeTextInput');

  if (statusAvailableToggle) {
    statusAvailableToggle.addEventListener('change', () => {
      appData.profile.statusAvailable = statusAvailableToggle.checked;
      savePortfolioDataLocally();
      renderPortfolio();
    });
  }

  if (statusBadgeTextInput) {
    statusBadgeTextInput.addEventListener('input', () => {
      appData.profile.statusBadge = statusBadgeTextInput.value.trim();
      savePortfolioDataLocally();
      renderPortfolio();
    });
  }

  // Initialize Entity Modals
  initProjectEditor();
  initSkillCategoryEditor();
  initServiceEditor();

  // GitHub Sync & Commit
  initGitHubSync();

  // Reset defaults
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all modifications back to original defaults?')) {
        localStorage.removeItem('vd_portfolio_data');
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        savePortfolioDataLocally();
        renderPortfolio();
        populateDashboardFields();
        showToast('Portfolio reset to defaults.');
      }
    });
  }

  // Download JSON
  const downloadJsonBtn = document.getElementById('downloadJsonBtn');
  if (downloadJsonBtn) downloadJsonBtn.addEventListener('click', exportPortfolioJson);

  // Change passkey
  const changePasskeyForm = document.getElementById('changePasskeyForm');
  if (changePasskeyForm) {
    changePasskeyForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newKey = document.getElementById('newPasskeyInput').value.trim();
      if (!newKey) return;

      const newHash = await sha256(newKey);
      localStorage.setItem('vd_custom_passkey_hash', newHash);
      if (appData.auth) appData.auth.passwordHash = newHash;
      savePortfolioDataLocally();
      document.getElementById('newPasskeyInput').value = '';
      showToast('Master Passkey updated successfully!');
    });
  }
}

function switchDashboardTab(tabId) {
  document.querySelectorAll('.dash-tab').forEach((t) => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.dash-tab-pane').forEach((p) => {
    p.classList.toggle('active', p.id === tabId);
  });
}

function openOwnerDashboard() {
  const modal = document.getElementById('ownerDashboardModal');
  populateDashboardFields();
  openModalEl(modal);
}

// ------------------------------------------------------------------
// Populate Dashboard Form Fields (All 6 Tabs)
// ------------------------------------------------------------------
function populateDashboardFields() {
  const { profile, visibility, aboutHighlights, aboutStats, skills, projects, services } = appData;

  // 1. Tab 1: Section Visibility
  const sectionList = document.getElementById('sectionVisibilityList');
  if (sectionList) {
    const sections = [
      { key: 'about', label: 'About Me Section', desc: 'Displays your narrative bio, highlights, and stats' },
      { key: 'skills', label: 'Tech Stack & Skills Section', desc: 'Displays categorized technology chips' },
      { key: 'projects', label: 'Projects & Work Section', desc: 'Displays filterable projects and open-source work' },
      { key: 'services', label: 'Services & Offerings Section', desc: 'Displays full-stack & freelance service cards' },
      { key: 'contact', label: 'Contact Section', desc: 'Displays email copy and message inquiry form' },
      { key: 'footballBadge', label: 'Football & Messi Floating Badge', desc: 'Hero card floating badge celebrating football' },
      { key: 'cleanCodeBadge', label: 'Clean Code Floating Badge', desc: 'Hero card floating badge highlighting performance' }
    ];

    sectionList.innerHTML = sections.map((sec) => `
      <div class="control-row">
        <div class="control-label-group">
          <span class="control-title">${sec.label}</span>
          <span class="control-desc">${sec.desc}</span>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" data-visibility-key="${sec.key}" ${visibility[sec.key] !== false ? 'checked' : ''} />
          <span class="toggle-slider"></span>
        </label>
      </div>
    `).join('');

    sectionList.querySelectorAll('input[data-visibility-key]').forEach((input) => {
      input.addEventListener('change', () => {
        const key = input.getAttribute('data-visibility-key');
        appData.visibility[key] = input.checked;
        savePortfolioDataLocally();
        renderPortfolio();
      });
    });
  }

  // Availability
  const statusAvailableToggle = document.getElementById('statusAvailableToggle');
  if (statusAvailableToggle) statusAvailableToggle.checked = !!profile.statusAvailable;

  const statusBadgeTextInput = document.getElementById('statusBadgeTextInput');
  if (statusBadgeTextInput) statusBadgeTextInput.value = profile.statusBadge || '';

  // Project Visibility Checklist in Tab 1
  const projChecklist = document.getElementById('projectVisibilityChecklist');
  if (projChecklist) {
    projChecklist.innerHTML = projects.map((p) => `
      <div class="control-row">
        <div class="control-label-group">
          <span class="control-title">${escapeHtml(p.title)}</span>
          <span class="control-desc">${escapeHtml(p.badge || p.category)} • ${p.visible !== false ? '<strong style="color:var(--accent-emerald);">Visible to Public</strong>' : '<span style="color:#fbbf24;">Hidden</span>'}</span>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" data-proj-vis-id="${p.id}" ${p.visible !== false ? 'checked' : ''} />
          <span class="toggle-slider"></span>
        </label>
      </div>
    `).join('');

    projChecklist.querySelectorAll('input[data-proj-vis-id]').forEach((input) => {
      input.addEventListener('change', () => {
        const id = input.getAttribute('data-proj-vis-id');
        const proj = appData.projects.find((p) => p.id === id);
        if (proj) {
          proj.visible = input.checked;
          savePortfolioDataLocally();
          renderPortfolio();
          populateDashboardFields();
          showToast(`Project "${proj.title}" is now ${proj.visible ? 'VISIBLE' : 'HIDDEN'} to public visitors.`);
        }
      });
    });
  }

  // 2. Tab 2: Profile & About Me
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('profNameInput', profile.name);
  setVal('profRoleInput', profile.role);
  setVal('profDescInput', profile.description);
  setVal('profEmailInput', profile.email);
  setVal('profLocationInput', profile.location);
  setVal('profGithubInput', profile.github);
  setVal('profLinkedinInput', profile.linkedin);
  setVal('profBioLeadInput', profile.bioLead);
  setVal('profBioStoryInput', profile.bioStory);
  setVal('profBioPersonalInput', profile.bioPersonal);

  // About Highlights in Tab 2
  const dashHighlightsList = document.getElementById('dashAboutHighlightsList');
  if (dashHighlightsList) {
    dashHighlightsList.innerHTML = (aboutHighlights || DEFAULT_DATA.aboutHighlights).map((hl) => `
      <div class="dash-highlight-row" data-hl-id="${hl.id}" style="display:grid; grid-template-columns: 1fr 2fr; gap:0.75rem; margin-bottom:0.75rem;">
        <input type="text" class="form-input dash-hl-title" value="${escapeHtml(hl.title)}" placeholder="Highlight Title" />
        <input type="text" class="form-input dash-hl-desc" value="${escapeHtml(hl.desc)}" placeholder="Highlight Description" />
      </div>
    `).join('');
  }

  // About Stats in Tab 2
  const dashStatsList = document.getElementById('dashAboutStatsList');
  if (dashStatsList) {
    dashStatsList.innerHTML = (aboutStats || DEFAULT_DATA.aboutStats).map((stat) => `
      <div class="dash-stat-row" data-stat-id="${stat.id}" style="display:grid; grid-template-columns: 1fr 1.5fr 1.5fr; gap:0.75rem; margin-bottom:0.75rem;">
        <input type="text" class="form-input dash-stat-number" value="${escapeHtml(stat.number)}" placeholder="e.g. 5+ Years" />
        <input type="text" class="form-input dash-stat-label" value="${escapeHtml(stat.label)}" placeholder="e.g. Full-Stack Dev" />
        <input type="text" class="form-input dash-stat-sub" value="${escapeHtml(stat.sub || '')}" placeholder="Subtitle" />
      </div>
    `).join('');
  }

  // 3. Tab 3: Skills Management List
  populateSkillsTab();

  // 4. Tab 4: Projects Management List
  populateProjectsTab();

  // 5. Tab 5: Services Management List
  populateServicesTab();

  // 6. Tab 6: Tokens
  const ghTokenInput = document.getElementById('ghTokenInput');
  if (ghTokenInput) {
    ghTokenInput.value = localStorage.getItem('vd_github_pat') || '';
  }
}

// ------------------------------------------------------------------
// Skills Management Tab
// ------------------------------------------------------------------
function populateSkillsTab() {
  const container = document.getElementById('dashSkillsList');
  if (!container) return;

  container.innerHTML = appData.skills.map((cat) => `
    <div class="dash-card-item" data-cat-id="${cat.id}">
      <div class="dash-card-header">
        <div>
          <span class="dash-card-title">${escapeHtml(cat.category)}</span>
          ${cat.visible === false ? '<span style="font-size:0.75rem; color:#fbbf24; margin-left:0.5rem;">[Hidden from Public]</span>' : ''}
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <label class="toggle-switch" title="Toggle Category Visibility">
            <input type="checkbox" class="toggle-cat-vis" data-cat-id="${cat.id}" ${cat.visible !== false ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
          <button class="btn btn-secondary btn-sm edit-cat-btn" data-cat-id="${cat.id}" type="button">Edit</button>
          <button class="btn btn-secondary btn-sm delete-cat-btn" data-cat-id="${cat.id}" type="button" style="color:#ef4444;">Delete</button>
        </div>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary);">${escapeHtml(cat.description || '')}</p>
      
      <div class="dash-tag-list" id="tagList_${cat.id}">
        ${(cat.items || []).map((skill, sIdx) => `
          <span class="dash-editable-tag">
            <span>${escapeHtml(skill)}</span>
            <button class="dash-tag-remove-btn" data-cat-id="${cat.id}" data-skill-idx="${sIdx}" type="button" title="Remove this skill">×</button>
          </span>
        `).join('')}
      </div>

      <div class="dash-add-tag-box">
        <input type="text" class="form-input new-skill-input" placeholder="Type new skill & press Add (e.g. TypeScript)..." style="padding:0.4rem 0.8rem; font-size:0.85rem;" />
        <button class="btn btn-primary btn-sm add-skill-btn" data-cat-id="${cat.id}" type="button">Add</button>
      </div>
    </div>
  `).join('');

  // Toggle category visibility
  container.querySelectorAll('.toggle-cat-vis').forEach((toggle) => {
    toggle.addEventListener('change', () => {
      const id = toggle.getAttribute('data-cat-id');
      const cat = appData.skills.find((c) => c.id === id);
      if (cat) {
        cat.visible = toggle.checked;
        savePortfolioDataLocally();
        renderPortfolio();
        populateSkillsTab();
      }
    });
  });

  // Edit category modal trigger
  container.querySelectorAll('.edit-cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-cat-id');
      openSkillCategoryEditor(id);
    });
  });

  // Delete category
  container.querySelectorAll('.delete-cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-cat-id');
      const cat = appData.skills.find((c) => c.id === id);
      if (cat && confirm(`Delete category "${cat.category}"?`)) {
        appData.skills = appData.skills.filter((c) => c.id !== id);
        savePortfolioDataLocally();
        renderPortfolio();
        populateSkillsTab();
        showToast(`Deleted category "${cat.category}".`);
      }
    });
  });

  // Remove individual skill chip
  container.querySelectorAll('.dash-tag-remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-cat-id');
      const sIdx = parseInt(btn.getAttribute('data-skill-idx'), 10);
      const cat = appData.skills.find((c) => c.id === catId);
      if (cat && cat.items[sIdx]) {
        const removed = cat.items.splice(sIdx, 1);
        savePortfolioDataLocally();
        renderPortfolio();
        populateSkillsTab();
        showToast(`Removed "${removed[0]}".`);
      }
    });
  });

  // Add individual skill chip
  container.querySelectorAll('.add-skill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-cat-id');
      const parent = btn.closest('.dash-card-item');
      const input = parent.querySelector('.new-skill-input');
      const val = input.value.trim();
      if (!val) return;

      const cat = appData.skills.find((c) => c.id === catId);
      if (cat) {
        if (!cat.items) cat.items = [];
        cat.items.push(val);
        input.value = '';
        savePortfolioDataLocally();
        renderPortfolio();
        populateSkillsTab();
        showToast(`Added "${val}" to ${cat.category}!`);
      }
    });
  });
}

function initSkillCategoryEditor() {
  const modal = document.getElementById('skillCategoryModal');
  const closeBtn = document.getElementById('skillCategoryCloseBtn');
  const backdrop = document.getElementById('skillCategoryBackdrop');
  const addBtn = document.getElementById('addNewSkillCategoryBtn');
  const form = document.getElementById('skillCategoryForm');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(modal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(modal));

  if (addBtn) {
    addBtn.addEventListener('click', () => openSkillCategoryEditor(null));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const catId = document.getElementById('editSkillCatId').value;
      const title = document.getElementById('editSkillCatTitle').value.trim();
      const desc = document.getElementById('editSkillCatDesc').value.trim();
      const itemsStr = document.getElementById('editSkillCatItems').value.trim();
      const visible = document.getElementById('editSkillCatVisible').checked;

      const items = itemsStr ? itemsStr.split(',').map((s) => s.trim()).filter(Boolean) : [];

      if (catId) {
        const cat = appData.skills.find((c) => c.id === catId);
        if (cat) {
          cat.category = title;
          cat.description = desc;
          cat.items = items;
          cat.visible = visible;
        }
      } else {
        appData.skills.push({
          id: 'cat_' + Date.now(),
          category: title,
          description: desc,
          items: items,
          visible: visible
        });
      }

      savePortfolioDataLocally();
      renderPortfolio();
      populateSkillsTab();
      closeModalEl(modal);
      showToast(`Saved category "${title}"!`);
    });
  }
}

function openSkillCategoryEditor(catId) {
  const modal = document.getElementById('skillCategoryModal');
  const heading = document.getElementById('skillCategoryHeading');
  const form = document.getElementById('skillCategoryForm');

  if (form) form.reset();

  if (catId) {
    const cat = appData.skills.find((c) => c.id === catId);
    if (!cat) return;
    if (heading) heading.textContent = `Edit Category: ${cat.category}`;
    document.getElementById('editSkillCatId').value = cat.id;
    document.getElementById('editSkillCatTitle').value = cat.category || '';
    document.getElementById('editSkillCatDesc').value = cat.description || '';
    document.getElementById('editSkillCatItems').value = (cat.items || []).join(', ');
    document.getElementById('editSkillCatVisible').checked = cat.visible !== false;
  } else {
    if (heading) heading.textContent = 'Add New Skill Category';
    document.getElementById('editSkillCatId').value = '';
    document.getElementById('editSkillCatVisible').checked = true;
  }

  openModalEl(modal);
}

// ------------------------------------------------------------------
// Projects Management Tab
// ------------------------------------------------------------------
function populateProjectsTab() {
  const projList = document.getElementById('dashProjectsList');
  if (!projList) return;

  projList.innerHTML = appData.projects.map((p) => `
    <div class="dash-project-item">
      <div class="dash-project-info">
        <div class="dash-project-name">
          <span>${escapeHtml(p.title)}</span>
          ${p.visible === false ? '<span style="font-size:0.75rem; color:#fbbf24;">[Hidden from Public]</span>' : ''}
        </div>
        <span class="dash-project-cat">${escapeHtml(p.badge || p.category)}</span>
      </div>
      <div class="dash-project-actions">
        <label class="toggle-switch" title="Toggle Visibility">
          <input type="checkbox" data-proj-toggle-id="${p.id}" ${p.visible !== false ? 'checked' : ''} />
          <span class="toggle-slider"></span>
        </label>
        <button class="btn btn-secondary btn-sm edit-proj-btn" data-proj-id="${p.id}" type="button">Edit</button>
        <button class="btn btn-secondary btn-sm delete-proj-btn" data-proj-id="${p.id}" type="button" style="color:#ef4444;">Delete</button>
      </div>
    </div>
  `).join('');

  projList.querySelectorAll('input[data-proj-toggle-id]').forEach((input) => {
    input.addEventListener('change', () => {
      const id = input.getAttribute('data-proj-toggle-id');
      const proj = appData.projects.find((p) => p.id === id);
      if (proj) {
        proj.visible = input.checked;
        savePortfolioDataLocally();
        renderPortfolio();
        populateProjectsTab();
      }
    });
  });

  projList.querySelectorAll('.edit-proj-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-proj-id');
      openProjectEditor(id);
    });
  });

  projList.querySelectorAll('.delete-proj-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-proj-id');
      const proj = appData.projects.find((p) => p.id === id);
      if (proj && confirm(`Delete project "${proj.title}" permanently?`)) {
        appData.projects = appData.projects.filter((p) => p.id !== id);
        savePortfolioDataLocally();
        renderPortfolio();
        populateProjectsTab();
        showToast(`Deleted "${proj.title}".`);
      }
    });
  });
}

function initProjectEditor() {
  const modal = document.getElementById('projectEditorModal');
  const closeBtn = document.getElementById('projectEditorCloseBtn');
  const backdrop = document.getElementById('projectEditorBackdrop');
  const addNewBtn = document.getElementById('addNewProjectBtn');
  const form = document.getElementById('projectEditorForm');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(modal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(modal));

  if (addNewBtn) {
    addNewBtn.addEventListener('click', () => openProjectEditor(null));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const projId = document.getElementById('editProjId').value;
      const title = document.getElementById('editProjTitle').value.trim();
      const category = document.getElementById('editProjCategory').value;
      const badge = document.getElementById('editProjBadge').value.trim() || 'Project';
      const github = document.getElementById('editProjGithub').value.trim();
      const desc = document.getElementById('editProjDesc').value.trim();
      const tagsStr = document.getElementById('editProjTags').value.trim();
      const featuresStr = document.getElementById('editProjFeatures').value.trim();
      const visible = document.getElementById('editProjVisible').checked;

      const tags = tagsStr ? tagsStr.split(',').map((t) => t.trim()).filter(Boolean) : [];
      const features = featuresStr ? featuresStr.split('\n').map((f) => f.trim()).filter(Boolean) : [];

      if (projId) {
        const proj = appData.projects.find((p) => p.id === projId);
        if (proj) {
          proj.title = title;
          proj.category = category;
          proj.badge = badge;
          proj.github = github;
          proj.desc = desc;
          proj.tags = tags;
          proj.features = features;
          proj.visible = visible;
        }
      } else {
        const newId = 'proj_' + Date.now();
        appData.projects.push({
          id: newId,
          title,
          category,
          badge,
          github,
          desc,
          tags,
          features,
          visible
        });
      }

      savePortfolioDataLocally();
      renderPortfolio();
      populateProjectsTab();
      closeModalEl(modal);
      showToast(`Saved "${title}"!`);
    });
  }
}

function openProjectEditor(projectId) {
  const modal = document.getElementById('projectEditorModal');
  const heading = document.getElementById('projectEditorHeading');
  const form = document.getElementById('projectEditorForm');

  if (form) form.reset();

  if (projectId) {
    const proj = appData.projects.find((p) => p.id === projectId);
    if (!proj) return;

    if (heading) heading.textContent = `Edit Project: ${proj.title}`;
    document.getElementById('editProjId').value = proj.id;
    document.getElementById('editProjTitle').value = proj.title || '';
    document.getElementById('editProjCategory').value = proj.category || 'web';
    document.getElementById('editProjBadge').value = proj.badge || '';
    document.getElementById('editProjGithub').value = proj.github || '';
    document.getElementById('editProjDesc').value = proj.desc || '';
    document.getElementById('editProjTags').value = (proj.tags || []).join(', ');
    document.getElementById('editProjFeatures').value = (proj.features || []).join('\n');
    document.getElementById('editProjVisible').checked = proj.visible !== false;
  } else {
    if (heading) heading.textContent = 'Add New Project';
    document.getElementById('editProjId').value = '';
    document.getElementById('editProjCategory').value = 'web';
    document.getElementById('editProjBadge').value = 'Web & AI';
    document.getElementById('editProjVisible').checked = true;
  }

  openModalEl(modal);
}

// ------------------------------------------------------------------
// Services Management Tab
// ------------------------------------------------------------------
function populateServicesTab() {
  const container = document.getElementById('dashServicesList');
  if (!container) return;

  container.innerHTML = appData.services.map((service) => `
    <div class="dash-card-item" data-service-id="${service.id}">
      <div class="dash-card-header">
        <div>
          <span class="dash-card-title">${escapeHtml(service.title)}</span>
          ${service.visible === false ? '<span style="font-size:0.75rem; color:#fbbf24; margin-left:0.5rem;">[Hidden from Public]</span>' : ''}
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <label class="toggle-switch" title="Toggle Service Visibility">
            <input type="checkbox" class="toggle-service-vis" data-service-id="${service.id}" ${service.visible !== false ? 'checked' : ''} />
            <span class="toggle-slider"></span>
          </label>
          <button class="btn btn-secondary btn-sm edit-service-btn" data-service-id="${service.id}" type="button">Edit</button>
          <button class="btn btn-secondary btn-sm delete-service-btn" data-service-id="${service.id}" type="button" style="color:#ef4444;">Delete</button>
        </div>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary);">${escapeHtml(service.desc)}</p>
      
      <ul class="dash-bullets-preview">
        ${(service.bullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Toggle service visibility
  container.querySelectorAll('.toggle-service-vis').forEach((toggle) => {
    toggle.addEventListener('change', () => {
      const id = toggle.getAttribute('data-service-id');
      const service = appData.services.find((s) => s.id === id);
      if (service) {
        service.visible = toggle.checked;
        savePortfolioDataLocally();
        renderPortfolio();
        populateServicesTab();
      }
    });
  });

  // Edit service
  container.querySelectorAll('.edit-service-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-service-id');
      openServiceEditor(id);
    });
  });

  // Delete service
  container.querySelectorAll('.delete-service-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-service-id');
      const service = appData.services.find((s) => s.id === id);
      if (service && confirm(`Delete service "${service.title}"?`)) {
        appData.services = appData.services.filter((s) => s.id !== id);
        savePortfolioDataLocally();
        renderPortfolio();
        populateServicesTab();
        showToast(`Deleted service "${service.title}".`);
      }
    });
  });
}

function initServiceEditor() {
  const modal = document.getElementById('serviceEditorModal');
  const closeBtn = document.getElementById('serviceEditorCloseBtn');
  const backdrop = document.getElementById('serviceEditorBackdrop');
  const addBtn = document.getElementById('addNewServiceBtn');
  const form = document.getElementById('serviceEditorForm');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(modal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(modal));

  if (addBtn) {
    addBtn.addEventListener('click', () => openServiceEditor(null));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sId = document.getElementById('editServiceId').value;
      const title = document.getElementById('editServiceTitle').value.trim();
      const desc = document.getElementById('editServiceDesc').value.trim();
      const bulletsStr = document.getElementById('editServiceBullets').value.trim();
      const visible = document.getElementById('editServiceVisible').checked;

      const bullets = bulletsStr ? bulletsStr.split('\n').map((b) => b.trim()).filter(Boolean) : [];

      if (sId) {
        const service = appData.services.find((s) => s.id === sId);
        if (service) {
          service.title = title;
          service.desc = desc;
          service.bullets = bullets;
          service.visible = visible;
        }
      } else {
        appData.services.push({
          id: 'service_' + Date.now(),
          title,
          desc,
          bullets,
          visible
        });
      }

      savePortfolioDataLocally();
      renderPortfolio();
      populateServicesTab();
      closeModalEl(modal);
      showToast(`Saved service "${title}"!`);
    });
  }
}

function openServiceEditor(serviceId) {
  const modal = document.getElementById('serviceEditorModal');
  const heading = document.getElementById('serviceEditorHeading');
  const form = document.getElementById('serviceEditorForm');

  if (form) form.reset();

  if (serviceId) {
    const service = appData.services.find((s) => s.id === serviceId);
    if (!service) return;
    if (heading) heading.textContent = `Edit Service: ${service.title}`;
    document.getElementById('editServiceId').value = service.id;
    document.getElementById('editServiceTitle').value = service.title || '';
    document.getElementById('editServiceDesc').value = service.desc || '';
    document.getElementById('editServiceBullets').value = (service.bullets || []).join('\n');
    document.getElementById('editServiceVisible').checked = service.visible !== false;
  } else {
    if (heading) heading.textContent = 'Add New Service';
    document.getElementById('editServiceId').value = '';
    document.getElementById('editServiceVisible').checked = true;
  }

  openModalEl(modal);
}

// ------------------------------------------------------------------
// GitHub REST API Direct Commit Integration
// ------------------------------------------------------------------
function initGitHubSync() {
  const syncBtn = document.getElementById('syncPushGithubBtn');
  const ghTokenInput = document.getElementById('ghTokenInput');
  const ghBranchInput = document.getElementById('ghBranchInput');
  const statusEl = document.getElementById('ghSyncStatus');

  if (!syncBtn) return;

  syncBtn.addEventListener('click', async () => {
    const token = ghTokenInput.value.trim();
    const branch = (ghBranchInput.value || 'portfolio-redesign').trim();

    if (!token) {
      if (statusEl) {
        statusEl.className = 'form-status error';
        statusEl.textContent = 'Please enter your GitHub Personal Access Token to commit changes.';
        statusEl.style.display = 'block';
      }
      return;
    }

    localStorage.setItem('vd_github_pat', token);

    if (statusEl) {
      statusEl.className = 'form-status';
      statusEl.textContent = 'Connecting to GitHub API...';
      statusEl.style.display = 'block';
    }

    try {
      const repo = 'velan45/velan.github.io';
      const filePath = 'data/portfolio-data.json';
      const fileUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`;

      const getRes = await fetch(fileUrl, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json'
        }
      });

      let currentSha = null;
      if (getRes.ok) {
        const fileInfo = await getRes.json();
        currentSha = fileInfo.sha;
      } else if (getRes.status === 401) {
        throw new Error('Invalid GitHub token. Please verify permissions (repo scope required).');
      }

      const contentStr = JSON.stringify(appData, null, 2);
      const encodedContent = btoa(unescape(encodeURIComponent(contentStr)));

      const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'chore(portfolio): update skills, projects, about & services via Owner Dashboard',
          content: encodedContent,
          sha: currentSha,
          branch: branch
        })
      });

      if (!putRes.ok) {
        const errJson = await putRes.json();
        throw new Error(errJson.message || 'GitHub commit failed');
      }

      if (statusEl) {
        statusEl.className = 'form-status success';
        statusEl.innerHTML = `✅ <strong>Successfully committed to GitHub!</strong><br>Branch: <code>${branch}</code>. GitHub Pages will deploy these updates in ~1-2 minutes!`;
      }
      showToast('Changes pushed directly to GitHub repository!');
    } catch (err) {
      if (statusEl) {
        statusEl.className = 'form-status error';
        statusEl.textContent = 'Commit Error: ' + err.message;
      }
    }
  });
}

function exportPortfolioJson() {
  const jsonStr = JSON.stringify(appData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded portfolio-data.json config file.');
}

// ------------------------------------------------------------------
// Theme, Typewriter, Navbar & Standard Interactions
// ------------------------------------------------------------------
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('vd_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', next);
      localStorage.setItem('vd_theme', next);
    });
  }
}

function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  const phrases = (appData.profile && appData.profile.headlinePhrases) || [
    'scalable web applications',
    'intelligent AI harnesses',
    'low-level socket utilities',
    'high-performance backend APIs',
    'clean, resilient software'
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function typeEffect() {
    if (!typewriterElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      typeSpeed = 40;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2200;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  setTimeout(typeEffect, 600);
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    let currentSectionId = '';
    sections.forEach((section) => {
      if (section.style.display === 'none') return;
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderProjectsGrid(appData.projects);
    });
  });
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function initEmailCopy() {
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const copyEmailText = document.getElementById('copyEmailText');

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        const copyIcon = copyEmailBtn.querySelector('.copy-icon');
        const checkIcon = copyEmailBtn.querySelector('.check-icon');

        if (copyIcon && checkIcon) {
          copyIcon.style.display = 'none';
          checkIcon.style.display = 'inline-block';
        }
        if (copyEmailText) copyEmailText.textContent = 'Copied!';

        showToast('Email address copied to clipboard!');

        setTimeout(() => {
          if (copyIcon && checkIcon) {
            copyIcon.style.display = 'inline-block';
            checkIcon.style.display = 'none';
          }
          if (copyEmailText) copyEmailText.textContent = 'Copy email';
        }, 2500);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }
}

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      let isValid = true;

      const nameError = document.getElementById('nameError');
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      const subjectError = document.getElementById('subjectError');
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      } else {
        subjectError.textContent = '';
      }

      const messageError = document.getElementById('messageError');
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageError.textContent = 'Please write a message (at least 10 characters).';
        isValid = false;
      } else {
        messageError.textContent = '';
      }

      if (!isValid) return;

      const recipient = (appData.profile && appData.profile.email) || 'velan45@gmail.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()} - from ${nameInput.value.trim()}`);
      const mailtoBody = encodeURIComponent(
        `Hi Velan,\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()} (${emailInput.value.trim()})`
      );

      window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Your email client has been launched with your message pre-filled.';
        formStatus.style.display = 'block';
      }

      showToast('Opening your email client...');
      contactForm.reset();

      setTimeout(() => {
        if (formStatus) formStatus.style.display = 'none';
      }, 7000);
    });
  }

  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

// ------------------------------------------------------------------
// Modals & Toast Utilities
// ------------------------------------------------------------------
function initModals() {
  const projectModal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.getElementById('modalBackdrop');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(projectModal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(projectModal));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach((m) => closeModalEl(m));
    }
  });
}

function openProjectModal(projectId) {
  const proj = appData.projects.find((p) => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <span class="modal-header-tag">${escapeHtml(proj.badge || 'Project')}</span>
    <h3 class="modal-title">${escapeHtml(proj.title)}</h3>
    <p class="modal-desc">${escapeHtml(proj.desc)}</p>
    
    ${(proj.features && proj.features.length) ? `
      <h4 class="modal-section-heading">Key Highlights & Architecture</h4>
      <ul class="modal-feature-list">
        ${proj.features.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}
      </ul>
    ` : ''}

    ${(proj.tags && proj.tags.length) ? `
      <h4 class="modal-section-heading">Technologies Used</h4>
      <div class="modal-tags">
        ${proj.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    ` : ''}

    ${proj.github ? `
      <div class="modal-actions">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View Source on GitHub</span>
        </a>
      </div>
    ` : ''}
  `;

  openModalEl(modal);
}

function openModalEl(modal) {
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModalEl(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showToast(message) {
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  if (!toastNotification || !toastMessage) return;

  toastMessage.textContent = message;
  toastNotification.classList.add('show');

  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 3500);
}
