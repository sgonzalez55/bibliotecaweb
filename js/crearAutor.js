document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formulario = e.target;

    const autores = {
        Nombres: formulario.Nombres.value,
        Apellidos: formulario.Apellidos.value,
        FecPub: formulario.FecPub.value,
        Premios: formulario.Premios.value,
        FecNac: formulario.FecNac.value, 
        FecFall: formulario.FecFall.value,
        
    };
    

    try {
        const respuesta = await fetch('http://localhost:3000/autores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(autores)
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {
            alert('autor creado ok');
            formulario.reset();
        } else {
            alert('Error al crear autor');
            console.log(datos); 
        }

    } catch (error) {
        console.log(error);
        alert('Error con la base de datos, valida las conexiones');
    }
});
