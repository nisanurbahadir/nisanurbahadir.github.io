const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.02
  }
);

revealItems.forEach((item) => observer.observe(item));

const articleDetails = document.querySelectorAll(".article-toggle");

articleDetails.forEach((detail) => {
  const closeButton = detail.querySelector(".article-close");

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      detail.open = false;
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
