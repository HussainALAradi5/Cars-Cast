const Car = require('../models/car')
const User = require('../models/user')
const { Receipt } = require('../models/receipt')

const show = async (req, res) => {
  try {
    const receiptId = req.params.id
    const receipt = await Receipt.findById(receiptId).populate('car')

    if (!receipt) {
      return res.status(404).send('Receipt not found')
    }

    console.log('Receipt:', receipt)

    res.render('receipts/show', { title: 'Receipt Details', receipt })
  } catch (error) {
    console.error('Error fetching receipt details:', error)
    res.status(500).send('Error fetching receipt details')
  }
}

module.exports = {
  show
}
