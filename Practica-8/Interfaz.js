export function actualizarTableroUI(tablero) {
  tablero.forEach((valor, i) => {
    const celda = document.getElementById(`cell-${i}`);
    celda.textContent = valor || '';
  });
}

export function actualizarPuntajes(puntajes) {
  document.getElementById('score-x').textContent = puntajes.X;
  document.getElementById('score-o').textContent = puntajes.O;
  document.getElementById('score-ties').textContent = puntajes.empates;
}

export function mostrarModalGanador(ganador) {
  const modal = document.getElementById('modal-ganador');
  const icono = document.getElementById('modal-icon');
  const texto = document.getElementById('modal-texto');
  const subtitulo = document.getElementById('modal-subtitulo');

  if (ganador === 'empate') {
    subtitulo.textContent = '¡Empate!';
    icono.textContent = '🤝';
    texto.textContent = '';
    texto.className = 'text-gray-300 text-xl font-semibold uppercase';
  } else {
    subtitulo.textContent = '¡Has ganado!';
    icono.textContent = ganador;
    texto.textContent = 'Se lleva la ronda';

    const color = ganador === 'X' ? 'text-cyan-400' : 'text-yellow-400';
    icono.className = `${color} text-5xl font-bold`;
    texto.className = `${color} text-2xl font-bold uppercase`;
  }

  modal.classList.remove('hidden');
}

export function ocultarModalGanador() {
  document.getElementById('modal-ganador').classList.add('hidden');
}