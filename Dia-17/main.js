/* let btnmas = document.querySelector(".btnmas")
let btnmenos = document.querySelector(".btnmenos")
let parrafo = document.querySelector(".parrafo")
let contador=0

btnmas.addEventListener("click",function () {
    contador++
    parrafo.textContent=contador
})

btnmenos.addEventListener("click",function () {
    contador--
    parrafo.textContent=contador
}) */

let btn = document.querySelector(".btn");
let img = document.querySelector("#img");

let estado = 0;

// Arrays con los textos e imágenes correspondientes
const textos = ["Mini Anakin", "Anakin", "Darth Vader", "Fantasma"];
const imagenes = [
    "./imagenes/anakin_niño.jpg",
    "./imagenes/anakin.jpg",
    "./imagenes/dark_vader.jpg",
    "./imagenes/fantasma.jpg"
];

btn.addEventListener("click", function () {
    estado = (estado + 1) % 4; 
    btn.textContent = textos[estado];
    img.setAttribute("src", imagenes[estado]);
});

