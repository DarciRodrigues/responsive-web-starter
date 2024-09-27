const logo = document.querySelector("#logo");
const imgMoon = document.querySelector("#moon");
const imgSun = document.querySelector("#sun");
const mudar = document.querySelector(".switch");
const tema = document.querySelector(".slider");
const check = document.querySelector("#check");
const body = document.querySelector("body");

function mudarTema() {
  if (check.checked) {
    body.classList.toggle("black");
    logo.setAttribute("src", "images/alarado-icon-homepage-dark.svg");
    imgMoon.setAttribute("src", "images/Moon_fill.svg");
    imgSun.setAttribute("src", "images/Sun_fill_light.svg");
  } else {
    body.classList.remove("black");
    logo.setAttribute("src", "images/alarado-icon-homepage.svg");
    imgMoon.setAttribute("src", "images/Moon_fill_light.svg");
    imgSun.setAttribute("src", "images/Sun_fill.svg");
  }
}

check.addEventListener("change", mudarTema);

const hamburger = document.querySelector(".hamburger");
const traco1 = document.querySelector(".traco1");
const traco2 = document.querySelector(".traco2");
const traco3 = document.querySelector(".traco3");
const webMobile = document.querySelector("nav > ul");
function ativo() {
  traco1.classList.toggle("ativo");
  traco2.classList.toggle("ativo");
  traco3.classList.toggle("ativo");

  webMobile.classList.toggle("web-mobile");
}

hamburger.addEventListener("click", ativo);
