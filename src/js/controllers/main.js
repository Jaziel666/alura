import { servicesProducts } from "../product.services/product.services.js";
import { getProductos } from "../request.js";

const productosHtl = document.querySelector("#products");
const formulario = document.querySelector("");


const render = async () => { getProductos()
} function ostrarProductos(json, productos) { productos.innerHTML =  }
render();