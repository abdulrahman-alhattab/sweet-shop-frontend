import { useContext } from 'react'
import { Link } from 'react-router'
import './NavBar.css'

import { UserContext } from '../../contexts/UserContext'

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)

  const handleSignOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  // The nav bar gets the user from the context which is either
  // {username, sub} if logged in or null if not, and shows
  // set of the correct set of links
  return (
    <nav id="NavBar">
      {user ? (
        <div>
          <p className="navWelcome">Welcome, {user.username}</p>
          <button className="nav-link">
            <Link to="/">Dashboard</Link>
          </button>
          <button className="nav-link">
            {' '}
            <Link to="/DrinkList">halal Drinks</Link>
          </button>
          <button className="nav-link">
            <Link to="/NotDrinkList">Not halal Drinks</Link>
          </button>
          <button className="nav-link">
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </button>
        </div>
      ) : (
        <ul>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/sign-in">Sign In</Link>
          </p>
          <p>
            <Link to="/sign-up">Sign Up</Link>
          </p>
          <p></p>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
