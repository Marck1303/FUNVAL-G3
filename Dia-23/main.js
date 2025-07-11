import { traerDatosDogs } from "./data.js";
import { obtenerSubrazas } from "./subrazas.js";


let suggestions = [];
traerDatosDogs().then((res) => {
  res.forEach((raza) => {
    suggestions.push(raza);
  });
});
console.log(suggestions);
let contenedor = document.querySelector("#contenedor");
let subrazaDropdown = document.getElementById("subraza-dropdown");

for (let i = 1; i <=10; i++) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      contenedor.innerHTML += `
        
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
    <img class="object-cover w-full rounded-t-lg h-44  md:w-48 md:rounded-none md:rounded-s-lg" src="${data.message}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">perrito bonito ${i}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">adopta un perrito hoy :D</p>
    </div>
</a>
`;
    });
}

const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  dropdown.innerHTML = "";
  if (query) {
    const filtered = suggestions.filter((item)=>item.toLowerCase().includes(query));
    if (filtered.length > 0) {
        dropdown.classList.remove("hidden");
        filtered.forEach((item) => {
            const div = document.createElement("div");
            div.textContent = item;
            div.className = "px-4 py-2 cursor-pointer hover:bg-blue-100";
            div.addEventListener("click", () => {
                input.value = item;
                dropdown.classList.add("hidden");
                // Mostrar imágenes de la raza seleccionada
                fetch(`https://dog.ceo/api/breed/${input.value}/images`)
                .then((res) => res.json())
                .then((data) => {
                let arrayPerritos = data.message;
                contenedor.innerHTML = "";
                for (let j = 0; j < Math.min(10, arrayPerritos.length); j++) {
                contenedor.innerHTML += `
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                    <img class="object-cover w-full rounded-t-lg h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="${arrayPerritos[j]}" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">perrito bonito ${j + 1}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">adopta un perrito hoy :D</p>
                    </div>
                </a>
                `;
                }
                // Mostrar subrazas debajo de las imágenes
                obtenerSubrazas(item).then((subrazas) => {
                    subrazaDropdown.innerHTML = "";
                    if (subrazas.length > 0) {
                    subrazaDropdown.classList.remove("hidden");
                    subrazas.forEach((subraza) => {
                        const subDiv = document.createElement("div");
                        subDiv.textContent = subraza;
                        subDiv.className = "px-4 py-2 cursor-pointer hover:bg-blue-100";
                        subDiv.addEventListener("click", () => {
                        fetch(`https://dog.ceo/api/breed/${item}/${subraza}/images`)
                        .then((res) => res.json())
                        .then((data) => {
                        contenedor.innerHTML = "";
                        data.message.slice(0, 10).forEach((img) => {
                        contenedor.innerHTML += `
                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                            <img class="object-cover w-full rounded-t-lg h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="${img}" alt="">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${subraza} - ${item}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Subraza adorable de la raza:  ${item}</p>
                            </div>
                        </a>
                        `;
                        });
                        });
                    });
                subrazaDropdown.appendChild(subDiv);
            });
            } else {
            subrazaDropdown.classList.add("hidden");
            }
        });
    });
});
  
    dropdown.appendChild(div);
        });
      } else {
        dropdown.classList.add("hidden");
      }
    } else {
      dropdown.classList.add("hidden");
    }
  });

document.addEventListener("click", function (event) {
  if (!event.target.closest(".relative")) {
    dropdown.classList.add("hidden");
  }
});

//hacer un listado de las subrazas
