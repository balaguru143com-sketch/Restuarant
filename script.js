document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    document.querySelector("#form-note").textContent = "Thank you! This is a front-end demo. Connect a backend to receive enquiries.";
    form.reset();
  });
}
