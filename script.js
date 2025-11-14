// Theme toggle + year

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
    // Scroll reveal animations
  const revealEls = document.querySelectorAll(
    ".section, .project-card, .card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.12
    }
  );

  revealEls.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // Shrinking header on scroll
  const header = document.querySelector(".site-header");
  const updateHeader = () => {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader);


  // Set year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.remove("theme-dark");
  } else if (savedTheme === "dark") {
    body.classList.add("theme-dark");
  }
});