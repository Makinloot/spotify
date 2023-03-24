import { Link } from 'react-router-dom'
import { loginUrl } from '../../config/spotify'

import logo from '../../assets/logo.png'
import Button from '../../components/button/Button'

import './Login.scss'

export default function Login() {
  return (
    <div className="login flex-col">
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <Link to={loginUrl} className="login-button">
        <Button value='log in with spotify' btn='btn-green' />
      </Link>
    </div>
  )
}