const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o app
const app = express()

// Iniciando o mongoose
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true }
)
requireDir('./src/models')

const Product = mongoose.model('Product')

// Primeira rota
app.get('/', (req, res) => {
  Product.create({
    title: 'NodeJs ',
    description: "Javascript rodando no back",
    url: 'https://node.org'
  })

  return res.send('hello world')
})

app.listen(3001)