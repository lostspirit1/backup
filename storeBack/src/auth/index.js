const config= require('../config/config');
const moment = require('moment');
const pass = require('../auth/passIndex');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User')
module.exports = {
signjwt (payload) {
    return jwt.sign(payload, 
        config.jwt.secret
               )
},
payload (usuario) {
    return {
        sub: usuario.id,
        name: usuario.nome,
        email: usuario.email,
        login: usuario.username,
        admin: true,
        iat: Math.floor(moment.now()/1000), // Timestamp de hoje
        exp: moment().add(50, 'minutes').unix() // Validade de 2 dias
    }
}
}