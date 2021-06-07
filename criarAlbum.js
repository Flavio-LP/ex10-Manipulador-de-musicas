const Album=require("./api/models/album")

const a=new Album({
    nome: "Nome",
    artista: "Artista",
    ano: "Numero",
    generos: "Vetor",
    faixas: "Vetor",
    lancamento: "Numero"
})

a.save().then(function(){
    console.log("salvo")
})