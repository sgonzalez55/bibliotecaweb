const mongoose = require('mongoose')


const autores = new mongoose.Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    FecPub: { type: Date, required: true },
    Premios: { type: String, required: true },
    FecNac: { type: Date, required: true },
    FecFall: { type: Date, required: true }
})

module.exports = mongoose.model('autores',autores)