import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import CarDetails from './components/CarDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import Nav from './components/Nav'

const App = () => {
  console.log()
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }
  return (
    <div>
      <BrowserRouter>
        <Nav user={user} handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
