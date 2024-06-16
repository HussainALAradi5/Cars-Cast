const Car = require('../models/car')
const User = require('../models/user')
const { Receipt } = require('../models/receipt')

const show = async (req, res) => {
  const receipt = await Receipt.find({})
  console.log('receipt=' + receipt)
  const carId = req.params.id // Use id from request params
  console.log('carId=' + carId)
  const userId = req.params._id

  try {
    const reciept = await Receipt.findById(req.params.id)
    consolg.log(receipt)
    res.render(`reciept/show`, { title: 'Reciepts Details', reciept })
    const car = await Car.findById(carId)
    const user = await User.findById(userId)
    const rentalDetails = await Car.findOne({ id: rentalDetails.id })
    const carDetails = await Car.findOne({ id: carDetails.id })

    if (car && user) {
      const userName = req.params.userName
      const rentalDetails = req.params.rentalDetails

      console.log(userName, rentalDetails)
    }
  } catch (error) {
    console.error('Error fetching car details:', error)
    res.status(500).send('Error fetching car details')
  }
}

module.exports = {
  show
}
