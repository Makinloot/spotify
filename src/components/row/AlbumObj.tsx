import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'

const AlbumObj: React.FC<{
  data?: SpotifyApi.SavedAlbumObject[]
  trackObj?: SpotifyApi.TrackObjectSimplified[] | any[]
  albumObjSimplified?: SpotifyApi.AlbumObjectSimplified[]
  url?: string
}> = ({ data, trackObj, albumObjSimplified, url }): any => {
  
  if(data) {
    return data.map(album => (
      <Link to={`/album/${album.album.id}`} key={album.album.id}>
        <Card
          title={album.album.name}
          img={album.album.images[0].url}
          undertext={album.album.artists[0].name}
        />
      </Link>
    ))
  } else if (albumObjSimplified) {
    return albumObjSimplified.map(album => (
      <Link to={`/album/${album.id}`} key={album.id}>
        <Card
          title={album.name}
          undertext={album.type}
          img={album.images[0].url}
        />
      </Link>
    ))
  }
  
  return null
}

export default AlbumObj