const express = require('express')
const router = express.Router()
const receiptsCtrl = require('../controllers/receipts')

router.get('/receipts/:id', receiptsCtrl.show)

module.exports = router
