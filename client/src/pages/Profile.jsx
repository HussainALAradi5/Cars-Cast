import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = ({ user, setUser }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    password: '',
    image: null
  })
  const [img, setImg] = useState(null)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setFormValues({ ...formValues, image: e.target.files[0] })
    setImg(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('userName', formValues.userName)
    formData.append('email', formValues.email)
    formData.append('password', formValues.password)
    if (formValues.image) {
      formData.append('image', formValues.image)
    }

    try {
      const response = await axios.put(
        `http://localhost:3001/users/profile/${user._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      setUser(response.data)
      navigate('/')
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return user ? (
    <div className="profile-container">
      <h1>Account Setting</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Type your New Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          id="username"
          name="userName"
          type="text"
          placeholder="Type your New UserName"
          value={formValues.userName}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Type your New Password"
          value={formValues.password}
          onChange={handleChange}
        />

      <input id="email" type="text" placeholder="Type your New Email" />
      <input id="username" type="text" placeholder="Type your New UserName" />
      <input id="password" type="text" placeholder="Type your New Password" />

        <h2>Upload Profile Picture:</h2>
        <input type="file" onChange={handleImage} />
        {img && <img src={img} alt="Profile Preview" />}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! you must be signed in to do that!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Profile
