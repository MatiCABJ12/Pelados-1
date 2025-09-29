import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";

let sabores = JSON.parse (fs.readFileSync("data/sabores.json", "utf-8"));
let productos = JSON.parse (fs.readFileSync("data/productos.json", "utf-8"));;

let cliente = ingresarCliente();
let producto = seleccionarProducto(productos);
let gustos = seleccionarCantidadGustos(producto.maxGustos);
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
// COMPLETEN USTEDES
