function buscarAutor(nombre) {
    const contenedor = document.getElementById('cards')

    fetch(`http://localhost:3000/autores/buscar/${nombre}`)
        .then(responde => responde.json())
        .then(autor => {
            contenedor.innerHTML = ''

            if (!autor) {
                contenedor.innerHTML = '<h1>No se encontraron libros </h1>'
                return
            }

            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
                    <p><strong>Nombre:</strong> <span class="Nombres">${autor.Nombres}</span></p>
                    <p><strong>Apellidos:</strong> <span class="editable" data-field="Apellidos">${autor.Apellidos}</span></p>
                    <p><strong>Fecha Publicacion:</strong> <span class="editable" data-field="FecPub">${autor.FecPub}</span></p>
                    <p><strong>Premios:</strong> <span class="editable" data-field="Premios">${autor.Premios}</span></p>
                    <p><strong>Fecha nacimiento:</strong> <span class="editable" data-field="FecNac">${autor.FecNac}</span></p>
                    <p><strong>Fecha Fallecimiento:</strong> <span class="editable" data-field="FecFall">${autor.FecFall}</span></p>
                    <div class="acciones">
                        <button class="btn-modificar">Modificar</button>
                        <button class="btn-guardar" style="display:none;">Guardar</button>
                        <button class="btn-eliminar">Eliminar</button>
                    </div>
`;




            contenedor.appendChild(card);
            // habilitarModificacion(card, libro)
            // eliminarLibro(card, libro.isbn)

            const btnModificar = card.querySelector('.btn-modificar');
            const btnEliminar = card.querySelector('.btn-eliminar');
            

        })
        .catch(error => {
            console.log('error al buscar el libro', error)
            contenedor.innerHTML = '<h1>Error al buscar el libro</h1>'
        })
}
