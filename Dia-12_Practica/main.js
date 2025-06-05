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
 let resultado;
 let opcion;
 let base;
 let altura;
 
 while (true) {
     opcion = prompt(`
 Elige un número para realizar una operación:
 1: Calcular el área de un cuadrado.
 2: Calcular el área de un rectángulo.
 3: Calcular el área de un triángulo.
 4: Salir
 `);
 
     if (opcion === "1") {
         let lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));
         if (isNaN(lado) || lado <= 0) {
             alert("Por favor ingrese un número válido para el lado.");
         } else {
             resultado = lado * lado;
             alert(`El área del cuadrado es: ${resultado}`);
         }
 
     } else if (opcion === "2") {
         base = parseFloat(prompt("Ingrese la base del rectángulo:"));
         altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
         if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
             alert("Por favor ingrese números válidos para base y altura.");
         } else {
             resultado = base * altura;
             alert(`El área del rectángulo es: ${resultado}`);
         }
 
     } else if (opcion === "3") {
         base = parseFloat(prompt("Ingrese la base del triángulo:"));
         altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
         if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
             alert("Por favor ingrese números válidos para base y altura.");
         } else {
             resultado = (base * altura) / 2;
             alert(`El área del triángulo es: ${resultado}`);
         }
 
     } else if (opcion === "4") {
         alert("Estas saliendo de la calculadora");
         break; // Salimos del bucle
     } else {
         alert("Opción no válida. Elija la opción 1, 2, 3 o 4.");
     }
 }
 