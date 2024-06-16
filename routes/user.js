const express = require('express')
const userCtrl = require('../controllers/user')

const router = express.Router()

router.get('/:id/edit', userCtrl.edit)
router.put('/:id', userCtrl.update)
router.get('/:id', userCtrl.show)
router.delete('/:id', userCtrl.remove)

module.exports = router
