const Usuario = require('../models/Usuario')

module.exports = {

    async store(req, res) {

        try {

            /* if (await Usuario.findOne({ email })) 

                return res.status(400).send({ error: 'Email ou usuário já cadastrado!' }); */            

            const usuario = await Usuario.create(req.body)

            usuario.senha = undefined

            return res.json(usuario)

        } catch {

            return res.status(400).send({ error: 'Falha!' });
           
        }
    }
}