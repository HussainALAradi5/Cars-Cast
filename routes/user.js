const express = require('express')
const userCtrl = require('../controllers/user')
const { upload, stripToken, verifyToken } = require('../middleware/index')

const router = express.Router()

router.get('/:id/edit', userCtrl.edit)
router.put(
  '/profile/:id',
  stripToken,
  verifyToken,
  upload.single('image'),
  userCtrl.update
)
router.get('/:id', userCtrl.show)
router.delete('/:id', userCtrl.remove)
router.post('/register', userCtrl.create)
router.post('/login', userCtrl.login)

module.exports = router
