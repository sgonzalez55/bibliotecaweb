function habilitarModificacion(card, autor) {
    const btnModificar = card.querySelector('.btn-modificar');
    const btnGuardar = card.querySelector('.btn-guardar');
    const nombre= autor.Nombres

    btnModificar.addEventListener('click', () => {
        const campos = card.querySelectorAll('.editable');
        campos.forEach(span => {
            const valor = span.textContent;
            const campo = span.dataset.field;

            const input = document.createElement('input');
            input.value = valor;
            input.setAttribute('data-field', campo);
            input.classList.add('editable-input');

            span.replaceWith(input);
        });

        btnModificar.style.display = 'none';
        btnGuardar.style.display = 'inline-block';
    });

    btnGuardar.addEventListener('click', () => {
        const inputs = card.querySelectorAll('.editable-input');
        const datosActualizados = {};

        inputs.forEach(input => {
            const campo = input.dataset.field;
            datosActualizados[campo] = input.value;
        });
        console.log(nombre)
        fetch(`http://localhost:3000/autores/${nombre}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados)
        })
        .then(res => res.json())
        .then(data => {
            alert('Autor actualizado con éxito');
            location.reload();
        })
        .catch(err => {
            console.error(err);
            alert('Error al actualizar el autor');
        });
    });
}
