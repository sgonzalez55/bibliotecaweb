document.addEventListener('DOMContentLoaded',()=>{
    const buscar = document.getElementById('buscar')
    const inputbuscar = document.getElementById('buscarAutor')

    buscar.addEventListener('click',()=>{
        const nombre = inputbuscar.value.trim()
        buscarAutor(nombre)
    })
})
