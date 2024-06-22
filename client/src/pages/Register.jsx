import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    console.log('register:', RegisterUser)
    setFormValues({
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/user/login')
  }

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="registerInput">
          <label htmlFor="userName">Name</label>
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="Enter your name"
            value={formValues.userName}
            required
          />
        </div>
        <div className="registerInput">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>

        <div className="registerInput">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="registerInput">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          SignUp
        </button>
      </form>
    </div>
  )
}

export default Register
