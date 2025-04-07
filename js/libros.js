document.addEventListener('DOMContentLoaded', async()=>{
    const contenedor = document.getElementById('cards')

    try{
        const respuesta = await fetch('http://localhost:3000/')
        const libros = await respuesta.json()

        contenedor.innerHTML =''

        libros.forEach(libro => {
            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
            <img src="./assets/img/${libro.portada || 'principito.jpg'}" alt="${libro.titulo}">
            <h2>${libro.titulo}</h2>
            <p>${libro.autor}</p>
            <p>${libro.sinopsis}</p>
            
            `
            contenedor.appendChild(card)
            
        });
    }catch(error){
        console.log('Error al cargar libros',error)
        contenedor.innerHTML = ('<p>Error al cargar libros </p>')
    }
})