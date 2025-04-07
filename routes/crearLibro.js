const express = require('express')
const router = express.Router()
const Libro = require('../models/crearLibro')

router.post('/',async(req,res)=>{
    console.log(req.body)
    try{
        const nuevoLibro = new Libro(req.body)
        await nuevoLibro.save()
        res.status(201).json({ mensaje: 'libro creado', libro:nuevoLibro})
    }catch(error){
        console.log('Error al crear',error)
        res.status(500).json({mensaje:'error al crear',error})
    }
})

module.exports = router