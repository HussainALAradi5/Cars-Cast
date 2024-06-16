/* it contain the car details:
h1: make-model-year
image
li:
color
transmission
engine
mileage
price
border bottom
car reviews
*/ import { useState, useEffect } from 'react'
import axios from 'axios'

const CarDetails = ({ carId }) => {
  const [car, setCar] = useState('')
  const [isLoading, setIsLoading] = useState(true) //to display some freindly loading screen for the user in order to achive UX (^_^)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/car/${carId}`)
        setCar(response.data)
      } catch (err) {
        console.error('Error fetching car details:', err)
        setError(err)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [carId])

  if (isLoading) {
    return <p>Loading car details...</p>
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
  const price = car.price
  const reviews = car.reviews
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
        <li>Price: ${price.toFixed(2)}</li>
        {/* JS built in function to fix the decimals and then convert the whole number into string (^_^) */}
      </ul>
      <hr />
      <h2>Car Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              {review.uid} review:{review.review}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  )
}

export default CarDetails
