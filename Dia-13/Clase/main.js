



/* generar los x terminos de la serie de los numeros multiplis de 5

    x= 3
    5,10,15

    x=5
    5,10,15,20,25

*/
/* 
let numero= parseInt(prompt("Ingrese el número de veces"))
let multiplo=5

for (let i = 1; i<= numero; i++) {
    console.log("Multiplos de 5 según la cantidad: "+multiplo);
    multiplo+=5
    
} */


/* 
quiero q realicen una calculadora de exponentes sin utilizar **
piden 2 numeros al usuario 1ro sera el q deberan multiplicar reiteradas veces
y el 2do sera la cantidad de veces q sera iterado


*/

/* let numeroiterar= parseInt(prompt("Ingrese el número que desea calcular"))
let numeroveces= parseInt(prompt("Ingrese el número de veces"))
resultado=1
for (let j = 0; j < numeroveces; j++) {
   
    resultado*=numeroiterar
    console.log("Numero: "+resultado );
    
}  */

/* cadenainvertir=prompt("Ingresa el texto")
let resultado = invertirCadena(cadenainvertir);
console.log(resultado); 

    

function invertirCadena(cadena) {
    let invertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }

    return invertida;
} */

do { 
    let numero = parseInt(prompt("ingresa un numero"));
    if (numero>=0) {
      switchh=true;
      console.log("Numero correcto")
    } else {
    switchh=false;
      alert("ingresa numeros positivos");
    }
} while (switchh);