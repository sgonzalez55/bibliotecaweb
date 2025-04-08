function habilitarModificacion(card, libro) {
    const btnModificar = card.querySelector('.btn-modificar')
    const btnGuardar = card.querySelector('.btn-guardar')
    const isbn = libro.isbn

    btnModificar.addEventListener('click', () => {
        const campos = card.querySelectorAll('.editable')
        campos.forEach(span => {
            const valor = span.textContent
            const campo = span.dataset.field

            const input = document.createElement('input')
            input.value = valor
            input.setAttribute('data-field', campo)
            input.classList.add('editable-input')

            span.replaceWith(input)
        })

        btnModificar.style.display = 'none'
        btnGuardar.style.display = 'inline-block'
    })

    btnGuardar.addEventListener('click', () => {
        const inputs = card.querySelectorAll('.editable-input')
        const datosActualizados = {}

        inputs.forEach(input => {
            const campo = input.dataset.field
            datosActualizados[campo] = input.value
        })

        fetch(`http://localhost:3000/libros/${isbn}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados)
        })
        .then(res => res.json())
        .then(data => {
            alert('Libro actualizado con éxito')
            location.reload() 
        })
        .catch(err => {
            console.error(err)
            alert('Error al actualizar el libro')
        })
    })
}
