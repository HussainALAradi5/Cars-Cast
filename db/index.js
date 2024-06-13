const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false)
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Connection error', error.message)
  }
}
connect()
const db = mongoose.connection
module.exports = db
