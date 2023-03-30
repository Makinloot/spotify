import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { spotify } from "../../App"
import { useSpotify } from "../../context/SpotifyContext"

import CollectionHeader from "../../components/collectionHeader/CollectionHeader"
import Header from "../../components/header/Header"
import MusicList from "../../components/musiclist/MusicList"
import Row from "../../components/row/Row"

import './Artist.scss'

const Artist = () => {

  const { currentUser } = useSpotify()
  const { id } = useParams()
  const [artist, setArtist] = useState<SpotifyApi.SingleArtistResponse | null>(null)
  const [topTracks, setTopTracks] = useState<SpotifyApi.TrackObjectFull[] | null>(null)
  const [albums, setAlbums] = useState<SpotifyApi.AlbumObjectSimplified[] | null>(null)
  const [moreSongs, setMoreSongs] = useState<boolean>(false)
  const [relatedArtists, setRelatedArtists] = useState<SpotifyApi.ArtistObjectFull[] | null>(null)

  useEffect(() => {
    if(id){
      spotify.getArtist(id)
        .then(artist => setArtist(artist))
        .catch(err => console.log(err))
      
      spotify.getArtistAlbums(id).then(albums => setAlbums(albums.items))
      spotify.getArtistTopTracks(id, "US").then(tracks => setTopTracks(tracks.tracks))
      spotify.getArtistRelatedArtists(id).then(relatedArtists => setRelatedArtists(relatedArtists.artists))
    }
  }, [id])

  if(artist) {
    const { images, name, followers } = artist;
    
    return (
      <div className="artist">
        <Header username={currentUser.display_name} userImg={currentUser.images[0].url} />
        <CollectionHeader
          image={images[0].url}
          name={name}
          type="artist"
          followers={followers.total}
        />
        <div className={moreSongs ? "artist-item active" : "artist-item"}>
          <div className="artist-item-title-container flex-row">
            <h3>random songs</h3>
            <span onClick={() => setMoreSongs(!moreSongs)}>show more</span>
          </div>
          <MusicList topTracks={topTracks} />
        </div>
        {albums && <Row albumObjSimplified={albums.slice(0, 7)} title="discography" url="#" /> }
        {relatedArtists && <Row artists={relatedArtists} title="fans also like" />}
      </div>
    )
  }

  return null
}

export default Artist