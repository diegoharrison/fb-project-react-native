const { Schema, model } = require('mongoose')

const EstabSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    }
})

module.exports = model('Estab', EstabSchema)