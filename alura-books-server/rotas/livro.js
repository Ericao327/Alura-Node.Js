const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send('Olá mundo da Alura!')
})

module.exports = router
