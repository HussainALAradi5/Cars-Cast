import '../navStyle.css'
const Nav = () => {
  return (
    <div className="nav">
      <h2 className="spell">Spell of the day:</h2>
      <br />
      <ul className="listNav">
        <li>
          <button>Home</button>
        </li>

        <li>
          {' '}
          <button>Login</button>
        </li>
        <li>
          {' '}
          <button>Register</button>
        </li>
        <li>
          {' '}
          <button>About</button>
        </li>
      </ul>
    </div>
  )
}

export default Nav
