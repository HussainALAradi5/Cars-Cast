import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../App.css'

const Booking = ({ car, onBookNow }) => {
  const [selectedDates, setSelectedDates] = useState([null, null])

  const handleDateChange = (dates) => {
    setSelectedDates(dates)
  }

  const calculateRentalDays = (selectedDates) => {
    if (!selectedDates || !selectedDates[0] || !selectedDates[1]) return 0
    const [startDate, endDate] = selectedDates
    const differenceInTime = endDate.getTime() - startDate.getTime()
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24))
    return differenceInDays > 0 ? differenceInDays : 0
  }

  const handleBookNow = () => {
    if (!selectedDates || !selectedDates[0] || !selectedDates[1]) return
    const rentalDays = calculateRentalDays(selectedDates)
    const totalPrice = rentalDays * car.price
    onBookNow(rentalDays, totalPrice)
  }

  return (
    <div className="booking-container">
      <h2>
        Book {car.make} {car.model}
      </h2>
      <p>Select your rental date range:</p>
      <Calendar
        onChange={handleDateChange}
        selectRange={true}
        minDate={new Date()}
      />
      <p>
        Selected Date Range:{' '}
        {selectedDates[0] && selectedDates[1]
          ? `${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`
          : 'No date range selected'}
      </p>
      <button
        onClick={handleBookNow}
        disabled={!selectedDates[0] || !selectedDates[1]}
      >
        Book Now
      </button>
    </div>
  )
}

export default Booking
