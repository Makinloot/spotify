import React from 'react'
import Card from '../card/Card'

const AlbumRows: React.FC<{
  albums: SpotifyApi.SavedAlbumObject[]
}> = ({ albums }): any => {
  
  if(albums) {
    return albums.map(album => (
      <Card
        key={album.album.id}
        title={album.album.name}
        img={album.album.images[0].url}
        undertext={album.album.artists[0].name}
      />
    ))
  }
  
  return null
}

export default AlbumRows