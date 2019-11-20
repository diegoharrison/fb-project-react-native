const express = require('express') 
const authMiddleware = require('../middlewares/auth')

module.exports = {
    async store(req, res) {
         res.send({ ok:true })        
    }
}