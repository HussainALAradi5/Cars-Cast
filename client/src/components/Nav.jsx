import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <ul className="listNav">
        <li>
          <Link to="/">
            <button>Home</button>
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
          <button>Home</button>
        </Link>
      </li>

      <li>
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
  )

  return (
    <header>
      {' '}
      <div className="nav">
        <h2 className="spell">Spell of the day:</h2>
        <br />
      </div>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
