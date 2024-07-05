
import { conexionAPI } from "./conexion_api.js";
const formulario = document.querySelector(".");

async function nuevoProducto(evento){

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.crearProducto(nombre,precio,imagen);

    console.log("producto agregado");
}

formulario.addEventListener("submit", evento => nuevoProducto(evento));