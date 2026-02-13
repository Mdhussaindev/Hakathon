document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if(menuToggle && navLinks){
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
  });