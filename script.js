const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("[data-menu]");
const menuLinks = document.querySelectorAll("[data-menu] a");

function closeMenu() {
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menu.classList.remove("active");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menu.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
