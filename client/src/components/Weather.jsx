import { useEffect, useState } from 'react'
import axios from 'axios'
const Weather = () => {
  const [city, setCity] = useState('Manama') // Make Manama the default since Bahrain is small (just kidding🤣🤣 )
  const [weather, setWeather] = useState({
    location: '',
    temp_c: '',
    condition: ''
  })
  const apiKey = import.meta.env.VITE_WEATHER_APIKEY // Import API key from secret location(yes you know it and smile i can see that 😂)
  const [tempUnit, setTempUnit] = useState('celsius') // The initial unit
  const [errorMessage, setErrorMessage] = useState('') // State for error messages

  const unitConversions = {
    celsius: { label: 'Celsius', factor: 1 },
    fahrenheit: { label: 'Fahrenheit', factor: 9 / 5 + 32 },
    kelvin: { label: 'Kelvin', factor: 273.15 },
    rankine: { label: 'Rankine', factor: (9 / 5) * 273.15 },
    reaumur: { label: 'Reaumur', factor: 4 / 5 }
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(url)
        const data = response.data
        console.log('data:', data)
        setWeather({
          location: data.location.name,
          temp_c: data.current.temp_c,
          condition: data.current.condition.text
        })
        setErrorMessage('')
      } catch (error) {
        console.error('Error fetching weather:', error)
        setErrorMessage('An error occurred fetching weather data.') // user-friendly error message
      }
    }

    fetchWeather()
  }, [city]) // Re-fetch on city change

  const handleTempUnitChange = (event) => {
    setTempUnit(event.target.value)
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const displayedTemp = Math.round(
    weather.temp_c * unitConversions[tempUnit].factor
  )

  return (
    <div className="weather-widget">
      <h2>Weather</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {weather.location && (
        <>
          <p>
            Temperature in {weather.location}: {displayedTemp}
            {unitConversions[tempUnit].label}
          </p>
          <p>Condition: {weather.condition}</p>
          <select value={tempUnit} onChange={handleTempUnitChange}>
            {Object.keys(unitConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unitConversions[unit].label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  )
}

export default Weather
