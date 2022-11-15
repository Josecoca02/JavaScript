'use strict'
console.log("desde el js");
document.addEventListener('DOMContentLoaded', () => {
console.log("evento añadido");
})
var titulo = document.querySelector("h1")
//función que cambia el color de fondo del título a rojo
function botonH1() {
console.log("botonH1");
var titulo = document.querySelector("h1");

//para cambiar a los 2.5 seg
setTimeout(() => {
titulo.style.backgroundColor = "red";
}, 2500)
}
titulo.addEventListener("click", () => {
botonH1()
})