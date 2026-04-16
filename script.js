const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const yearSpan = document.querySelector("#year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("open");
    });
  });
}
