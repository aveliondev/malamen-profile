document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// ===== PARALLAX 3D EFFECT =====const hero = document.getElementById("hero");
const content = document.querySelector(".hero-content");
const bg = document.querySelector(".hero-bg");

hero.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 60;
  const y = (window.innerHeight / 2 - e.pageY) / 60;

  content.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  bg.style.transform = `scale(1.08) translate(${x * -2}px, ${y * -2}px)`;
});

hero.addEventListener("mouseleave", () => {
  content.style.transform = "rotateY(0deg) rotateX(0deg)";
  bg.style.transform = "scale(1.05) translate(0, 0)";
});

hero.addEventListener("mouseleave", () => {
  hero.classList.remove("parallax-active");
  content.style.transform = "rotateY(0deg) rotateX(0deg)";
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
