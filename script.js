"use strict"

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

const imgArray = new Array()

//array of 9 images for gallery
for(let i = 0;i <= 8;i++) {
  imgArray[i] = new Image()
  if(i==0) {
    imgArray[i].src = 'assets/images/chocolate.png'
    document.getElementById("chocolate").prepend(imgArray[i]) 
  }
  else if(i==1) {
    imgArray[i].src = 'assets/images/caramel donut.png'
    document.getElementById("caramel").prepend(imgArray[i])
  }
  else if(i==3) {
    imgArray[i].src = 'assets/images/berry.png'
    document.getElementById("berry").prepend(imgArray[i])
  }
  else if(i==4) {
    imgArray[i].src = 'assets/images/coconut.png'
    document.getElementById("coconut").prepend(imgArray[i])
  }
  else if(i==5) {
    imgArray[i].src = 'assets/images/glaze.png'
    document.getElementById("glaze").prepend(imgArray[i])
  }
  else if(i==6) {
    imgArray[i].src = 'assets/images/lemon.png'
    document.getElementById("lemon").prepend(imgArray[i])
  }
  else if(i==7) {
    imgArray[i].src = 'assets/images/sprinkle.png'
    document.getElementById("sprinkle").prepend(imgArray[i])
  }
  else if(i==8) {
    imgArray[i].src = 'assets/images/powder.png'
    document.getElementById("powder").prepend(imgArray[i])
  }
  else{
    imgArray[i].src = 'assets/images/Maple-Cream-Donut-min.png'
    document.getElementById("maple").prepend(imgArray[i])
  }
}

hamburger.addEventListener("click", mobileMenu)

//navigation toggle for mobile 
function mobileMenu() {
  navMenu.classList.toggle("active")
}

function hamToggle(x){
  x.classList.toggle("change")
}

//show and hide products
function showImages () {
  const p = document.querySelector(".gallery")
  if(p.style.display === "none"){
    p.style.display = "Grid"
  }
  else{
    p.style.display = "none"
  }
}