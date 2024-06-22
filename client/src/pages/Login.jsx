import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const Login = ({ setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/')
  }

  return (
    <div className="signin">
      <form className="logInForm" onSubmit={handleSubmit}>
        <div className="loginInput">
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
        <div className="loginInput">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
        </div>
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
