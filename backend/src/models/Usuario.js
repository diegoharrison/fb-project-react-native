const { Schema, model } = require('mongoose')
const bcryptjs = require('bcryptjs')

const UsuarioSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }    
})

//Criptografando a senha
UsuarioSchema.pre('save', async function(next) {
    const hash = await bcryptjs.hash(this.senha, 10)
    this.senha = hash

    next() 
})

module.exports = model('Usuario', UsuarioSchema)