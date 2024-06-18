import '../navStyle.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="spell">Spell of the day:</h2>
      <br />
      <ul className="listNav">
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>

        <li>
          {' '}
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>About us</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
