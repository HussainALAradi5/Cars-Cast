const axios = require('axios')
const Car = require('../models/car')
const url = 'https://freetestapi.com/api/v1/cars'
const Review = require('../models/review')
const car = require('../models/car')
const index = async (req, res) => {
  try {
    const response = await axios.get(url)
    const carsData = response.data
    const cars = carsData.map((car) => ({
      id: car.id,
      make: car.make,
      model: car.model,
      year: car.year,
      color: car.color,
      mileage: car.mileage,
      price: car.price / 230, // Modify price
      fuelType: car.fuelType,
      transmission: car.transmission,
      engine: car.engine,
      horsePower: car.horsePower,
      image: car.image,
      reviews: []
    }))
    const dbCars = (await Car.find({})) || []

    const filterdCars = cars.filter(
      (car) => !dbCars.some((dbCar) => dbCar.id == car.id)
    )
    const savedCars = await Car.insertMany(filterdCars)

    console.log(`Saved ${savedCars.length} cars to database`)
    console.log('Saved cars details:', savedCars)
    res.status(200).send(dbCars)
  } catch (error) {
    console.error('Error fetching or saving cars:', error)
    res.status(500).send('Error fetching or saving cars')
  }
}

const show = async (req, res) => {
  const carId = req.params.id // Use id from request params

  try {
    const car = await Car.findOne({ id: carId }).populate('reviews')
    if (!car) {
      return res.status(404).send('Car not found')
    }

    console.log(car)
    return res.status(200).send(car)
  } catch (error) {
    console.error('Error fetching car details:', error)
    res.status(500).send('Error fetching car details')
  }
}
const search = async (req, res) => {
  const searchQuery = req.params.query
  console.log('searchQuery', searchQuery)
  try {
    const car = await Car.find({
      $or: [
        { model: { $regex: searchQuery, $options: 'i' } },
        { make: { $regex: searchQuery, $options: 'i' } }
      ]
    })
    if (!car) {
      return res.status(404).send('Car not found')
    }

    return res.status(200).send(car)
  } catch (error) {
    console.error('Error fetching car details:', error)
    res.status(500).send('Error fetching car details')
  }
}
const remove = async (req, res) => {
  const carId = req.params.id // pull the id from params

  try {
    const deletedCar = await Car.findOneAndDelete({ id: carId })

    if (!deletedCar) {
      return res.status(404).send('Car not found')
    }

    console.log(`Car deleted successfully: ${deletedCar._id}`)
    return res.status(200).send(car)
  } catch (error) {
    console.error('Error deleting car:', error)
    res.status(500).send('Error deleting car')
  }
}

const add = async (req, res) => {
  try {
    const newCarData = req.body

    const existingCar = await Car.findOne({ id: newCarData.id }) //we check to avoid adding cars with same ID

    if (existingCar) {
      return res.status(409).send('Car with this ID already exists')
    }

    const newCar = new Car(newCarData)
    const savedCar = await newCar.save()

    console.log(`Car added successfully: ${savedCar._id}`)
    return res.status(201).send('car have been added')
  } catch (error) {
    console.error('Error adding car:', error)
    res.status(500).send('Error adding car')
  }
}

module.exports = {
  index,
  show,
  remove,
  new: add,
  search
}
