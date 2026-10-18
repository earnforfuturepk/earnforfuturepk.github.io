const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });
  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
