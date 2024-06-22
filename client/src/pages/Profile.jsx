import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = ({ user }) => {
  let navigate = useNavigate()

  const [img, setImg] = useState()
  function handleImage(e) {
    setImg(URL.createObjectURL(e.target.files[0]))
  }

  return user ? (
    <div>
      <h1>Account Setting</h1>
      <input id="email" type="text" placeholder="Type your New Email" />
      <input id="username" type="text" placeholder="Type your New UserName" />
      <input id="password" type="text" placeholder="Type your New Password" />

      <h2>Upload Profile Picture:</h2>
      <input type="file" onChange={handleImage} />
      <img src={img} />

      <button type="submit">Update Profile</button>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! you must be signed in to do that!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Profile
