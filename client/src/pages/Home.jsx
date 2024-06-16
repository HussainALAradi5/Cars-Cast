import CarDetails from '../components/CarDetails'
import Nav from '../components/Nav'
import '../home.css'
import '../App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/cars`)
        setCars(response.data)
      } catch (error) {
        console.error('Error fetching cars:', error)
      }
    }
    getCars()
  }, [])

  return (
    <div className="homePage">
      <h1 className="homeHeader">welcome to our rental car project!</h1>
      <Nav />

      <div className="cars">
        <h2>Pick a Car !</h2>
        <section className="container-grid">
          {cars.map((car) => (
            <Car
              key={car.id}
              id={car.id}
              make={car.make}
              model={car.model}
              year={car.year}
              image={car.image}
              price={car.price}
              onClick={() => handleCarsClick(car.id)}
              //reviewslinkwillbeadded
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
