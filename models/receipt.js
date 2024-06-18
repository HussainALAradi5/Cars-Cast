const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receiptSchema = new Schema(
  {
    rid: Number,
    uid: String,
    userName: String,
    cid: Number,
    car: { type: Schema.Types.ObjectId, ref: 'Car' }, // Reference to the Car model
    rentalDetails: { numberOfDays: Number, totalPrice: Number } // number of days, and total price
  },
  { timestamps: true }
)

module.exports = mongoose.model('Receipt', receiptSchema)
