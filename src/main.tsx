import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import SpotifyContext from './context/SpotifyContext'
import './fonts.css'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <SpotifyContext>
        <App />
      </SpotifyContext>
    </Router>
  </React.StrictMode>,
)
