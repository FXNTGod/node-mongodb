const express = require('express')
const routes = express.Router()

router.get('/', function (req, res) {
    res.json({})
})

module.exports = router