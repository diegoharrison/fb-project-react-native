const Estab = require('../models/Estabelecimento')

module.exports = {
    
    async store(req, res) {

        try {
            
            const estab = await Estab.create(req.body)
            
            return res.json(estab)

        } catch (err) {
            
            //Callback de erro
            return res.status(400).send({ error: 'Fail' });
            
        }
    }
}