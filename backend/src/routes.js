const express = require('express')
const EstabController = require('./controllers/EstabController')
const UsuarioController = require('./controllers/UsuarioController')

const routes = express.Router()

routes.post('/estabelecimento', EstabController.store)
routes.post('/usuario', UsuarioController.store)

module.exports = routes

