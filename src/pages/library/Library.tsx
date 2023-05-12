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
  const [artists, setArtists] = useState<SpotifyApi.UsersFollowedArtistsResponse | null>(null)
  const [albums, setAlbums] = useState<SpotifyApi.UsersSavedAlbumsResponse | null>(null)

  useEffect(() => {
    spotify.getUserPlaylists(currentUser && currentUser.id).then(playlists => setPlaylists(playlists.items))
    spotify.getMySavedTracks().then(tracks => setLikedTracks(tracks))
    spotify.getFollowedArtists().then(artists => setArtists(artists))
    spotify.getMySavedAlbums().then(albums => setAlbums(albums))
  }, [type])
  
  return (
    <div className="library">
      <Header username={currentUser && currentUser.display_name} userImg={currentUser && currentUser.images[0].url} library active={type} />
      {type === 'playlists' && <Row playlists={playlists} likedSongs={likedTracks} title="playlists" nowrap flex />}
      {type === 'artists' && <Row artists={artists?.artists.items} title='artists' nowrap />}
      {type === 'albums' && <Row albums={albums?.items} title='albums' nowrap /> }
    </div>
  )
}

export default Library