const mongoose= require('mongoose')
const url = "mongodb+srv://User55:teste55@ex09-ppw.btvsq.mongodb.net/albuns?retryWrites=true&w=majority"
const opcoes ={
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(url,opcoes)

mongoose.connection.on('connected',function(){
    console.log("Conexão com o banco realizada!")
})



module.exports=mongoose