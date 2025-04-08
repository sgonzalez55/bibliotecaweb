function buscarLibroisbn(isbn) {
    const contenedor = document.getElementById('cards')

    fetch(`http://localhost:3000/libros/buscar/${isbn}`)
        .then(responde => responde.json())
        .then(libro => {
            contenedor.innerHTML = ''

            if (!libro) {
                contenedor.innerHTML = '<h1>No se encontraron libros </h1>'
                return
            }

            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
                    <p><strong>ISBN:</strong> <span class="isbn">${libro.isbn}</span></p>
                    <p><strong>Título:</strong> <span class="editable" data-field="titulo">${libro.titulo}</span></p>
                    <p><strong>Autor:</strong> <span class="editable" data-field="autor">${libro.autor}</span></p>
                    <p><strong>Sinopsis:</strong> <span class="editable" data-field="sinopsis">${libro.sinopsis}</span></p>
                    <p><strong>Fecha edición:</strong> <span class="editable" data-field="fechaEdicion">${libro.fechaEdicion?.substring(0,10)}</span></p>
                    <p><strong>Páginas:</strong> <span class="editable" data-field="numeroPaginas">${libro.numeroPaginas}</span></p>
                    <p><strong>Ejemplares:</strong> <span class="editable" data-field="cantidadEjemplares">${libro.cantidadEjemplares}</span></p>
                    <p><strong>Presentación:</strong> <span class="editable" data-field="tipoPresentacion">${libro.tipoPresentacion}</span></p>
                    <p><strong>Literatura:</strong> <span class="editable" data-field="tipoLiteratura">${libro.tipoLiteratura}</span></p>

                    <div class="acciones">
                        <button class="btn-modificar">Modificar</button>
                        <button class="btn-guardar" style="display:none;">Guardar</button>
                        <button class="btn-eliminar">Eliminar</button>
                    </div>
`;

{/* <img src="./assets/img/${libro.portada || 'principito.jpg'}" alt="${libro.titulo}"></img> */}


            contenedor.appendChild(card);
            habilitarModificacion(card, libro)
            eliminarLibro(card, libro.isbn)

            const btnModificar = card.querySelector('.btn-modificar');
            const btnEliminar = card.querySelector('.btn-eliminar');

        })
        .catch(error => {
            console.log('error al buscar el libro', error)
            contenedor.innerHTML = '<h1>Error al buscar el libro</h1>'
        })
}
