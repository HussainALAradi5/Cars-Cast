import CarDetails from '../components/CarDetails'
import Nav from '../components/Nav'
import '../home.css'
import '../App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [cars, setCars] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/cars`)
        setCars()
      } catch {}
    }
  }, [])

  return (
    <div className="homePage">
      <h1 className="homeHeader">welcome to our rental car project!</h1>
      <Nav />
    </div>
  )
}

export default Home
