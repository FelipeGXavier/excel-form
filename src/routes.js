const express = require('express')

const router = express.Router()

const insertRow = require('./service')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/lead', async (req, res) => {
    const { name, cpf, email } = req.body
    const value = `${email} ${cpf}`
    const defaultTag = "Lead Novo"
    await insertRow([defaultTag, name, value, defaultTag])
    res.render('index', { message: 'Sucesso' })
})

module.exports = router