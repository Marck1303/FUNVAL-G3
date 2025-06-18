import { estado } from './estado.js';
import { actualizarTableroUI, actualizarPuntajes, mostrarModalGanador } from './Interfaz.js';

// Combinaciones ganadoras posibles
const combinacionesGanadoras = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Maneja el movimiento realizado por el jugador o CPU
export function realizarJugada(indice) {
  // Ignorar si la celda ya está ocupada o si ya hay ganador
  if (estado.tablero[indice] || verificarGanador()) return;
// Registrar el movimiento
  estado.tablero[indice] = estado.jugadorActual;
  actualizarTableroUI(estado.tablero);
  
// Verificar si hay un ganador o empate
  const ganador = verificarGanador();
  if (ganador) {
    if (ganador === 'empate') {
      estado.puntajes.empates++;
    } else {
      estado.puntajes[ganador]++;
    }
    actualizarPuntajes(estado.puntajes);
    mostrarModalGanador(ganador);
    return;
  }
// Cambiar de turno
  estado.jugadorActual = estado.jugadorActual === 'X' ? 'O' : 'X';
// Si juega contra CPU, ejecutar movimiento de la CPU
  if (estado.contraCPU && estado.jugadorActual === 'O') {
    jugadaCPU();
  }
}
// Genera un movimiento aleatorio para la CPU
function jugadaCPU() {
  const indicesVacios = estado.tablero
    .map((val, i) => val === null ? i : null)
    .filter(i => i !== null);
  
  if (indicesVacios.length === 0) return;

  const indiceAleatorio = indicesVacios[Math.floor(Math.random() * indicesVacios.length)];
  setTimeout(() => realizarJugada(indiceAleatorio), 500); // simula espera de CPU
}
// Verifica si hay un ganador o empate
export function verificarGanador() {
  const t = estado.tablero;
  for (const [a, b, c] of combinacionesGanadoras) {
    if (t[a] && t[a] === t[b] && t[a] === t[c]) {
      return t[a];
    }
  }

  return t.every(celda => celda) ? 'empate' : null;
}
// Reinicia el estado del juego
export function reiniciarJuego() {
  estado.tablero = Array(9).fill(null);
  estado.jugadorActual = 'X';
  actualizarTableroUI(estado.tablero);
}