import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSpotify } from "../../context/SpotifyContext"
import { spotify } from "../../App"
import testImg from '../../assets/liked-playlist.png'
import MusicList from "../../components/musiclist/MusicList"

const Results = () => {

  const { query } = useParams()
  const [searchResults, setSearchResults] = useState<SpotifyApi.SearchResponse | null>(null)

  useEffect(() => {
    if(query){
      spotify.search(query, ['track', "artist", "album", "playlist"]).then(results => {
        setSearchResults(results)
      })
    }
  }, [query])

  return (
    <div className="search-results">

      <ul className="types flex-row">
        <li>all</li>
        <li>albums</li>
        <li>songs</li>
        <li>playlists</li>
        <li>artists</li>
      </ul>

      <div className="results flex-row">
        
        <div className="results-top">
          <h5>top result</h5>
          <div className="wrapper">
            <img src={searchResults?.artists?.items[0].images[0].url} />
            <div className="title">
              {searchResults?.artists?.items[0].name}
            </div>
            <div className="type">artist</div>
          </div>  
        </div>

        <div className="results-songs">
          <h5>songs</h5>
          <MusicList topTracks={searchResults?.tracks?.items.slice(0, 4)} />
        </div>

      </div>
    </div>
  )
}

export default Results