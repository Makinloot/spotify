import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSpotify } from '../../context/SpotifyContext'
import { spotify } from '../../App'

import Header from '../../components/header/Header'
import Row from '../../components/row/Row'

import './Library.scss'

const Library = () => {

  const { type } = useParams()
  const { currentUser } = useSpotify()
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[] | null>(null)
  const [likedTracks, setLikedTracks] = useState<SpotifyApi.UsersSavedTracksResponse | null>(null)

  useEffect(() => {
    spotify.getUserPlaylists(currentUser.id).then(playlists => setPlaylists(playlists.items))
    spotify.getMySavedTracks().then(tracks => setLikedTracks(tracks))
  }, [type])
  
  return (
    <div className="library">
      <Header username={currentUser.display_name} userImg={currentUser.images[0].url} library />
      {type === 'playlist' && <Row playlists={playlists} likedSongs={likedTracks} title="playlists" />}
    </div>
  )
}

export default Library