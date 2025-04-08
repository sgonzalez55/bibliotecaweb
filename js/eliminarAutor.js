function eliminarAutor(card, autor){
    const btneliminar = card.querySelector('.btn-eliminar')

    btneliminar.addEventListener('click',() =>{
        const aceptar = confirm('Desea borrar el autor')

        if(!aceptar){
            return
        }
        fetch(`http://localhost:3000/autores/${autor.Nombres}`,{
            method: 'DELETE'
        })
        .then(data =>{
            alert('autor eliminado')
            card.remove()
        })
        .catch(error =>{
            console.log('eror al borrar')
            alert('no se pudo borrar')
        })

    })
}