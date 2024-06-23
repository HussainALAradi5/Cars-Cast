import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Receipts = (props) => {
  const { car, rentalDays, totalPrice } = props
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
      <p>Car ID: {car.id}</p>
      <p>Car Model: {car.model}</p>
      <p>Number of Days: {rentalDays}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  )
}
export default Receipts
