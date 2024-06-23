import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Receipts from './Receipts'
import Reviews from './Reviews'
import Booking from '../pages/Booking'

const CarDetails = () => {
  const carId = useParams().id
  const [car, setCar] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [showReceipt, setShowReceipt] = useState(false) // Flag to control receipt display
  const [rentalDays, setRentalDays] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const url = `http://localhost:3001/car/${carId}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setCar(response.data)
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
  const pricePerDay = car.price // Pay per day

  const handleRentClick = (days, price) => {
    setRentalDays(days)
    setTotalPrice(price)
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
      {/* Booking component with car details as props */}
      <Booking car={car} onBookNow={handleRentClick} />
      {showReceipt && (
        <Receipts
          car={car}
          rentalDays={rentalDays} // Pass rental days
          totalPrice={totalPrice} // Pass total price
        />
      )}
      <Reviews carId={carId} />
    </div>
  )
}

export default CarDetails
