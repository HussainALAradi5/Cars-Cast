const express = require('express')
const router = express.Router()
const carCtrl = require('../controllers/car')
const reviewCtrl = require('../controllers/reviews')
router.get('/', carCtrl.index)
router.get('/car/new', carCtrl.new)
router.post('/car/new', carCtrl.new)
router.get('/car/:id', carCtrl.show) //show car by id
router.post('/car/:id', reviewCtrl.create)
router.post('/car/remove', carCtrl.remove)
router.delete('/car/:id', carCtrl.remove)
module.exports = router
