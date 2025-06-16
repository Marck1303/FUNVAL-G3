import {
  suma,
  resta,
  multiplicacion,
  division,
  renderizar,
  Filtrar,
  ListaClientes
} from "./funciones.js";
import { cliente } from "./data.js";

let listafiltro = document.querySelector("#lista-clientes-filtro");
let filtro = document.querySelector("#lista-clientes")

for (let i = 0; i < cliente.length; i++) {
  
  Filtrar(cliente[i], listafiltro);
}

for (let i = 0; i < cliente.length; i++) {
  ListaClientes(cliente[i], filtro);
}
/* renderizar el cliente completo 
funcion para traer solo a los clientes q hayan realizado mas de una compra
*/

