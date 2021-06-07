const mongoose=require('../data/')

let artistaSchema=new mongoose.Schema({
    nome: String,
    pais: String,
    inicioAtividade: Number,
    fimAtividade: Number
})

let Artista=mongoose.model('Artista',artistaSchema)

module.exports=Artista