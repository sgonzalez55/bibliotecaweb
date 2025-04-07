document.addEventListener('DOMContentLoaded',()=>{
    const buscar = document.getElementById('buscar')
    const inputbuscar = document.getElementById('buscarLibro')

    buscar.addEventListener('click',()=>{
        const isbn = inputbuscar.value.trim()
        buscarLibroisbn(isbn)
    })


})