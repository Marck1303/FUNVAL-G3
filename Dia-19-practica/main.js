/* 
Simular un sistema de gestión de usuarios que:
Crea usuarios nuevos.
Actualiza información de un usuario.
Filtra usuarios por rol.
Usa desestructuración y spread en todo momento.
Tareas a resolver
1. Mostrar todos los usuarios (usa desestructuración)
Imprime en consola: "Usuario: Ana, Rol: admin" para cada usuario usando forEach y desestructuración.
2. Agregar un nuevo usuario (usa spread)
Crea una función agregarUsuario(lista, nuevo) que devuelva una nueva lista con el usuario nuevo agregado. No modifiques el array original.
3. Actualizar un usuario por ID (usa spread)
Crea una función actualizarUsuario(lista, id, nuevosDatos) que:
Busque al usuario por id.
Devuelva una nueva lista con los datos actualizados del usuario.

Use spread para mantener los datos anteriores no modificados.*/
const usuarios = [
    { id: 1, nombre: "Ana", rol: "admin", edad: 28 },
    { id: 2, nombre: "Luis", rol: "editor", edad: 34 },
    { id: 3, nombre: "Carla", rol: "viewer", edad: 22 },
  ];

  function agregarUsuarioConID(lista) {
    // Obtener el ID más alto actual y sumarle 1
    const nuevoID = Math.max(...lista.map(u => u.id)) + 1;
  
    const nombre = prompt("Ingrese el nombre:");
    const rol = prompt("Ingrese el rol:");
    const edad = parseInt(prompt("Ingrese la edad:"));
    const nuevoUsuario = { id: nuevoID, nombre, rol, edad };
  
    return [...lista, nuevoUsuario];
  }
  
  // Uso:
  const nuevaLista = agregarUsuarioConID(usuarios);
  console.log(nuevaLista);

function actualizarUsuario(lista, id, nuevosDatos) {
    return lista.map(usuario =>
      usuario.id === id
        ? { ...usuario, ...nuevosDatos }
        : usuario
    );
  }
  
const usuariosActualizados = actualizarUsuario(usuarios, 2, { nombre: "Luisito", edad: 35 });
console.log(usuariosActualizados);