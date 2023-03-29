import { Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar'
import Playlists from '../saved-playlists/Playlists'

import logo from '../../assets/logo.png'
import './Aside.scss'

const Aside = () => {
  return (
    <aside className="aside">
      <Link to="/" className="aside-logo">
        <img src={logo} alt="spotify logo" />
      </Link>
      <Navbar />
      <hr />
      <Playlists />
    </aside>
  )
}

export default Aside