
let productos = [{ nombre: "Laptop", precio: 1200 },{ nombre: "Mouse", precio: 25 },{ nombre: "Teclado", precio: 50 },{ nombre: "Monitor", precio: 300 },{ nombre: "Silla Gamer", precio: 450 },{ nombre: "Audífonos", precio: 80 },{ nombre: "Webcam", precio: 60 },{ nombre: "USB 128GB", precio: 30 },{ nombre: "Impresora", precio: 200 },{ nombre: "Tablet", precio: 500 }];

/* 
1️⃣ Recorrer y mostrar productos (forEach)# 📢 Recorre el array de productos y muestra en la consola el nombre y el precio de cada uno.*/
let mostrarproductosconsola=[]
productos.forEach(mostrarproductos => {
    mostrarproductosconsola.push("Nombre: "+mostrarproductos.nombre + "| Precio: "+mostrarproductos.precio)
    });
console.log("EJERCICIO 1: (forEach)",mostrarproductosconsola)

/* 
2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)# ✅ Parte 1: Usa map para generar un array productosDisponibles que contenga solo los nombres de los productos a partir del array productos.*/
let productosDisponibles = productos.map((producto)=>"Nombre Producto: "+producto.nombre)
console.log("EJERCICIO 2 PARTE 1 (map): ",productosDisponibles)   

/*🔎 Parte 2: Luego, verifica si un producto buscado está disponible utilizando includes.*/
let productoBuscado = "Laptop"
let disponible = productos.map(producto => producto.nombre).includes(productoBuscado);
console.log("EJERCICIO 2 PARTE 2 (map + includes):",disponible)

/* 
3️⃣ Aplicar un descuento a los productos (map)#💰 Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios.*/
DescuentoAplicado= productos.map(producto=>"Nombre: "+producto.nombre +"| Producto "+(producto.precio*(10/100)))
console.log("EJERCICIO 3: (map) ",DescuentoAplicado)

/* 
4️⃣ Filtrar productos por precio (filter)# 🎯 Crea un array con los productos cuyo precio sea menor a $100.*/
ProductoFiltrados = productos.filter((producto)=>producto.precio<100)
console.log("EJERCICIO 4 (filter)",ProductoFiltrados)

/* 
5️⃣ Obtener los primeros productos (slice)# 📋 Muestra los primeros 2 productos de la lista.*/
console.log("EJERCICIO 5 (slice)",productos.slice(0,2)); 

/* 
6️⃣ Ordenar productos por precio (sort)# 📌 Instrucción: Investiga cómo funciona el método sort en JavaScript y úsalo para ordenar los productos de menor a mayor precio.*/
let sort= [...productos].sort((precioa, preciob) => precioa.precio - preciob.precio); 
console.log("EJERCICIO 6: (sort)",sort)

 /* 
7️⃣ Invertir el orden de los productos (reverse)#
🔄 Instrucción: Investiga cómo funciona el método reverse en JavaScript y utilízalo para mostrar
los productos en orden inverso. */
let Productosreverse=[...productos].reverse().map(producto => "Nombre:"+ producto.nombre + "| Precio:"+ producto.precio);
console.log("EJERCICIO 7: (reverse)",Productosreverse);
