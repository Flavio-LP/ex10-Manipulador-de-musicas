const express=require('express')
const router = express.Router()
const Album=require('../models/album')
const Artista=require("../models/artista")

router.use(express.json())

router.get('/listar',async(req,res)=>{
    try{
        let album=await Album.find().populate('artista')
        res.json(album)
    }catch{
        console.error(err.message)
        res.json({error:"Erro ao pesquisar os albuns"})
    }
})

router.get('/buscar/:id',async(req,res)=>{
    try{
        const id=req.params.id
        let album=await Album.findById(id).populate('artista')
        res.json(album)
    }catch{
        console.error(err.message)
        res.json({error:"Erro ao pesquisar album"})
    }
})

router.delete('/deletar/:id',async(req,res)=>{
    const id=req.params.id
    const resultado=await Album.findByIdAndDelete(id)
    res.json(resultado)    
})

router.put('/alterar/:id',async(req,res)=>{
    const id=req.params.id
    const alBody=req.body
    const resultado=await Album.findByIdAndUpdate(id,alBody)
    res.json(resultado)
})

router.post('/adicionar', async (req, res) => {
    try{
    const album = new Album(req.body);
    const resultado=await album.save()
    res.json(resultado)
    }catch{
        console.error(err.message)
        res.status(500).json({error:'Erro ao salvar album'})
    }
    
})



module.exports=router