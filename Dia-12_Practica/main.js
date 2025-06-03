/* # Calculadora de Áreas Geométricas
Este programa permite calcular el área de diferentes figuras geométricas: cuadrados, rectángulos y triángulos.
## Instrucciones
1.  **Menú Principal:**
    * El programa mostrará un menú con las siguientes opciones:
        * Calcular el área de un cuadrado.
        * Calcular el área de un rectángulo.
        * Calcular el área de un triángulo.
2.  **Selección de Opción:**
    * El usuario deberá ingresar el número correspondiente a la operación que desea realizar.
3.  **Solicitud de Datos:**
    * Dependiendo de la opción seleccionada, el programa solicitará los datos necesarios:
        * **Cuadrado:** Lado.
        * **Rectángulo:** Base y altura.
        * **Triángulo:** Base y altura.
4.  **Cálculo y Resultado:**
    * El programa realizará el cálculo del área utilizando las fórmulas correspondientes:
        * **Cuadrado:** Área = lado * lado
        * **Rectángulo:** Área = base * altura
        * **Triángulo:** Área = (base * altura) / 2
    * El resultado del área se mostrará en pantalla.
5.  **Manejo de Errores:**
    * Si el usuario ingresa una opción no válida o datos incorrectos,
 el programa mostrará un mensaje de error y solicitará que se ingrese la información nuevamente. */
let Resultado;
let Base;
let Altura;

 let opcion = prompt(`
        Elige el número de opción:
        Opción 1 : Calcular el área de un cuadrado.
        Opción 2 : Calcular el área de un rectángulo.
        Opción 3 : Calcular el área de un triángulo.`);
 
switch (opcion) {
    case "1":
        let Lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));
        if (isNaN(Lado) || Lado <= 0) {
            alert("Por favor ingrese un número válido para el lado.");
        } else {
            Resultado = Lado * Lado;
            alert(`El área del cuadrado es: ${Resultado}`);
        }
        break;

    case "2":
        Base = parseFloat(prompt("Ingrese la base del rectángulo:"));
        Altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
        if (isNaN(Base) || isNaN(Altura) || Base <= 0 || Altura <= 0) {
            alert("Por favor ingrese números válidos para base y altura.");
        } else {
            Resultado = Base * Altura;
            alert(`El área del rectángulo es: ${Resultado}`);
        }
        break;

    case "3":
        Base = parseFloat(prompt("Ingrese la base del triángulo:"));
        Altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        if (isNaN(Base) || isNaN(Altura) || Base <= 0 || Altura <= 0) {
            alert("Por favor ingrese números válidos para base y altura.");
        } else {
            Resultado = (Base * Altura) / 2;
            alert(`El área del triángulo es: ${Resultado}`);
        }
        break;

    default:
        alert("Esta no es una opción válida.");
        break;
}