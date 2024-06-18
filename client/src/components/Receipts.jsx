import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Receipt = () => {
  const { id } = useParams()
  const [receipt, setReceipt] = useState(null)

  useEffect(() => {
    const fetchReceipt = async () => {
      try {
        const response = await axios.get(`/receipts/${id}`)
        setReceipt(response.data)
      } catch (error) {
        console.error('Error fetching receipt details:', error)
      }
    }

    fetchReceipt()
  }, [id])

  if (!receipt) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Receipt Details</h1>
      <p>Receipt ID: {receipt.rid}</p>
      <p>User ID: {receipt.uid}</p>
      <p>User Name: {receipt.userName}</p>
      <p>Car ID: {receipt.cid}</p>
      <p>Car Model: {receipt.car.model}</p>
      <p>Number of Days: {receipt.rentalDetails.numberOfDays}</p>
      <p>Total Price: {receipt.rentalDetails.totalPrice}</p>
    </div>
  )
}

export default Receipt
