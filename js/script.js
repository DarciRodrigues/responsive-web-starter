const imgMoon = document.querySelector("#moon");
const imgSun = document.querySelector("#sun");
const mudar = document.querySelector(".switch");
const tema = document.querySelector(".slider");
const check = document.querySelector("#check");

function mudarTema() {
  if (check.checked) {
    imgMoon.setAttribute("src", "images/Moon_fill.svg");
    
  } else {
    
  }
}

check.addEventListener("change", mudarTema);
