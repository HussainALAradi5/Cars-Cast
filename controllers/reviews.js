const Car = require('../models/car')

async function create(req, res) {
  console.log('create new review')
  const car = await Car.findOne({ id: req.params.id }).populate('reviews')
  console.log(`car ${JSON.stringify(car)}`)
  car.reviews.push(req.body)
  try {
    await car.save()
  } catch (err) {
    console.log(err)
  }
  res.send(car)
}

module.exports = { create }
