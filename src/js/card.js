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

