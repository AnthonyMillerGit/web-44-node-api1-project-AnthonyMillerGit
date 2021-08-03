// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()
server.use(express.json())
const User = require('./users/model')
const {json} = require('body-parser')

// get
server.get('/api/users', (req,res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
            error: `no users found`,
            message: err.message,
            stack: err.stack
        })
    })
})

module.exports = server