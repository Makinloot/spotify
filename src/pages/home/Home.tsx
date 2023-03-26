import { useEffect, useState } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import { useSpotify } from "../../context/SpotifyContext"

import Row from "../../components/row/Row"

const spotify = new SpotifyWebApi()
const Home = () => {
  const [ artists, setArtists ] = useState<SpotifyApi.ArtistObjectFull[] | null>(null)
  const [recentlyPlayed, setRecentlyPlayed] = useState<SpotifyApi.TrackObjectFull[] | null>(null)

  useEffect(() => {
    spotify.getMyTopArtists().then(artists => {
      setArtists(artists.items)
    })
    spotify.getMyRecentlyPlayedTracks().then(tracks => {
      const tracksArr: any[] = tracks.items.map(track => track.track)
      setRecentlyPlayed(tracksArr)
    })
    // TODO: get seeds for rec
    // spotify.getRecommendations({seed_artists: ['4NHQUGzhtTLFvgF5SZesLK']}).then(rec => console.log(rec))
  }, [])

  return (
    <div className="home">
      <Row artists={artists && artists} title="your favourite artists" />
      <Row data={recentlyPlayed && recentlyPlayed} title="recently played" />
    </div>
  )
}

export default Home