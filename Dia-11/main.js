// 1. Escribe un comentario en una línea
// Este es un comentario en una sola línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
de varias líneas
en JavaScript
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = "Practica JavaScript"; // string
let numero = 73; // number
let booleano = true; // boolean
let indefinido; // undefined
let nulo = null; // null
let simbolo = Symbol("id"); // symbol
let bigInt = 1234567890123456789012345678901234567890n; // bigint

// 4. Imprime por consola el valor de todas las variables
console.log(cadena);
console.log(numero);
console.log(booleano);
console.log(indefinido);
console.log(nulo);
console.log(simbolo);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadena);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
cadena = "Cadea de texto";
numero = 1000;
booleano = false;
indefinido = undefined;
nulo = null;
simbolo = Symbol("id2");
bigInt = 99999999999999999999999n;

console.log("----Nuevos valores----");
console.log(cadena, numero, booleano, indefinido, nulo, simbolo, bigInt);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
cadena = 500;
numero = "Ahora soy un texto";
booleano = "Ahora soy un string";
indefinido = true;
nulo = 0;
simbolo = 1234;
bigInt = "Ya no soy BigInt";

console.log("---- Nuevos valores (distinto tipo) ----");
console.log(cadena, numero, booleano, indefinido, nulo, simbolo, bigInt);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constCadena = "Texto fijo";
const constNumero = 3.14;
const constBooleano = false;
const constIndefinido = undefined;
const constNulo = null;
const constSimbolo = Symbol("const");
const constBigInt = 12345678901234567890123n;

// 9. A continuación, modifica los valores de las constantes
/* constCadena = "Intento de cambio"; 
constNumero = 100; 
constBooleano = true; 
constIndefinido = null; 
constNulo = 1; 
constSimbolo = Symbol("nuevo");
constBigInt = 0n; */

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* constCadena = "Intento de cambio"; 
constNumero = 100; 
constBooleano = true; 
constIndefinido = null; 
constNulo = 1; 
constSimbolo = Symbol("nuevo");
constBigInt = 0n; */


let tengoInternet = true;
let tengoTiempo = true;
let tengoGanas = false;
let clasesDisponibles = true;
let hayLluvia = false;
let hambre = true;

let puedoAsistirClase = tengoInternet && tengoTiempo && clasesDisponibles;
let meQuedoCasa = !puedoAsistirClase || hayLluvia;
let puedoSalirComer = !puedoAsistirClase && hambre;
let avanzarProyecto = tengoGanas || meQuedoCasa;

let tengoDatosMoviles = false;
let puedoConectarme = tengoInternet || tengoDatosMoviles;

console.log("¿Puedo asistir a clase?:", puedoAsistirClase);
console.log("¿Me quedo en casa?:", meQuedoCasa);
console.log("¿Puedo salir a comer?:", puedoSalirComer);
console.log("¿Puedo avanzar mi proyecto?:", avanzarProyecto);
console.log("¿Puedo conectarme a internet?:", puedoConectarme);


console.log(10 > 5 && 5 > 8)
console.log(10 == "10")

console.log(Boolean(3))
let x = 4; console.log(x == "4");