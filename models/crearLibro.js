const mongoose = require('mongoose');

const libros = new mongoose.Schema({
  isbn: { type: String, required: true },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  fechaEdicion: { type: Date, required: true },
  numeroPaginas: { type: Number, required: true },
  cantidadEjemplares: { type: Number, required: true },
  sinopsis: { type: String, required: true },
  tipoPresentacion: { type: String, required: true },
  tipoLiteratura: { type: String, required: true }
});

module.exports = mongoose.model('Libro', libros);
