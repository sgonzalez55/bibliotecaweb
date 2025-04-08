document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formulario = e.target;

    const datosdellibro = {
        isbn: formulario.isbn.value,
        titulo: formulario.titulo.value,
        autor: formulario.autor.value,
        sinopsis: formulario.sinopsis.value,
        fechaEdicion: formulario.fechaEdicion.value, 
        numeroPaginas: parseInt(formulario.numeroPaginas.value), 
        cantidadEjemplares: parseInt(formulario.cantidadEjemplares.value), 
        tipoPresentacion: formulario.presentacion.value,
        tipoLiteratura: formulario.literatura.value
    };
    

    try {
        const respuesta = await fetch('http://localhost:3000/libros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosdellibro)
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {
            alert('Libro creado OK');
            formulario.reset();
        } else {
            alert('Error al crear libro');
            console.log(datos); 
        }

    } catch (error) {
        console.log(error);
        alert('Error con la base de datos, valida las conexiones');
    }
});
