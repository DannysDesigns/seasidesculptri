const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    document.body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  });
});

const showToast = (message) => {
  const toast = document.querySelector(".toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2600);
};

document.querySelectorAll("[data-staff-action]").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Completed";
    button.disabled = true;
    showToast(`${button.dataset.staffAction} recorded in this prototype.`);
  });
});
