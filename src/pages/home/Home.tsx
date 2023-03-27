import { useEffect, useState } from "react"
import { spotify } from "../../App"
import { useSpotify } from "../../context/SpotifyContext"

import Row from "../../components/row/Row"
import Welcome from "../../components/welcome/Welcome"
import Header from "../../components/header/Header"

const Home = () => {
  const { currentUser } = useSpotify()
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
      {currentUser && <Header username={currentUser.display_name} userImg={currentUser.images[0].url} />}
      <Welcome />
      <Row artists={artists && artists} title="your favourite artists" />
      <Row data={recentlyPlayed && recentlyPlayed} title="recently played" />
    </div>
  )
}

export default Home