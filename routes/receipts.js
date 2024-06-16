const express = require('express')
const router = express.Router()
const receiptsCtrl = require("../controllers/receipts")

router.get("/cars/:id/receipts", receiptsCtrl.show)

module.exports = router