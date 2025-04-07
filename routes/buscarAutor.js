const express = require('express')
const router = express.Router()
const Autor = require('../models/crearAutor')


router.get('/buscar/:Nombre',async(req, res)=>{
    try{
        const autores = await Autor.findOne({nombre:req.params.nombre})
        if(!autores){
            return res.status(404).json({mensaje:'no se encontro el autor'})
        }
        res.json(autores)
    }catch(error){
        res.status(500).json({mensaje:'errror al buscar autor'})
    }
})

module.exports=router