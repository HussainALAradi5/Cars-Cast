const mongoose = require('mongoose')
const Schema = mongoose.Schema
const daySpellSchema = new Schema(
  { id: String, name: String, description: String },
  { timestamps: true }
)
module.exports = mongoose.model('DaySpell', daySpellSchema)
