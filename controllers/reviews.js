const Car = require('../models/car')
const middleware = require('../middleware')
async function create(req, res) {
  console.log('req:', req.body)
  const userId = middleware.getUserIdFromToken(req.body.token)
  const review = req.body.review
  console.log('create new review:', review)
  const car = await Car.findOne({ id: req.params.id }).populate('reviews')
  console.log(`car ${car}`)
  car.reviews.push({ uid: userId, review: review })

  try {
    const carSave = await car.save()
  } catch (err) {
    console.log(err)
  }
  res.send(car)
}

module.exports = { create }
