import React, { useState, useEffect } from 'react'
import { Calendar } from 'react-calendar'

const Booking = ({ car, onBookNow }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const calculateRentalDays = (selectedDate) => {
    if (!selectedDate) return 0

    const today = new Date()
    // Consider only future dates and whole days
    const differenceInDays = Math.floor(
      (selectedDate - today) / (1000 * 60 * 60 * 24)
    )
    return differenceInDays > 0 ? differenceInDays : 0
  }

  const handleBookNow = () => {
    if (!selectedDate) return

    const rentalDays = calculateRentalDays(selectedDate)
    const totalPrice = rentalDays * car.price

    // Pass rental days and total price as arguments to onBookNow function
    onBookNow(rentalDays, totalPrice)
  }

  return (
    <div className="booking-container">
      <h2>
        Book {car.make} {car.model}
      </h2>
      <p>Select your rental date:</p>
      <Calendar
        onChange={handleDateChange}
        selectRange={false}
        minDate={new Date()}
      />
      <p>
        Selected Date:{' '}
        {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
      </p>
      <button onClick={handleBookNow} disabled={!selectedDate}>
        Book Now
      </button>
    </div>
  )
}

export default Booking
