function buscarAutor(nombre) {
    const contenedor = document.getElementById('cards')

    fetch(`http://localhost:3000/autores/buscar/${nombre}`)
        .then(async respuesta => {
            if (!respuesta.ok) {
                throw new Error('Autor no encontrado')
            }
            return respuesta.json()
        })
        .then(autor => {
            console.log(autor)
            contenedor.innerHTML = ''

            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
                <p><strong>Nombre:</strong> <span class="editable" data-field="Nombres">${autor.Nombres}</span></p>
                <p><strong>Apellidos:</strong> <span class="editable" data-field="Apellidos">${autor.Apellidos}</span></p>
                <p><strong>Fecha Publicación:</strong> <span class="editable" data-field="FecPub">${autor.FecPub}</span></p>
                <p><strong>Premios:</strong> <span class="editable" data-field="Premios">${autor.Premios}</span></p>
                <p><strong>Fecha Nacimiento:</strong> <span class="editable" data-field="FecNac">${autor.FecNac}</span></p>
                <p><strong>Fecha Fallecimiento:</strong> <span class="editable" data-field="FecFall">${autor.FecFall}</span></p>
                <div class="acciones">
                    <button class="btn-modificar">Modificar</button>
                    <button class="btn-guardar" style="display:none">Guardar</button>
                    <button class="btn-eliminar">Eliminar</button>
                </div>
            `

            contenedor.appendChild(card)
            habilitarModificacion(card, autor)
            eliminarAutor(card,autor)
            const btnModificar = card.querySelector('.btn-modificar')
            const btnEliminar = card.querySelector('.btn-eliminar')
        })
        .catch(error => {
            console.log('Error al buscar el autor:', error)
            contenedor.innerHTML = '<h1>Autor no encontrado o error en la búsqueda</h1>'
        })
}
