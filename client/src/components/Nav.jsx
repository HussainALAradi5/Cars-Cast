import { Link } from 'react-router-dom'
import Spell from './Spell'
const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <ul className="listNav">
        <li>
          <Link to="/">
            <button>
              <span className="material-symbols-outlined">home</span>Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>About us</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>History</button>
          </Link>
        </li>

        <li>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </li>
      </ul>
    )
  }

  const publicOptions = (
    <ul className="listNav">
      <li>
        <Link to="/">
          <button>
            <span className="material-symbols-outlined">home</span>Home
          </button>
        </Link>
      </li>

      <li>
        <Link to="/login">
          <button>
            <span className="material-symbols-outlined">person</span>Login
          </button>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <button>
            <span className="material-symbols-outlined">person_add</span>
            Register
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button>About us</button>
        </Link>
      </li>
    </ul>
  )

  return (
    <header>
      {' '}
      <div className="nav">
        <Spell />
        <br />
      </div>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
