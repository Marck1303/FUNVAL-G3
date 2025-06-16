function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado = a / b;
  return resultado;
}

function renderizar(cliente, elemento) {
  elemento.innerHTML += `<li>${cliente.nombre}</li>`;
}

function ListaClientes(cliente, elemento) {
    elemento.innerHTML += `
      <div class="card2 w-[50%]">
        <h3><strong>Nombre:</strong> ${cliente.nombre}</h3>
        <p><strong>Edad:</strong> ${cliente.edad}</p>
        <p><strong>Correo:</strong> ${cliente.correo}</p>
        <p><strong>Lista de compras:</strong> ${cliente.compras}</p>
      </div>
    `;
}

function Filtrar(cliente, elemento) {
  let totalCompras = 0;

  for (let i = 0; i < cliente.compras.length; i++) {
    totalCompras += cliente.compras[i];
  }
  if (totalCompras > 1) {
    elemento.innerHTML += `
      <div class="card w-[50%]">
        <h3><strong>Nombre:</strong> ${cliente.nombre}</h3>
        <p><strong>Edad:</strong> ${cliente.edad}</p>
        <p><strong>Correo:</strong> ${cliente.correo}</p>
        <p><strong>Total de compras:</strong> ${totalCompras}</p>
        <p><strong>Lista de compras:</strong> ${cliente.compras}</p>
      </div>
    `;
  }
}



export { suma, resta, multiplicacion, division, renderizar,Filtrar,ListaClientes };
