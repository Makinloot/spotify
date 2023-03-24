import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faBook, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <li className='navbar-item active'>
        <Link to="/" className='flex-row'>
          <FontAwesomeIcon icon={faHouse} />
          <span>home</span>
        </Link>
      </li>
      <li className='navbar-item flex-row'>
        <Link to="#" className='flex-row'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>search</span>
        </Link>
      </li>
      <li className='navbar-item flex-row'>
        <Link to="#" className='flex-row'>
          <FontAwesomeIcon icon={faBook} />
          <span>library</span>
        </Link>
      </li>
      <li className='navbar-item flex-row'>
        <Link to="#" className='flex-row'>
          <FontAwesomeIcon icon={faPlus} />
          <span>create playlist</span>
        </Link>
      </li>
      <li className='navbar-item flex-row'>
        <Link to="/liked" className='flex-row'>
          <FontAwesomeIcon icon={faHeart} />
          <span>liked songs</span>
        </Link>
      </li>
    </nav>
  )
}

export default Navbar