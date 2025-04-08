
const express = require('express')
const router = express.Router()
const Libro = require('../models/crearAutor')
router.delete('/:Nombres', async (req, res) => {
    const { Nombres } = req.params
    try {
        const resultado = await Libro.findOneAndDelete({ Nombres })
        if (!resultado) {
            return res.status(404).json({ mensaje: 'autor no encontrado' })
        }
        res.json({ mensaje: 'autor eliminado con éxito' })
    } catch (error) {
        console.error('Error al eliminar auor:', error)
        res.status(500).json({ mensaje: 'Error interno al eliminar el autor' })
    }
})

module.exports = router
