import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faBook, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className='navbar'>
      <li className={location.pathname === '/' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="/" className='flex-row'>
          <FontAwesomeIcon icon={faHouse} />
          <span>home</span>
        </Link>
      </li>
      <li className={location.pathname === '/search' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="/search" className='flex-row'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>search</span>
        </Link>
      </li>
      <li className={location.pathname === '/library' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="#" className='flex-row'>
          <FontAwesomeIcon icon={faBook} />
          <span>library</span>
        </Link>
      </li>
      <li className={location.pathname === '/create-playlist' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="#" className='flex-row'>
          <FontAwesomeIcon icon={faPlus} />
          <span>create playlist</span>
        </Link>
      </li>
      <li className={location.pathname === '/liked' ? 'navbar-item active' : 'navbar-item'}>
        <Link to="/liked" className='flex-row'>
          <FontAwesomeIcon icon={faHeart} />
          <span>liked songs</span>
        </Link>
      </li>
    </nav>
  )
}

export default Navbar