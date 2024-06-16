const User = require('../models/user')

// Error handling function (DRY )
const errorsCatch = (err, res) => {
  console.error(err)
  console.log('Error message:', err.message) // Log the error message for debugging
  res.status(500).render('error', { error: 'An error occurred' })
}

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

const update = async (req, res) => {
  try {
    const userId = req.params.id
    const updates = req.body

    const userName = updates.userName
    const email = updates.email
    console.log(`userName:${userName}\nemail:${email}`)
    userName.trim()
    email.trim()

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true
    })

    if (!updatedUser) {
      console.log('User not found or update failed:', userId)
      return res
        .status(400)
        .render('error', { error: 'User not found or update failed' })
    }

    console.log('User updated successfully:', updatedUser)
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

// Soft-delete (deactivates user insted of removing it from the DB)
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id

    const deactivatedUser = await User.findByIdAndUpdate(
      userId,
      { isActive: false },
      { new: true }
    )

    if (!deactivatedUser) {
      console.log('User not found:', userId)
      return res.status(404).render('error', { error: 'User not found' })
    }

    console.log('User deactivated successfully:', deactivatedUser)
  } catch (err) {
    errorsCatch(err, res)
  }
}

module.exports = {
  edit,
  update,
  show,
  remove: deleteUser
}
