async function fetchUsers() {
    try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    return data;
    } catch (error) {
    console.log(error);
    }
  }

let contenedor=document.querySelector("#container")

fetchUsers().then((datos) => {contenedor.innerHTML = "";
      datos.forEach((estudiante) => {
        console.log(estudiante);
        contenedor.innerHTML += `
        <div class="bg-gradient-to-br from-white to-blue-50 shadow-md shadow-purple-900 border-shad rounded-2xl p-6 m-4 w-64 text-center border border-purple-900 hover:scale-105 transition-all duration-300">
        <h2 class="text-xl font-bold text-blue-700">${estudiante.username}</h2>
        <p class="text-gray-600 mt-2">Usuario:  <span class="font-semibold">${estudiante.name}</span></p>
        <p class="text-gray-600 mt-2">Email:   <span class="font-semibold">${estudiante.email}</span></p>
        <p class="text-gray-600 mt-2">Compañia: <span class="font-semibold">${estudiante.company.name}</span></p>
        </div>
        `;
      });
    })
    .catch((err) => {
      contenedor.innerHTML = `<p class="text-2xl text-red-500 text-center">${err}</p>`;
    });