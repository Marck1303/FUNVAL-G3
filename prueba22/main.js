let datos = [
    { nombre: "pepe", edad: 18, pais: "Argentia" },
    { nombre: "juan", edad: 34, pais: "Peru" },
    { nombre: "kevin", edad: 28, pais: "Narnia" },
    { nombre: "Thomas", edad: 28, pais: "Argentina" },
    { nombre: "Johan", edad: 28, pais: "Chile" },
    { nombre: "Juana", edad: 28, pais: "Chile" },
    { nombre: "Alberto", edad: 22, pais: "Argentina" },
    { nombre: "Moises", edad: 28, pais: "Argentina" },
    { nombre: "Isaisas", edad: 28, pais: "Perú" },
    { nombre: "Bartolome", edad: 21, pais: "Brasil" },
  ];

  function traerDatos() {
    let exito=true
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if (exito) {
          resolve(datos);
        } else {
          reject("error al traer los datos");
        }
      }, 1000);
    });
  }

  let lista = document.querySelector("#listado");
  let estArg = document.querySelector("#estudiantesArgentina");
  let estedad = document.querySelector("#estudiantesedad");
  
  function CrearCard({ nombre, edad, pais }) {
    return `<a href="#" class="flex flex-col items-center justify-center w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Edad: ${edad}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400">País: ${pais}</p>
    </a>`;
  }

function CrearSkeleton() {
    return `
      <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
        </div>
      </div>`;
  }

function mostrarSkeletons(cantidad) {
    const skeletons = Array.from({ length: cantidad }, CrearSkeleton).join("");
    lista.innerHTML = skeletons;
    estArg.innerHTML = skeletons;
    estedad.innerHTML = skeletons;
  }
  
  
  async function renderizarDatos() {
    try {
        mostrarSkeletons(3); // Muestra 3 skeletons por bloque mientras carga
        const estudiantes = await traerDatos();
      lista.innerHTML = "";
      estArg.innerHTML = "";
      estedad.innerHTML = "";
      estudiantes.forEach((estudiante) => {
        const card = CrearCard(estudiante)
        lista.innerHTML += card;
      if (estudiante.pais === "Argentina") estArg.innerHTML += card;
      if (estudiante.edad === 28) estedad.innerHTML += card;
    });
  } catch (error) {
    console.error(error);
  }
}
  
  renderizarDatos();
  
  /*  */
  