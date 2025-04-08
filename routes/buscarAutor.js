const express = require('express')
const router = express.Router()
const Autor = require('../models/crearAutor')

router.get('/buscar/:Nombres', async (req, res) => {
    try {
        const autor = await Autor.findOne({ Nombres: new RegExp(req.params.Nombres, 'i') })

        if (!autor) {
            return res.status(404).json({ mensaje: 'No se encontró el autor' })
        }

        res.json(autor)
    } catch (error) {
        console.error('Error al buscar autor:', error)
        res.status(500).json({ mensaje: 'Error al buscar autor', error })
    }
})

module.exports = router
