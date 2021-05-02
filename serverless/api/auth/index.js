// Middleware: funcion en node que recibe REQ, RES y 
// permite ejecutar el siguiente Middleware

const jwt = require('jsonwebtoken')
const Users = require('../models/Users')

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.sendStatus(403)
    }
    jwt.verify(token, 'papuchi', (err, decoded) => {
        const { _id } = decoded
        Users.findOne({ _id }).exec()
            .then(user => {
                // Chanco del REQ con toda la información de User: _id, correo, password, salt, role y lo guarda en req.user 
                req.user = user
                return next()
            })
    })
}

const hasRoles = roles => (req, res, next) => {
    // Como el nuevo REQ en autenticación obtuvo todos los datos de User y los guardo en user, valido su rol
    if (roles.indexOf(req.user.role) > -1) {
        return next()
    }
    return res.sendStatus(403)
}

module.exports = {
    isAuthenticated,
    hasRoles,
}
