import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Reviews = (props) => {
  const carId = props.carId
  const [reviewValue, setReviewValue] = useState({
    review: ''
  })

  const handleChange = (event) => {
    setReviewValue({
      review: event.target.value
    })
  }
  const handleSubmit = (event) => {
    const token = localStorage.getItem('token')

    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3001/car/${carId}`,
          { review: reviewValue.review, token }
        )
      } catch (err) {
        console.error('Error fetching car details:', err)
      }
    }

    fetchData()
  }
  console.log('props=', carId)

  return (
    <div>
      <form>
        <textarea
          onChange={handleChange}
          name="reviews"
          className="reviews"
          placeholder="Place your review!"
          value={reviewValue.review}
        ></textarea>
        <Link to={`/car/${carId}`}>
          <button className="reviewSubmit" onClick={handleSubmit}>
            submit the review
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Reviews
