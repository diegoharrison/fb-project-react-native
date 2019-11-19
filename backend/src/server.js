const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const server = express()    //criada como uma constantes, porque não irá sofrer alterações

mongoose.connect('mongodb+srv://fb_project:fb_project@cluster0-uqnuc.mongodb.net/fb_project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

server.use(express.json())  //informando ao express que as requisições são em json
server.use(routes)          //use serve para usar funções e configurações de outros arquivos.

server.listen(3333)         //utilizando a porta 3333 como padrão do backend.