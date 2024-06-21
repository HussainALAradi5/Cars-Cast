import { useState } from 'react'

const Profile = () => {
  const [pimg, setPimg] = useState()
  function handleImage(e) {
    setPimg(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div>
      <h1>Account Setting</h1>
      <input id="email" type="text" />
      <input id="username" type="text" />
      <input id="password" type="text" />

      <h2>Upload Profile Picture:</h2>
      <input type="file" onChange={handleImage} />
      <img src={pimg} />

      <button type="submit">Update Profile</button>
    </div>
  )
}

export default Profile
