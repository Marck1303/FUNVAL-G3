/* function traerDatos() {
    let exito = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (exito) {
          resolve(datos);
        } else {
          reject("code :422 error con la peticion ");
        }
      }, 3000);
    });
  }
  
  traerDatos()
    .then((datos) => console.log(datos))
    .catch((err) => console.log(err));

 */
/* console.log("QUE DEBERIA HACER:")
let promesa = prompt("¿Quieres jugar minecraft?")

function Esperar(promesa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promesa ==="si") {
        resolve("Ya creo el servidor");
      } else {
        reject("Jugaré al valorant entonces");
      }
    }, 3000);
  });
  
}
Esperar(promesa)
.then((promesa) => console.log(promesa))
.catch((err) => console.log(err)); */


let datos = [
    {
      nombre: "pepe",
      edad: 18,
      pais: "Argentina",
    },
    {
      nombre: "juan",
      edad: 34,
      pais: "Peru",
    },
    {
      nombre: "kevin",
      edad: 28,
      pais: "Narnia",
    },
    
  ];

function traerDatos() {
    let exito = true   ;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (exito) {
          resolve(datos);
        } else {
          reject("me mandó el querido Juan 😔");
        }
      }, 2000);
    });
  }
  
  let lista = document.querySelector("#lista");
  
datos.forEach(() => {
    lista.innerHTML += `<div class= "bg-gray-200 animate-pulse rounded-xl w-64 h-28 p-6"></div>`
  });

traerDatos()    
    .then((datos) => {
    lista.innerHTML = "";
  
      datos.forEach((estudiante) => {
        lista.innerHTML += `
        <div class="bg-gradient-to-br from-white to-blue-50 shadow-md shadow-purple-900 border-shad rounded-2xl p-6 m-4 w-64 text-center border border-purple-900 hover:scale-105 transition-all duration-300">
        <h2 class="text-xl font-bold text-blue-700">${estudiante.nombre}</h2>
        <p class="text-gray-600 mt-2">Edad: <span class="font-semibold">${estudiante.edad}</span></p>
        <p class="text-gray-600 mt-2">Edad: <span class="font-semibold">${estudiante.pais}</span></p>
        </div>
        `;
      });
    })
    .catch((err) => {
      lista.innerHTML = `<p class="text-2xl text-red-500 text-center">${err}</p>`;
    });

document.getElementById("recargar").addEventListener("click", () => location.reload());