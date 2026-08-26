const express = require('express')
const rotalivro = require('./rotas/livro')

const app = express()

app.use('/livros', rotalivro)

const port = 8000

app.get

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})