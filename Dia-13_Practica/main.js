/* Funcionalidad básica:

Implementa las funciones necesarias para que el usuario pueda:
Ingresar dinero en la cuenta.
Retirar dinero si el saldo es suficiente.
Consultar el saldo actual de la cuenta.
Validación:

Asegúrate de que no se permita retirar dinero si el saldo no es suficiente.
Debes mostrar mensajes adecuados para cada operación (como “Depósito exitoso”, “Saldo insuficiente”, etc.).
Extensiones (opcional):

Si lo consideras conveniente, puedes agregar funcionalidades adicionales, como un límite de retiro diario o un historial de transacciones. */

let saldo = 0;

function mostrarMenu() {
  return prompt(`
    MENÚ DE OPCIONES
    1. Ingresar dinero
    2. Retirar dinero
    3. Consultar saldo
    4. Salir
    Elige una opción (1-4):`
    
  );
}

function ingresarDinero() {
  let montosolicitado = parseFloat(prompt("¿Cuánto deseas depositar?"));
  if (isNaN(montosolicitado) || montosolicitado <= 0) {
    alert("Monto inválido. Intenta nuevamente.");
  } else {
    saldo += montosolicitado;
    alert("Depósito exitoso. Nuevo saldo: S/ " + saldo.toFixed(2));
  }
}

function retirarDinero() {
  let monto = parseFloat(prompt("¿Cuánto deseas retirar?"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Intenta nuevamente.");
  } else if (monto > saldo) {
    alert("Saldo insuficiente. Saldo disponible: S/ " + saldo.toFixed(2));
  } else {
    saldo -= monto;
    alert("Retiro exitoso. Nuevo saldo: S/ " + saldo.toFixed(2));
  }
}

function consultarSaldo() {
  alert("Saldo actual: S/ " + saldo.toFixed(2));
}

// Bucle principal
let opcion;
do {
opcion = mostrarMenu();
  switch (opcion) {
    case "1":
      ingresarDinero();
      break;
    case "2":
      retirarDinero();
      break;
    case "3":
      consultarSaldo();
      break;
    case "4":
      alert("Gracias por usar el sistema.");
      break;
    default:
      alert("Opción inválida. Intenta nuevamente.");
  }

} while (opcion !== "4");
