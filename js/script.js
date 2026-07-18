const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const toggleMenu = () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
};

const closeMenu = () => {
  navLinks.classList.remove("active");
  menuToggle.textContent = "☰";
  menuToggle.setAttribute("aria-expanded", "false");
};

menuToggle.addEventListener("click", toggleMenu);

navItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});