const express = require('express')
const crypto = require('crypto')
const Users = require('../models/Users')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../auth/index')

const signToken = (_id) => {
    return jwt.sign({ _id }, 'papuchi', {
        expiresIn: 60 * 60 * 24 * 365
    })
}

const router = express.Router()

router.post('/register', (req, res) => {

    const { email, password } = req.body
    crypto.randomBytes(16, (err, salt) => {
        const newSalt = salt.toString('base64')
        crypto.pbkdf2(password, newSalt, 1001, 64, 'sha1', (err, key) => {

            const encryptedPassword = key.toString('base64')
            Users.findOne({ email }).exec()
                .then(user => {
                    if (user) {
                        return res.send('Usuario ya existe')
                    }
                    Users.create({
                        email: email,
                        password: encryptedPassword,
                        salt: newSalt
                    }).then(() => {
                        // res.status(201).send(x)
                        res.send('usuario creado con éxito')
                    })
                })
        })
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    Users.findOne({ email }).exec()
        .then(user => {
            if (!user) {
                return res.send({error: 'Usuario no registrado'})
            }
            crypto.pbkdf2(password, user.salt, 1001, 64, 'sha1', (err, key) => {
                const encryptedPassword = key.toString('base64')
                if (user.password === encryptedPassword) {
                    const token = signToken(user._id)
                    return res.send({ token })
                }
                return res.send({ error: 'contraseña incorrecta'})
            })
        })
})

router.get('/me',isAuthenticated, (req, res)=>{
    return res.status(200).send(req.user)
})

module.exports = router