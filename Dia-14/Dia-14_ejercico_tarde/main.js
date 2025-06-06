/* tenemos un array de estudiantes con diferentes notas quiero q me muestre un listado
de los estudiantes aprobados, se considerara aprobado aquel q tenga un promedio mayor a 51 */
let estudiantes = [
    { nombre: "Marco",edad: 22, pais: "Peru", notas: [100, 90, 0, 51, 85]},
    {nombre: "Pablo", edad: 33,  pais: "Argentina",   notas: [90, 75, 0, 0, 10]},
    {nombre: "Thomas",edad: 21, pais: "Argentina",notas: [51, 30, 20, 41, 85]},
    {nombre: "Woodleine",edad: 33, pais: "Chile", notas: [88, 11, 33, 77, 99]},
    {nombre: "Kevin",edad: 28, pais: "Bolivia",notas: [31, 30, 12, 51, 77]},
    ];

let aprobados = [];
for (let i = 0; i < estudiantes.length; i++) {
    let notas = estudiantes[i].notas;
    let suma = 0;
    for (let j = 0; j < notas.length; j++) {
        suma += notas[j];
    }
    let promedio = suma / notas.length;

    if (promedio > 51) {
        aprobados.push({
            nombre: estudiantes[i].nombre,
            promedio: promedio
        });
    }
}
console.log("Estudiantes aprobados con su promedio:");
for (let i = 0; i < aprobados.length; i++) {
    console.log(`${aprobados[i].nombre} - Promedio: ${aprobados[i].promedio}`);
}


/* del array de estudiantes mostrar a todos los estudiantes que pertenezcan al pais de argentina */
Estudiantesargentina=[]
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].pais === "Argentina") {
        Estudiantesargentina.push(estudiantes[i]);
    }
}
console.log(Estudiantesargentina)


let Filtro = estudiantes.filter(estudiante => estudiante.pais === "Argentina");
console.log( Filtro);