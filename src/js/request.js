export function getProductos() {
return fetch("http://localhost:3000/productos").then(res => res.json)
}
