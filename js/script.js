const mudar = document.querySelector(".switch");
const tema = document.querySelector(".slider");
const check = document.querySelector("#check");

function mudarTema() {
  if (check.checked) {
    mudar.
    tema.classList.add("black");
  } else {
    tema.classList.remove("black");
  }
}

check.addEventListener("change", mudarTema);
