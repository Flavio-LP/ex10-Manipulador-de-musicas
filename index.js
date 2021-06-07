const express = require('express')
const app=express()
const routes = require('./api/routes')
const PORT = process.env.PORT || 8080

app.use('/api',routes)

app.listen(PORT,function(){
    console.log("Servidor online")
})

app.get('*', function(req, res){
    res.redirect('/api/listar')
})


