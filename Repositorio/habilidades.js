// habilidades.js
const habilidades = [
    { nombre: "HTML", nivel: "Avanzado" },
    { nombre: "CSS", nivel: "Intermedio" },
    { nombre: "JavaScript", nivel: "Avanzado" },
    { nombre: "React", nivel: "Aún no" },
    { nombre: "NodeJs", nivel: "Aún no" },
    { nombre: "Tailwind", nivel: "Intermedio" }
  ];


  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btnhabilidades");
    const contenedor = document.createElement("div");
    contenedor.id = "lista-habilidades";
    contenedor.classList.add("mt-4","grid","grid-cols-3","gap-10");
    btn.after(contenedor); // Insertamos el contenedor debajo del botón
  
    btn.addEventListener("click", () => {
      contenedor.innerHTML = ""; // Limpia antes de volver a cargar
      habilidades.forEach(hab => {
        const div = document.createElement("div");
        div.classList.add("mb-2", "p-2", "bg-gray-100", "rounded");
        div.innerHTML = `
          <h2 class="font-semibold text-lg">Nombre: ${hab.nombre}</h2>
          <p class="text-sm">Nivel: ${hab.nivel}</p>
        `;
        contenedor.appendChild(div);
      });
    });
  });