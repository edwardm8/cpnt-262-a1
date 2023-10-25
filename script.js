const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
}

function hamToggle(x){
  x.classList.toggle("change")
}


