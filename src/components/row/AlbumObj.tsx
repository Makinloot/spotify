import React from 'react'
import Card from '../card/Card'

const AlbumObj: React.FC<{
  data?: SpotifyApi.SavedAlbumObject[]
  trackObj?: SpotifyApi.TrackObjectSimplified[] | any[]
  albumObjSimplified?: SpotifyApi.AlbumObjectSimplified[]
}> = ({ data, trackObj, albumObjSimplified }): any => {
  
  if(data) {
    return data.map(album => (
      <Card
        key={album.album.id}
        title={album.album.name}
        img={album.album.images[0].url}
        undertext={album.album.artists[0].name}
      />
    ))
  } else if (trackObj) {
    return trackObj.map(track => (
      <Card
        key={track.id}
        title={track.name}
        undertext={track.type}
        img={track.album.images[0].url}
      />
    ))
  } else if (albumObjSimplified) {
    return albumObjSimplified.map(album => (
      <Card
        key={album.id}
        title={album.name}
        undertext={album.type}
        img={album.images[0].url}
      />
    ))
  }
  
  return null
}

export default AlbumObj