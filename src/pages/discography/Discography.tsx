import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { spotify } from "../../App"
import CollectionHeader from "../../components/collectionHeader/CollectionHeader"
import MusicList from "../../components/musiclist/MusicList"

const Discography = () => {

  const { id } = useParams()
  const [albums, setAlbums] = useState<SpotifyApi.AlbumObjectSimplified[] | null>(null)
  const [albumTracks, setAlbumTracks] = useState<SpotifyApi.TrackObjectSimplified[] | any[]>([])

  function handleAlbums(data: any[]) {
    const mapData = data.map((item, i) => {
      const { images, name, type, total_tracks, release_date, id } = item;
      return (
        <div className="discography-item" key={id}>
          <CollectionHeader
            image={images[0].url}
            name={name}
            type={type}
            totalSongs={total_tracks}
            date={release_date.split('-')[0]}
            noBg
          />
          <MusicList trackObjSimplified={albumTracks[i] && albumTracks[i]} />
        </div>
      )}).slice(0, 10)

    return mapData
  }


  useEffect(() => {
    if(id){
      spotify.getArtistAlbums(id, { limit: 50 }).then(albums => {
        setAlbums(albums.items)
        // set every album tracks to state
        albums.items.map(album => {
          spotify.getAlbumTracks(album.id).then(tracks => setAlbumTracks(prev => [...prev, tracks.items]))
        })
      })
    }
  }, [id])

  return (
    <div className="discography">
      {albums && handleAlbums(albums)}
    </div>
  )
}

export default Discography