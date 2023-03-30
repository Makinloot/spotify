import React, { useContext, useState, useEffect, useReducer, ReactNode } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from '../config/spotify'

const Context = React.createContext<any>(null)

export function useSpotify() {
  return useContext(Context)
}

const spotify = new SpotifyWebApi()
const SpotifyContext: React.FC<{children: ReactNode}> = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState<SpotifyApi.CurrentUsersProfileResponse | null>(null)
  const [token, setToken] = useState<string>("");

  // handle current user
  const handleCurrentUser = async () => spotify.getMe().then(user => setCurrentUser(user))

  useEffect(() => {
    handleCurrentUser()
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }

    // clear browser url
    window.location.hash = "";
  }, [])

  const values = {
    currentUser,
    token,
  }
  
  return (
   <Context.Provider value={values}>
    {children}
   </Context.Provider>
  )
}

export default SpotifyContext