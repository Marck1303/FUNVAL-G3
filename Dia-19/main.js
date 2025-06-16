    /* arrays desestructuracion y propgacion ejercicios */
    
let a = [1, 2, 3];
    
let b = [a[0],"a", a[1],"b", a[2],"c"];
console.log(b);

/* [1,a,2,b,3,c] */
    
/* objetos */
let profesional = {
carrera: "medico",
especialidad: "pediatra",}

let superProfesional = {
    ...profesional,
    turno: "mañana",
    listaDePacientes: ["Juan", "Lucía", "Carlos"]
    };
      
    console.log(superProfesional);

/* agregar las llaves de turno y lista de pacientes q sera un array a ese objeto
convirtiendolo en un superProfesional :D*/