const mongoose=require('../data/')

let albummSchema=new mongoose.Schema({
    nome: String,
    artista:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Artista'
    },
    ano: Number,
    generos: Array,
    faixas: Array,
    lancamento: Number
})

let Album=mongoose.model('Album', albummSchema)

module.exports= Album