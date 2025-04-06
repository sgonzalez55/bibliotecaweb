const http = require('express')
const app = http()
const mongoose = require('mongoose')
const librosruta = require('../routes/buscarLibros')
const autoresruta = require('../routes/buscarAutor')
app.use(http.json())//ojo sin esto no reconoce un json NO BORRAR


const conexion = 'mongodb://localhost:27017/biblioteca'
mongoose.connect('mongodb://localhost:27017/biblioteca')

    .then(() => console.log('conexion establecida a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));



//rutas
app.use('/libros',librosruta)
app.use('/autores',autoresruta)


const libros = require('../models/crearLibro.js')
const autores = require('../models/crearAutor.js')


app.post('/libros',async(req,res)=>{
try{
    const nuevoLibro = new libros(req.body)
    await nuevoLibro.save()
    res.status(201).json({mensaje:'Libro creado',libros:nuevoLibro})
}catch(error){
    console.log(error)
    res.status(500).json({mensaje:'Error al crear libro',error:error})
}
})

app.post('/autores',async(req, res)=>{
try{
    const nuevoAutor = new autores(req.body)
    await  nuevoAutor.save()
    res.status(201).json({mensaje:'autor creado con exito',autores:nuevoAutor})
}catch(error){
    console.log(error)
    res.status(200).json({mensaje:'error al crear autor',error:error})
}
})


app.listen(3000)
console.log(`Servidor corriendo en el puerto ${3000}`)
