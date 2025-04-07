// En routes/libros.js o donde tengas tus rutas de libros
const express = require('express');
const router = express.Router();
const Libro = require('../models/crearLibro');

// Ruta para eliminar libro por ISBN
router.delete('/:isbn', async (req, res) => {
    const { isbn } = req.params;
    try {
        const resultado = await Libro.findOneAndDelete({ isbn });
        if (!resultado) {
            return res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
        res.json({ mensaje: 'Libro eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar libro:', error);
        res.status(500).json({ mensaje: 'Error interno al eliminar el libro' });
    }
});

module.exports = router;
