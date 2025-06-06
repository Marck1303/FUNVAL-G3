//1.Crear un array de frutas y mostrarlo
let Frutas = ["manzana","pera","fresa","naranja","mandarina"]
console.log( Frutas);

//2.Mostrar el primer y el último elemento de un array
console.log(Frutas[0],Frutas[Frutas.length-1])
//3.Agregar un elemento al final de un array
Frutas.push("Toronja")
console.log("3. "+Frutas )

//4.Eliminar el primer elemento del array
Frutas.shift()
console.log("4. "+Frutas )

// 5. Sumar todos los números de un array
let notas = [18,16,12,13,17];
suma1=0
for (let i = 0; i <notas.length; i++) {
    suma1+=notas[i];
}
console.log(suma1)

// 6. Contar cuántos elementos hay en un array

console.log("6. ",notas.length)


// 7. Encontrar el número mayor de un array
numeromayor=0
for (let i = 0; i < notas.length; i++) {
    if(notas[i]>numeromayor){
    numeromayor=notas[i]}
}
console.log("7: ",numeromayor)

// 8. Contar cuántos elementos son mayores a 10
contador=0
for (let i= 0; i< notas.length; i++) {
    if(notas[i]>10){
        contador++
    }
}
console.log("8: ",contador)

// 9. Crear un nuevo array con el doble de cada número 
notasdobles=[]
for (let i=0;i<notas.length;i++) {
    notasdobles.push(notas[i]*2)
}
console.log("9: ",notasdobles)

// 10. Convertir todos los elementos a mayúsculas

Mayusculas = []
for (let i = 0; i < Frutas.length; i++) {
    Mayusculas.push(Frutas[i].toUpperCase())
}
console.log("10: ", Mayusculas)


// 11. Buscar si un elemento existe en el array
/* let existeFresa = Frutas.includes("fresa");
console.log("11. ¿Existe 'fresa'?", existeFresa); */



/* iterar usando foreach y sacar el promedio de los estudiantes de funval */



let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];
let suma = 0;
let promediofinal=0

notasFunval.forEach((nota) => {
    suma+=nota
    promediofinal = suma/notasFunval.length
    console.log("aa",promediofinal)
});
console.log("aa",promediofinal)

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];