/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const palos = ["♦", "♥", "♠", "♣"];
  let indicePalos = Math.floor(Math.random() * palos.length);
  let domRandomPalos = palos[indicePalos];

  const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"];
  let indiceNumeros = Math.floor(Math.random() * numeros.length);
  let domRandomNumeros = numeros[indiceNumeros];

  let textoPalosHeader = document.getElementById("card-header");
  textoPalosHeader.innerText = domRandomPalos;

  let textoNumerosBody = document.getElementById("card-body");
  textoNumerosBody.innerText = domRandomNumeros;

  let textoPalosfooter = document.getElementById("card-footer");
  textoPalosfooter.innerText = domRandomPalos;

  if (domRandomPalos == palos[0] || domRandomPalos == palos[1]) {
    textoPalosHeader.style.color = "red";
    textoPalosfooter.style.color = "red";
  }

  const btn = document.getElementById("boton");
  btn.addEventListener("click", () => {
    location.reload();
  });
};
