/* // Pedir al usuario cuántos números de la serie quiere
let n = parseInt(prompt("¿Cuántos números de la serie Fibonacci deseas ver?"));

// Validación básica
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número válido mayor que 0.");
} else {
  let a = 0, b = 1;

  console.log("Serie de Fibonacci:");
  for (let i = 0; i < n; i++) {
    console.log(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
  }
}
 */
/* let matriz = [
    [5, 3, 12],
    [8, 7, 4], 
    [15, 10, 77], 
  ];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
  suma += matriz[i][i];
}
console.log(suma) */


/*Ejercicios*/

const estudiantesFunval = [
{ nombre: "Felipe", nota: 89 },
{ nombre: "Thomas", nota: 34 },
{ nombre: "Pablo", nota: 77 },
{ nombre: "woodleine", nota: 68 },
{ nombre: "Mahonri", nota: 23 },];

/* extraer los nombres solo de los estudiantes aprobados y mostrarlos en mayusculas
se consideran apribados los estudiantes con nota arriba de 76 */


const aprobados = estudiantesFunval.filter(estudiante => estudiante.nota > 76).map(estudiante => estudiante.nombre.toUpperCase());

console.log(aprobados);