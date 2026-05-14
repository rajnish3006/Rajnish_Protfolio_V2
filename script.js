(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progress = document.getElementById("scrollProgress");
  const year = document.getElementById("year");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const menuToggle = document.querySelector(".menu-toggle");
  const themeToggle = document.getElementById("themeToggle");
  const scene = document.querySelector(".hero-scene");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") {
    document.body.dataset.theme = "light";
  }

  function syncThemeButton() {
    if (!themeToggle) return;
    const isLight = document.body.dataset.theme === "light";
    themeToggle.textContent = isLight ? "Dark" : "Light";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  }

  syncThemeButton();

  function updateProgress() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? window.scrollY / height : 0;
    progress.style.transform = `scaleX(${ratio})`;
  }

  function updateActiveNav() {
    const marker = window.scrollY + window.innerHeight * 0.34;
    let activeId = sections[0]?.id;
    for (const section of sections) {
      if (marker >= section.offsetTop) {
        activeId = section.id;
      }
    }
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
    });
  }

  updateProgress();
  updateActiveNav();
  window.addEventListener("scroll", () => {
    updateProgress();
    updateActiveNav();
  }, { passive: true });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.dataset.theme === "light";
      if (isLight) {
        delete document.body.dataset.theme;
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        document.body.dataset.theme = "light";
        localStorage.setItem("portfolio-theme", "light");
      }
      syncThemeButton();
    });
  }

  const revealEls = [...document.querySelectorAll(".reveal")];
  if (reducedMotion) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
      observer.observe(el);
    });
  }

  if (!reducedMotion && scene) {
    scene.addEventListener("pointermove", (event) => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty("--mx", x.toFixed(3));
      scene.style.setProperty("--my", y.toFixed(3));

      scene.querySelectorAll("[data-depth]").forEach((node) => {
        const depth = Number(node.getAttribute("data-depth")) || 12;
        node.style.translate = `${x * depth}px ${y * depth}px`;
      });
    });

    scene.addEventListener("pointerleave", () => {
      scene.style.setProperty("--mx", "0");
      scene.style.setProperty("--my", "0");
      scene.querySelectorAll("[data-depth]").forEach((node) => {
        node.style.translate = "0 0";
      });
    });

    const surfaceSelector = ".metric, .glass-panel, .project-card, .timeline-item, .contact-main, .contact-actions, .certificate-card";
    document.querySelectorAll(surfaceSelector).forEach((surface) => surface.classList.add("tilt-surface"));

    document.querySelectorAll(".tilt-surface").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${y * -2.2}deg) rotateY(${x * 2.8}deg) translateY(-2px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }
})();
