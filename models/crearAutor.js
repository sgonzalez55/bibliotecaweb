const mongoose = require('mongoose')


const autores = new mongoose.Schema({
    nombre :{type:String,require:true},
    apellidos:{type:String,require:true},
    fecpub:{type: Date, require: true },
    premios:{type: String, require:true},
    fecnac: {type: Date, require: true},
    fecfall:{type: Date, require: true}
})

module.exports = mongoose.model('autores',autores)