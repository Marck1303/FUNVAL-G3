export const estado = {
  // Indica el jugador que tiene el turno actual ('X' o 'O')
  jugadorActual: 'X',

  // Representa el estado del tablero con 9 posiciones (3x3), inicialmente vacías
  tablero: Array(9).fill(null),

  // Almacena los puntajes acumulados para X, O y empates
  puntajes: {
    X: 0,
    O: 0,
    empates: 0
  },

  // Determina si se juega contra la CPU (true) o contra otro jugador (false)
  contraCPU: true,
};