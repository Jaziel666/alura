import { conexionAPI } from "./conexion_api.js";


const productos = document.querySelector("[data-cards-contenedor]");

function crearCard(nombre, precio, imagen, id) {
    return `<div class="card" id=${id}>
                    <img src=${imagen} />
                    <div class="card-container--info">
                      <p>${nombre}</p>
                      <div class="card-container--value">
                        <p>${precio}</p>
                        <img src="" />
                      </div>
                    </div>
                  </div>`
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto=>productos.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)))
}

listarProductos();