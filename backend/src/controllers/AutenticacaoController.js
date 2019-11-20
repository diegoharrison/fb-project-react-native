const Usuario = require('../models/Usuario')
/* const bcrypt = require('bcryptjs') */
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

//Função para gerar token ao cadastrar
function gerarToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

module.exports = {

    async store(req, res) {

        //Autenticação
        
        const { email, senha } = req.body

        const usuario = await Usuario.findOne({ email }).select('+senha')

        /* if (!usuario) {
            return res.status(400).send({ error: 'Usuário não encontrado!'})            
        }

        if (!await bcrypt.compare(senha, usuario.senha)) {
            return  res.status(400).send({ error: 'Senha inválida'})            
        } */

        usuario.senha = undefined


        //Token para autenticação

        res.send({ 
            usuario, 
            token: gerarToken({ id: usuario.id }),
        })
    }

}