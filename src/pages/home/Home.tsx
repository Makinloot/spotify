import { useEffect, useState } from "react"
import { spotify } from "../../App"
import { useSpotify } from "../../context/SpotifyContext"
import Row from "../../components/row/Row"
import Welcome from "../../components/welcome/Welcome"
import Header from "../../components/header/Header"
import './Home.scss'

const Home = () => {
  const { currentUser } = useSpotify()
  const [ artists, setArtists ] = useState<SpotifyApi.ArtistObjectFull[] | null>(null)
  const [recentlyPlayed, setRecentlyPlayed] = useState<SpotifyApi.TrackObjectFull[] | null>(null)
  const [seeds, setSeeds] = useState<{seed_tracks: string[]} | null>(null)
  const [recommended, setRecommended] = useState<SpotifyApi.TrackObjectSimplified[] | null>(null)

  useEffect(() => {
    spotify.getMyTopArtists().then(artists => setArtists(artists.items))
    spotify.getMyRecentlyPlayedTracks().then(tracks => {
      const tracksArr: any[] = tracks.items.map(track => track.track)
      const recentlyPlayedTracksSeeds = tracks.items.map(track => track.track.id).slice(0, 5)
      setRecentlyPlayed(tracksArr)
      setSeeds({
        seed_tracks: recentlyPlayedTracksSeeds,
      })
    })
  }, [])

  useEffect(() => {
    if(seeds){
      spotify.getRecommendations(seeds).then(recomendations => setRecommended(recomendations.tracks)).catch(err => console.log(err))
    }
  }, [seeds])

  return (
    <div className="home">
      <Header username={currentUser && currentUser.display_name} userImg={currentUser && currentUser.images[0].url} />
      <Welcome />
      <Row artists={artists && artists} title="your favourite artists" />
      <Row trackObjSimplified={recentlyPlayed && recentlyPlayed} title="recently played" />
      <Row trackObjSimplified={recommended && recommended} title="recommended for today" />
    </div>
  )
}

export default Home