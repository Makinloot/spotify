import React, { useContext, useState, useEffect, useReducer, ReactNode } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

const Context = React.createContext(null)
export function useSpotify() {
  return useContext(Context)
}

const spotify = new SpotifyWebApi()
const SpotifyContext: React.FC<{children: ReactNode}> = ({ children, initState, reducer }) => {
  
  // test func
  const handleTest = (value: string) => {
    console.log(value)
  }

  const values = {
    handleTest,
  }
  
  return (
   <Context.Provider value={values}>
    {children}
   </Context.Provider>
  )
}

export default SpotifyContext