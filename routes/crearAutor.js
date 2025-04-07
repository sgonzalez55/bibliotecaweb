const express = require('express')
const router = express.Router()
const Autor = require('../models/crearAutor')

router.post('/',async(req,res)=>{
    console.log(req.body)
    try{
        const nuevoAutor = new Autor(req.body)
        await nuevoAutor.save()
        res.status(201).json({ mensaje: 'Autor creado', autor:nuevoAutor})
    }catch(error){
        console.log('Error al crear',error)
        res.status(500).json({mensaje:'error al crear',error})
    }
})

module.exports = router






