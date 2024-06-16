import CarDetails from '../components/CarDetails'
import Nav from '../components/Nav'
import '../home.css'
import '../App.css'
import { useEffect, useState } from 'react'
const Home = () => {
  const [cars, setCars] = useState([])

  return (
    <div className="homePage">
      <h1 className="homeHeader">welcome to our rental car project!</h1>
      <Nav />
    </div>
  )
}

export default Home
