import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Receipts from './Receipts'

const CarDetails = () => {
  const carId = useParams().id
  console.log('carID frontEnd=', carId)
  const [car, setCar] = useState('')
  const [isLoading, setIsLoading] = useState(true) //to display some freindly loading screen for the user in order to achive UX (^_^)
  const [error, setError] = useState('')

  // State variables for rental details
  const [rentalDays, setRentalDays] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [showReceipt, setShowReceipt] = useState(false) // Flag to control receipt display

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/car/${carId}`)
        setCar(response.data)
        console.log('response.data=', response.data)
      } catch (err) {
        console.error('Error fetching car details:', err)
        setError(err)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <p className="loadingCarDetails">Loading car details...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (!car) {
    return <p>Car not found.</p>
  }

  const make = car.make
  const model = car.model
  const year = car.year
  const image = car.image
  const color = car.color
  const transmission = car.transmission
  const engine = car.engine
  const mileage = car.mileage
  const pricePerDay = car.price // pay per day

  const handleRentalDaysChange = (event) => {
    const days = parseInt(event.target.value)
    setRentalDays(days)
    setTotalPrice(days * pricePerDay)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setShowReceipt(true)
  }

  const formattedHorsePower = car.horsePower
    ? `${car.horsePower} HorsePower`
    : 'N/A'

  return (
    <div>
      <h1 className="carHeader">{`${make}-${model}-(${year})`}</h1>
      <img src={image} alt={`${make}-${model}-(${year})`} />
      <ul>
        <li>Color: {color}</li>
        <li>Transmission: {transmission}</li>
        <li>Engine: {engine}</li>
        <li>Mileage: {mileage} miles</li>
        <li>Price per Day: ${pricePerDay.toFixed(2)}</li>
      </ul>

      {/* Form to enter rental days */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="rentalDays">Number of rental days: </label>
        <input
          type="number"
          id="rentalDays"
          min="1"
          value={rentalDays}
          onChange={handleRentalDaysChange}
        />
        <button type="submit">Rent Now</button>
      </form>

      {showReceipt && (
        <Receipts
          car={car}
          rentalDays={rentalDays}
          totalPrice={pricePerDay * rentalDays}
        />
      )}
    </div>
  )
}

export default CarDetails
