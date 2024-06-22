const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
  {
    image: String,
    userName: String,
    email: String,
    type: { type: String, default: 'user' },
    isActive: { type: Boolean, default: true },
    passwordDigest: String
  },
  { timestamps: true }
)
module.exports = mongoose.model('User', userSchema)
