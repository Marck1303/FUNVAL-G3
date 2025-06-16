import { listaProyectos } from './proyectos.js';


function mostrarProyectos() {
    const contenedor = document.getElementById("contenedor-proyectos");
    if (!contenedor) return;
  
    listaProyectos.forEach(proyecto => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 dark:bg-gray-800";
  
      card.innerHTML = `
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full max-h-64 object-contain mx-auto">
        <div class="p-5 flex flex-col gap-2">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white">${proyecto.titulo}</h2>
          <p class="text-gray-600 dark:text-gray-300">${proyecto.descripcion}</p>
        </div>
      `;
  
      contenedor.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", mostrarProyectos);



//AMPLIAR O ESCONDER EL TEXTO
const toggleBtn = document.getElementById("toggle-btn");
    const extraParagraph = document.getElementById("parrafo-extra");

    toggleBtn.addEventListener("click", () => {
        if (extraParagraph.style.display === "none" || extraParagraph.classList.contains("hidden")) {
            extraParagraph.style.display = "block";
            extraParagraph.classList.remove("hidden");
            toggleBtn.textContent = "Ver menos ▲";
        } else {
            extraParagraph.style.display = "none";
            extraParagraph.classList.add("hidden");
            toggleBtn.textContent = "Ver más ▼";
        }
    });


//Envio formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real

    const nombre = document.getElementById("website-admin").value;
    const correo = document.getElementById("email-address-icon").value;
    const mensaje = document.getElementById("message").value;
    // Simulación de envío
    console.log("Formulario enviado:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    const button = document.querySelector("button[type='submit']");
    button.disabled = true;
    button.innerHTML = "Enviando...";


    //Carga al momento de enviar
    setTimeout(() => {
    alert("¡Gracias por tu mensaje! Se envío al correo: itsmark472@gmail.com");
    button.disabled = false;
    button.innerHTML = "Enviar Formulario";
    form.reset();
    }, 2000);
    this.reset(); // Limpiar formulario
});

document.getElementById("message").addEventListener("input", function () {
    const max = 300;
    const cantidadtexto = this.value.length;
    document.getElementById("char-count").textContent = `${cantidadtexto}/${max} caracteres`;
  });
//


//Toggle boton menu nav
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById("navbar-default");
  
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });