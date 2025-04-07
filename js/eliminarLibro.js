function eliminarLibro(card, isbn){
    const btneliminar = card.querySelector('.btn-eliminar')

    btneliminar.addEventListener('click',() =>{
        const aceptar = confirm('Desea borrar el libro')

        if(!aceptar){
            return
        }
        fetch(`http://localhost:3000/libros/${isbn}`,{
            method: 'DELETE'
        })
        .then(data =>{
            alert('libro eliminado')
            card.remove()
        })
        .catch(error =>{
            console.log('eror al borrar')
            alert('no se pudo borrar')
        })
        
    })
}