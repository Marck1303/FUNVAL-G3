// Importa las funciones necesarias de otros módulos
import { ocultarModalGanador } from './Interfaz.js';
import { realizarJugada, reiniciarJuego } from './logicaJuego.js';
import { estado } from './estado.js';

// Referencias a elementos del DOM
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaJuego = document.getElementById('pantalla-juego');
const btnVsCPU = document.getElementById('btn-vs-cpu');
const btnVsJugador = document.getElementById('btn-vs-player');

// Maneja el botón "vs CPU" para iniciar el juego contra la computadora
btnVsCPU.addEventListener('click', () => {
  estado.contraCPU = true;// Activa modo CPU
  pantallaInicio.classList.add('hidden'); // Oculta pantalla de inicio
  pantallaJuego.classList.remove('hidden');// Muestra pantalla del juego
});

// Maneja el botón "vs Jugador" para juego entre dos jugadores
btnVsJugador.addEventListener('click', () => {
  estado.contraCPU = false;// Modo jugador vs jugador
  pantallaInicio.classList.add('hidden');// Oculta pantalla de inicio
  pantallaJuego.classList.remove('hidden'); // Muestra pantalla del juego
});
// Reinicia el juego cuando se hace clic en el botón reiniciar
document.getElementById('btn-restart').addEventListener('click', () => {
  reiniciarJuego(); // Reinicia lógica del juego
   // Limpia el contenido visual de todas las celdas
  document.querySelectorAll('.cell').forEach(c => c.textContent = '');
});

// Agrega un evento de clic a cada celda del tablero para jugar
document.querySelectorAll('.cell').forEach((celda, indice) => {
  celda.addEventListener('click', () => {
    realizarJugada(indice); // Realiza jugada en la celda correspondiente
  });
});
// Botón para continuar a la siguiente ronda
document.getElementById('btn-next-round').addEventListener('click', () => {
  reiniciarJuego();// Reinicia el tablero
  ocultarModalGanador();// Oculta el modal del ganador
});
// Botón para salir del juego: recarga la página
document.getElementById('btn-quit').addEventListener('click', () => {
  location.reload();// Recarga la página completamente
});

// Maneja selección visual de ficha inicial "X"
const botonX = document.getElementById('mark-x');
const botonO = document.getElementById('mark-o');

botonX.addEventListener('click', () => {
  botonX.classList.add("bg-gray-200", "text-[#1a2a33]"); // Estilo seleccionado
  botonO.classList.remove("bg-gray-200"); // Quita estilo a la otra ficha
});
// Maneja selección visual de ficha inicial "O"
botonO.addEventListener('click', () => {
  botonO.classList.add("bg-gray-200", "text-[#1a2a33]");
  botonX.classList.remove("bg-gray-200");
});

