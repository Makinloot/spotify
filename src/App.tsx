
import { useEffect, useState} from "react"
import { Routes, Route } from 'react-router-dom'
import { getTokenFromUrl } from "./config/spotify"
import { useSpotify } from "./context/SpotifyContext"
import SpotifyWebApi from "spotify-web-api-js"

// COMPONENTS
import Login from "./pages/login/Login"
import Header from "./components/header/Header"

export const spotify = new SpotifyWebApi()
function App() {

  const [token, setToken] = useState<string>("")
  const [user, setUser] = useState(null)
  const { handleTest, handleCurrentUser } = useSpotify()

  // handleTest('red ravici bat ragitxra aba')

  useEffect(() => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
    }

    // clear browser url
    window.location.hash = ''
  }, [])

  return (
    <div className="app">
      {token ? 
        <>
          <Header />
        </>
        :
        <Login />
      }
    </div>
  )
}

export default App
