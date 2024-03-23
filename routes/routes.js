const express = require('express')
const Produto = require('../models/Produto')
const router = express.Router()

router.get('/', async function (req, res) {
    res.json( await Produto.find())
})

module.exports = router