const express = require('express')
const router = express.Router()
const libro = require('../models/crearLibro')


router.put('/:isbn', async(req, res) =>{
    try{
        const actualizar = await libro.findOneAndUpdate(
            {
                isbn: req.params.isbn
            },
            req.body,
            {
                new: true
            }
        )
        res.json({mensaje: 'Libro actualizado OK', libro: actualizar})
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: 'eror al actualizar'})
    }
})
module.exports = router