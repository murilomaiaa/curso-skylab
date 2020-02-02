const express = require('express')
const mongoose = require('mongoose')

// Iniciando o app
const app = express()

// Iniciando o mongoose
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Primeira rota
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3001)