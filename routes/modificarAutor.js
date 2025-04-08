const express = require('express')
const router = express.Router()
const autor = require('../models/crearAutor')


router.put('/:Nombres', async(req, res) =>{
    try{
        const nombreparsado = req.params.Nombres.trim().toLowerCase()
        const actualizar = await autor.findOneAndUpdate(
            {
                Nombres: new RegExp(`^${nombreparsado}$`, 'i')
            },
            req.body,
            {
                new: true
            }
        )
        if(!actualizar){
            return res.status(404).json({mensaje: 'no se encontro'})
        }
        res.json({mensaje: 'autor actualizado OK', libro: actualizar})
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: 'eror al actualizar'})
    }
})
module.exports = router