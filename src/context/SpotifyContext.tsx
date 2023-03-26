import React, { useContext, useState, useEffect, useReducer, ReactNode } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

const Context = React.createContext<any>(null)

export function useSpotify() {
  return useContext(Context)
}

const spotify = new SpotifyWebApi()
const SpotifyContext: React.FC<{children: ReactNode}> = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState<SpotifyApi.CurrentUsersProfileResponse | null>(null)

  // handle current user
  const handleCurrentUser = async () => spotify.getMe().then(user => setCurrentUser(user))

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const values = {
    currentUser
  }
  
  return (
   <Context.Provider value={values}>
    {children}
   </Context.Provider>
  )
}

export default SpotifyContext