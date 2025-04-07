const express = require('express')
const router = express.Router()
const Libro = require('../models/crearLibro')

router.get('/',async(req, res) => {
    try{
        const libros = await Libro.find()
        res.json(libros)
    }catch(error){
        res.status(500).json({mensaje:'Error al obtener todos los libros'})
    }
})

module.exports = router