const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/lead', (req, res) => {
    const { name } = req.body
    res.render('index', { message: 'Sucesso' })
})

module.exports = router