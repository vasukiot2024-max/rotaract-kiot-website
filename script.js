// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar ul");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}
