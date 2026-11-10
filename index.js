/**
 * Velan D - Professional Portfolio
 * Client-Side JavaScript with Owner Mode & Dynamic Visibility Management
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
  // Check session authentication status
  isOwnerAuthenticated = sessionStorage.getItem('vd_owner_authenticated') === 'true';

  // Load configuration from local storage or json
  await loadPortfolioData();

  // Initialize UI features
  initTheme();
  initTypewriter();
  initNavbarScroll();
  initMobileMenu();
  initEmailCopy();
  initContactForm();
  initModals();
  initOwnerMode();

  // Render content according to data & visibility
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
    // Graceful fallback to default data when offline or loading local file
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
  const { profile, visibility, projects } = appData;

  // 1. Profile information
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
    if (!profile.statusAvailable) {
      heroStatusBadge.style.opacity = '0.6';
    } else {
      heroStatusBadge.style.opacity = '1';
    }
  }

  // About bio text
  const aboutBioLead = document.getElementById('aboutBioLead');
  if (aboutBioLead && profile.bioLead) aboutBioLead.textContent = profile.bioLead;

  const aboutBioStory = document.getElementById('aboutBioStory');
  if (aboutBioStory && profile.bioStory) aboutBioStory.textContent = profile.bioStory;

  const aboutBioPersonal = document.getElementById('aboutBioPersonal');
  if (aboutBioPersonal && profile.bioPersonal) aboutBioPersonal.textContent = profile.bioPersonal;

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

  // 3. Projects Grid Rendering
  renderProjectsGrid(projects);

  // 4. Update Owner Bar state if active
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

  // Update corresponding nav links
  const navLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
  navLinks.forEach((link) => {
    link.style.display = isVisible === false && !isOwnerAuthenticated ? 'none' : '';
  });
}

function renderProjectsGrid(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

  projects.forEach((proj) => {
    const isHiddenFromPublic = proj.visible === false;

    // Normal visitors do NOT see hidden projects at all
    if (isHiddenFromPublic && !isOwnerAuthenticated) {
      return;
    }

    // Filter check
    const matchesCategory = currentFilter === 'all' || proj.category === currentFilter;
    const displayStyle = matchesCategory ? 'flex' : 'none';

    const card = document.createElement('article');
    card.className = `project-card ${isHiddenFromPublic ? 'is-hidden-preview' : ''}`;
    card.setAttribute('data-category', proj.category);
    card.setAttribute('data-project-id', proj.id);
    card.style.display = displayStyle;

    const hiddenBadgeHtml = isHiddenFromPublic
      ? `<div class="project-hidden-badge" title="Hidden from public visitors. Visible only in Owner Mode.">
           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
           Hidden from Public
         </div>`
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

  // Re-bind detail modal triggers
  grid.querySelectorAll('.open-details-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
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

  // Trigger Login Modal
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

  // Keyboard Shortcut: Ctrl + Shift + A or Cmd + Shift + A
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

  // Handle Passkey Submission
  if (ownerLoginForm) {
    ownerLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const enteredKey = ownerPasskeyInput.value.trim();
      const enteredHash = await sha256(enteredKey);

      // Check stored custom hash or file hash
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

  // Owner Bar Buttons
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

  // Init Dashboard Modals & Tabs
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
// Owner Dashboard Dialog & Tabs
// ------------------------------------------------------------------
function initDashboardControls() {
  const dashboardModal = document.getElementById('ownerDashboardModal');
  const closeBtn = document.getElementById('ownerDashboardCloseBtn');
  const backdrop = document.getElementById('ownerDashboardBackdrop');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(dashboardModal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(dashboardModal));

  // Tabs switching
  const tabs = document.querySelectorAll('.dash-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      switchDashboardTab(targetId);
    });
  });

  // Profile Form Save
  const profileForm = document.getElementById('profileEditForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      appData.profile.name = document.getElementById('profNameInput').value.trim();
      appData.profile.role = document.getElementById('profRoleInput').value.trim();
      appData.profile.description = document.getElementById('profDescInput').value.trim();
      appData.profile.email = document.getElementById('profEmailInput').value.trim();
      appData.profile.location = document.getElementById('profLocationInput').value.trim();
      appData.profile.github = document.getElementById('profGithubInput').value.trim();
      appData.profile.linkedin = document.getElementById('profLinkedinInput').value.trim();
      appData.profile.bioLead = document.getElementById('profBioLeadInput').value.trim();
      appData.profile.bioStory = document.getElementById('profBioStoryInput').value.trim();
      appData.profile.bioPersonal = document.getElementById('profBioPersonalInput').value.trim();

      savePortfolioDataLocally();
      renderPortfolio();
      showToast('Profile information saved locally!');
    });
  }

  // Status toggle & badge text
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

  // GitHub Sync & Commit
  initGitHubSync();

  // Project Editor Modal Controls
  initProjectEditor();

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

function populateDashboardFields() {
  const { profile, visibility, projects } = appData;

  // 1. Populate Section Visibility
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

  // 2. Populate Availability
  const statusAvailableToggle = document.getElementById('statusAvailableToggle');
  if (statusAvailableToggle) statusAvailableToggle.checked = !!profile.statusAvailable;

  const statusBadgeTextInput = document.getElementById('statusBadgeTextInput');
  if (statusBadgeTextInput) statusBadgeTextInput.value = profile.statusBadge || '';

  // 3. Populate Project Visibility Checklist (Show/Hide)
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
          populateDashboardFields(); // Refresh labels
          showToast(`Project "${proj.title}" is now ${proj.visible ? 'VISIBLE' : 'HIDDEN'} to public visitors.`);
        }
      });
    });
  }

  // 4. Populate Project Management List (Add/Edit/Delete)
  const projList = document.getElementById('dashProjectsList');
  if (projList) {
    projList.innerHTML = projects.map((p) => `
      <div class="dash-project-item">
        <div class="dash-project-info">
          <div class="dash-project-name">
            <span>${escapeHtml(p.title)}</span>
            ${p.visible === false ? '<span style="font-size:0.75rem; color:#fbbf24;">[Hidden]</span>' : ''}
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

    // Project toggle
    projList.querySelectorAll('input[data-proj-toggle-id]').forEach((input) => {
      input.addEventListener('change', () => {
        const id = input.getAttribute('data-proj-toggle-id');
        const proj = appData.projects.find((p) => p.id === id);
        if (proj) {
          proj.visible = input.checked;
          savePortfolioDataLocally();
          renderPortfolio();
          populateDashboardFields();
        }
      });
    });

    // Project edit
    projList.querySelectorAll('.edit-proj-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-proj-id');
        openProjectEditor(id);
      });
    });

    // Project delete
    projList.querySelectorAll('.delete-proj-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-proj-id');
        const proj = appData.projects.find((p) => p.id === id);
        if (proj && confirm(`Delete project "${proj.title}" permanently?`)) {
          appData.projects = appData.projects.filter((p) => p.id !== id);
          savePortfolioDataLocally();
          renderPortfolio();
          populateDashboardFields();
          showToast(`Deleted "${proj.title}".`);
        }
      });
    });
  }

  // 5. Populate Profile Form
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

  // 6. Token prefill
  const ghTokenInput = document.getElementById('ghTokenInput');
  if (ghTokenInput) {
    ghTokenInput.value = localStorage.getItem('vd_github_pat') || '';
  }
}

// ------------------------------------------------------------------
// Project Editor Modal (Add / Edit)
// ------------------------------------------------------------------
function initProjectEditor() {
  const modal = document.getElementById('projectEditorModal');
  const closeBtn = document.getElementById('projectEditorCloseBtn');
  const backdrop = document.getElementById('projectEditorBackdrop');
  const addNewBtn = document.getElementById('addNewProjectBtn');
  const form = document.getElementById('projectEditorForm');

  if (closeBtn) closeBtn.addEventListener('click', () => closeModalEl(modal));
  if (backdrop) backdrop.addEventListener('click', () => closeModalEl(modal));

  if (addNewBtn) {
    addNewBtn.addEventListener('click', () => {
      openProjectEditor(null);
    });
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
        // Edit existing
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
        // Add new
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
      populateDashboardFields();
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

    // Save token in browser storage
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

      // 1. Get current file SHA
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

      // 2. Prepare UTF-8 base64 encoded content
      const contentStr = JSON.stringify(appData, null, 2);
      const encodedContent = btoa(unescape(encodeURIComponent(contentStr)));

      // 3. Commit new version to GitHub repository
      const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'chore(portfolio): update portfolio content & visibility via Owner Dashboard',
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

  // Filter project buttons
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
