const Artista = require("./api/models/artista")

const a=new Artista({
    nome: "Artista 3",
    pais: "Egito",
    inicioAtividade: 1,
    fimAtividade: 5
})

a.save().then(function(){
    console.log("salvo")
});