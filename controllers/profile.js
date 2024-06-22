const { User } = require('../models/user')

// Update(Edit a user details using form)
const edit = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)

    if (!user) {
      console.log('User not found:', userId)
      return res.status(404).render('error', { error: 'User not found' })
    }

    console.log('User details for editing:', user)
    res.render(`editUser`, { user })
  } catch (err) {
    errorsCatch(err, res)
  }
}

// Display user profile
const show = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)

    if (!user) {
      console.log('User not found:', userId)
      return res.status(404).render('error', { error: 'User not found' })
    }

    console.log('User profile:', user)
  } catch (err) {
    errorsCatch(err, res)
  }
}

module.exports = {
  edit,
  show
}
