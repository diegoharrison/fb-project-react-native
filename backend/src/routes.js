const express = require('express')
const EstabController = require('./controllers/EstabController')
const UsuarioController = require('./controllers/UsuarioController')
const AutenticacaoController = require('./controllers/AutenticacaoController')
const ProjectController = require('./controllers/ProjectController')

const routes = express.Router()

routes.post('/estabelecimento', EstabController.store)
routes.post('/usuario', UsuarioController.store)
routes.post('/autenticacao', AutenticacaoController.store)
routes.post('/projects', ProjectController.store)

module.exports = routes

