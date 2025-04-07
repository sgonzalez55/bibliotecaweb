const http = require('express')
const app = http()
const mongoose = require('mongoose')
const cors = require('cors')
const librosruta = require('../routes/buscarLibros')
const autoresruta = require('../routes/buscarAutor')
const todoslibros = require('../routes/allLibros')
const actualizar = require('../routes/modificarLibro')
const eliminar = require('../routes/eliminarLibro')
const crearLibro = require('../routes/crearLibro.js')
const autores = require('../routes/crearAutor.js')
app.use(http.json())//ojo sin esto no reconoce un json NO BORRAR

app.use(cors());

const conexion = 'mongodb://localhost:27017/biblioteca'
mongoose.connect('mongodb://localhost:27017/biblioteca')

    .then(() => console.log('conexion establecida a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));



//rutas
app.use('/libros',librosruta)
app.use('/autores',autoresruta)
app.use('/',todoslibros)
app.use('/libros', actualizar)
app.use('/libros',eliminar)
app.use('/libros',crearLibro)
app.use('/autores',autores)




app.listen(3000)
console.log(`Servidor corriendo en el puerto ${3000}`)
