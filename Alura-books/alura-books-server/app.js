const express = require('express')
const rotalivro = require('./rotas/livro')
const cors = require('cors')

const app = express()

app.use(express.json())  

app.use(cors({origin: '*'}))

app.use('/livros', rotalivro)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})