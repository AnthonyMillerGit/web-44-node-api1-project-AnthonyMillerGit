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

// post

server.post('/api/users', (req,res) => {
    const newUser = req.body
    User.insert(newUser)
    .then(addUser => {
        if(!newUser.name || !newUser.bio) {
            res.status(400).json({
                message: `provide name and bio`
            })
        } else {
            const createUser = (newUser)
            res.status(201).json(createUser)
        }
    })
    .catch(err => {
        res.status(500).json({
            error: `whelp`,
            message: err.message,
            stack: err.stack
        })
    })
})

// get ID
server.get('/api/users/:id', (req,res) => {
    User.findById(req.params.id)
    .then(foundUser => {
        if (!foundUser) {
            res.status(404).json({
                message: `does not exist`
            })
        } else {
            res.json(foundUser)
        }
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