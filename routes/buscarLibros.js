const express = require('express');
const router = express.Router();
const Libro = require('../models/crearLibro');

router.get('/buscar/:isbn', async (req, res) => {
    try {
    const libros = await Libro.findOne({ isbn: req.params.isbn });

    if (!libros) {
        return res.status(404).json({ mensaje: "No se encontraron libros" });
    }
    res.json(libros);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al buscar tu libro", error });
    }
});

module.exports = router;
