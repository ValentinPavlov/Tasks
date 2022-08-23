const express = require('express')
const user = require('./user/user.controller')
const app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.json())

app.use('/user',user)

app.use((error,req,res,next) => {
    res.status(500).send(error.message)
})

module.exports = app