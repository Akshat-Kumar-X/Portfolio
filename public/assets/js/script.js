'use strict';
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});
const navbarLinks = document.querySelectorAll("[data-nav-link]");
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}
const backTopBtn = document.querySelector("[data-back-to-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
ScrollReveal({ 
  reset: true,
  distance: "250px",
  duration: 2500,
  delay:350 
});
ScrollReveal().reveal('.ani', { delay: 350 , distance: "25px"});
ScrollReveal().reveal('.aniSmall', { delay: 350 , distance: "40px", origin: "right", duration: 1500});
ScrollReveal().reveal('.p1, .p3', { delay: 350 , origin: "left" });
ScrollReveal().reveal('.p2, .p4', { delay: 350 , origin: "right"});
ScrollReveal().reveal('.q1', { delay: 350 , origin: "left", distance: "100px" });
ScrollReveal().reveal('.q2', { delay: 350 , origin: "right", distance: "100px"});