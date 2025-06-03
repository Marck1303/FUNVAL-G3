// 1. Concatena dos cadenas de texto
let texto1 = "Hola";
let texto2 = "Mundo";
let resultado1 = texto1 + " " + texto2;
console.log(resultado1);

// 2. Muestra la longitud de una cadena de texto
let texto3 = "Programación";
console.log(texto3.length);

// 3. Muestra el primer y último carácter de un string
let texto4 = "JavaScript";
console.log(texto4[0], texto4[texto4.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
let texto5 = "Hola Mundo";
console.log(texto5.toUpperCase());
console.log(texto5.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let texto6 = `Esta es una línea.
Esta es otra línea.
Y esta es la última línea.`;
console.log(texto6);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let texto9 = "Estoy aprendiendo JavaScript";
console.log(texto9.includes("JavaScript"));

// 9. Comprueba si dos strings son iguales
let str1 = "Hola";
let str2 = "hola";
console.log(str1 === str2);

// 10. Comprueba si dos strings tienen la misma longitud
let cadena1 = "Marco";
let cadena2 = "Abraham";
console.log(cadena1.length === cadena2.length);


//

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Marco";
if (miNombre === "Marco") {
  console.log("Marco");
}else{
  console.log("No Es tu nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let contraseña = "1234";
if (usuario === "admin" && contraseña === "1234") {
  console.log("2: Acceso permitido");
} else {
  console.log("2: Acceso denegado");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log(`No puedes votar, te faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edadPersona = 20;
let tipo = edadPersona >= 18 ? "adulto" : "menor";
console.log("5: ",tipo);

// switch

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 7;
switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("6: Verano");
    break;
  case 3:
  case 4:
  case 5:
    console.log("6: Otoño");
    break;
  case 6:
  case 7:
  case 8:
    console.log("6: Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("6: Otoño");
    break;
  default:
    console.log("6: Mes inválido");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes) {
  case 2:
    console.log("7: 28 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("7: 30 días");
    break;
  default:
    console.log("7: 31 días");
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "ingles";
switch (idioma) {
  case "español":
    console.log("8: ¡Hola!");
    break;
  case "ingles":
    console.log("8: Hello!");
    break;
  case "frances":
    console.log("8: Bonjour!");
    break;
  default:
    console.log("8: Idioma no reconocido");
}


let cantidadHomeros = 0;
let nombreusuario = prompt(toUpperCase("Ingresa tu nombre para entrar al club:"));

if (nombre === "HOMERO") {
    if (cantidadHomeros < 1) {
        cantidadHomeros++;
        alert("Bienvenido al club, Homero. Eres el primero.");
    } else {
        alert("Lo siento, Homero. Ya hay un Homero en el club.");
    }
} else {
    alert("Bienvenido al club, " + nombre + "!");
}