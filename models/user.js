const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
  { userName: String, email: String, type: String, isActive: Boolean },
  { timestamps: true }
)
module.exports = mongoose.model('User', userSchema)
