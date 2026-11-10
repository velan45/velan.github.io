/**
 * Velan D - Professional Portfolio
 * Client-Side JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------
  // 1. Theme Management (Dark / Light Mode)
  // ------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Initialize theme from localStorage or system preference
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
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('vd_theme', newTheme);
    });
  }

  // ------------------------------------------------------------------
  // 2. Dynamic Typewriter Effect in Hero
  // ------------------------------------------------------------------
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
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
      typeSpeed = 2000; // Pause at full word
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before new word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  setTimeout(typeEffect, 600);

  // ------------------------------------------------------------------
  // 3. Navbar Scroll & Active Section Highlighting (ScrollSpy)
  // ------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Navbar blur background
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // ScrollSpy active link detection
    let currentSectionId = '';
    sections.forEach((section) => {
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
  handleScroll(); // Initial check

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------
  // 4. Mobile Menu Drawer Toggle
  // ------------------------------------------------------------------
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

  // ------------------------------------------------------------------
  // 5. Project Filtering
  // ------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active button state
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------
  // 6. Project Details Data & Modal Dialog
  // ------------------------------------------------------------------
  const projectData = {
    dreamcatcher: {
      title: 'DreamCatcher - AI Dream Interpretation',
      badge: 'Web & AI Platform',
      category: 'Interactive Web Application',
      description:
        'DreamCatcher is a modern web application built to record, analyze, and interpret personal dreams. Using semantic analysis and AI-driven narrative synthesis, it breaks down symbolic elements, recurring motifs, and sentiment patterns into meaningful personal insights.',
      features: [
        'Interactive dream logging interface with sentiment indicators',
        'Semantic parsing to extract key symbolic archetypes and metaphors',
        'Responsive, modern UI designed with modular styling and dark mode support',
        'Fast lightweight frontend architecture with zero bloated dependencies'
      ],
      technologies: ['JavaScript (ES6+)', 'AI / Semantic NLP', 'HTML5', 'Modern CSS3', 'Web APIs'],
      github: 'https://github.com/velan45/DreamCatcher'
    },
    resumematcher: {
      title: 'Resume-Matcher & AI Document Harness',
      badge: 'AI & Career Tech',
      category: 'AI Tooling & Automation',
      description:
        'Resume-Matcher is an AI-powered pipeline designed to analyze, score, and align technical resumes against target job descriptions. It supports multiple LLMs to evaluate keyword coverage, structural clarity, and ATS compatibility, generating tailored recommendations and polished PDF outputs.',
      features: [
        'Multi-LLM provider compatibility for local and cloud model inference',
        'Automated scoring algorithm measuring skills alignment and experience match',
        'Document parsing pipeline for PDFs, docx, and raw markdown resumes',
        'Modular architecture facilitating custom prompt templates and evaluation metrics'
      ],
      technologies: ['Python', 'LLM Prompt Engineering', 'NLP', 'PDF Parsing', 'Automation'],
      github: 'https://github.com/velan45/Resume-Matcher'
    },
    socketping: {
      title: 'Socket Ping & Low-Level Network Diagnostic',
      badge: 'Systems & Networking',
      category: 'Systems & C++ Programming',
      description:
        'A high-precision network diagnostic tool implemented in C++ using direct Linux POSIX sockets. By bypassing higher-level abstraction overhead, Socket Ping calculates accurate round-trip time (RTT), detects packet drops, and monitors network latency variations under varied conditions.',
      features: [
        'Raw POSIX socket configuration for low-overhead packet dispatch',
        'Microsecond-precision Round Trip Time (RTT) timing and statistical analysis',
        'Robust error handling for socket timeouts, unreachable hosts, and packet loss',
        'Portable Unix/Linux architecture suitable for embedded and server diagnostics'
      ],
      technologies: ['C++', 'Linux Sockets', 'POSIX API', 'TCP/IP & ICMP', 'Networking'],
      github: 'https://github.com/velan45/socket_ping'
    },
    perfmonitor: {
      title: 'System & Website Performance Health Monitor',
      badge: 'Automation & Health',
      category: 'Python Monitoring & Automation',
      description:
        'A lightweight, resilient Python monitoring daemon that continuously checks web endpoints and host systems. It records HTTP response statuses, server response latencies, and tracks operational uptime to provide early warnings of downtime or degradation.',
      features: [
        'Configurable polling intervals and multi-endpoint tracking',
        'Latency tracking with threshold-based alerting',
        'Lightweight footprint capable of running as a systemd background service',
        'CSV/Log export capabilities for long-term reliability audits'
      ],
      technologies: ['Python', 'HTTP Protocols', 'System Health', 'Automation Scripts'],
      github: 'https://github.com/velan45/performance_monitoring'
    },
    portfolio: {
      title: 'Responsive Developer Portfolio & Showcase',
      badge: 'Web & UI Architecture',
      category: 'Frontend & Static Hosting',
      description:
        'A modern, ultra-fast portfolio website showcasing professional work, engineering skills, and open-source contributions. Crafted with semantic HTML5, custom CSS design tokens, smooth animations, and persistent dark/light mode.',
      features: [
        '100/100 Lighthouse performance with zero heavy JavaScript frameworks',
        'System-aware and user-toggled dark/light theme persistence',
        'Accessible modal dialogs, clipboard actions, and responsive layout',
        'Seamless deployment on GitHub Pages with zero-build or Vite workflow support'
      ],
      technologies: ['HTML5', 'CSS3 Variables', 'Vanilla JavaScript', 'Vite', 'GitHub Pages'],
      github: 'https://github.com/velan45/velan.github.io'
    },
    socketlin: {
      title: 'Linux Socket Programming Library',
      badge: 'Low-Level Networking',
      category: 'C++ Systems Architecture',
      description:
        'A comprehensive reference implementation of Linux socket programming in C++. Features client-server models, multi-client connection management, message serialization, and clean architectural separation of socket lifecycles.',
      features: [
        'Clean encapsulation of socket creation, binding, listening, and accepting',
        'Non-blocking socket handling and multiplexing principles',
        'Well-documented codebase designed as a reference for low-level network engineers',
        'Direct POSIX Linux integration'
      ],
      technologies: ['C++', 'Linux POSIX', 'TCP/IP', 'Server Architecture'],
      github: 'https://github.com/velan45/socket_lin'
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const openDetailButtons = document.querySelectorAll('.open-details-btn');

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data || !projectModal || !modalContent) return;

    modalContent.innerHTML = `
      <span class="modal-header-tag">${data.badge}</span>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-desc">${data.description}</p>
      
      <h4 class="modal-section-heading">Key Highlights & Architecture</h4>
      <ul class="modal-feature-list">
        ${data.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>

      <h4 class="modal-section-heading">Technologies Used</h4>
      <div class="modal-tags">
        ${data.technologies.map((t) => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View Source on GitHub</span>
        </a>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openDetailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  // ------------------------------------------------------------------
  // 7. Toast Notification Helper
  // ------------------------------------------------------------------
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotification || !toastMessage) return;

    if (toastTimer) clearTimeout(toastTimer);

    toastMessage.textContent = message;
    toastNotification.classList.add('show');

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // ------------------------------------------------------------------
  // 8. Copy Email to Clipboard
  // ------------------------------------------------------------------
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
        showToast('Could not copy automatically. Email: ' + email);
      });
    });
  }

  // ------------------------------------------------------------------
  // 9. Interactive Contact Form with Validation & Mailto
  // ------------------------------------------------------------------
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

      // Validate Name
      const nameError = document.getElementById('nameError');
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      // Validate Email
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      // Validate Subject
      const subjectError = document.getElementById('subjectError');
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      } else {
        subjectError.textContent = '';
      }

      // Validate Message
      const messageError = document.getElementById('messageError');
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageError.textContent = 'Please write a message (at least 10 characters).';
        isValid = false;
      } else {
        messageError.textContent = '';
      }

      if (!isValid) return;

      // Compose mailto link
      const recipient = 'velan45@gmail.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()} - from ${nameInput.value.trim()}`);
      const mailtoBody = encodeURIComponent(
        `Hi Velan,\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()} (${emailInput.value.trim()})`
      );

      // Trigger mail client
      window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show user confirmation
      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Your email client has been launched with your message pre-filled.';
        formStatus.style.display = 'block';
      }

      showToast('Opening your email client to send message...');

      contactForm.reset();

      setTimeout(() => {
        if (formStatus) formStatus.style.display = 'none';
      }, 7000);
    });
  }

  // ------------------------------------------------------------------
  // 10. Dynamic Current Year
  // ------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
