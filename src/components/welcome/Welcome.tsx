import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { spotify } from '../../App'

import Card from '../card/Card'
import './Welcome.scss'

const Welcome = () => {
  
  const [data, setData] = useState<SpotifyApi.TrackObjectFull[] | null>(null)

  function handleWelcomeRows() {
    if(data) {
      const tracks = data.map(track => {
        const { name, album, id } = track

        return (
          <Link to={`/album/${album.id}`}>
            <Card key={id} title={name} img={album.images[0].url} long />
          </Link>
        )
      }).slice(0, 6)

      return tracks
    }
  }

  useEffect(() => {
    spotify.getMyTopTracks().then(tracks => setData(tracks.items))
  }, [])

  return (
    <div className='welcome'>
      <h2 className='welcome-title'>good evening</h2>
      <div className="welcome-rows">
        {handleWelcomeRows()}
      </div>
    </div>
  )
}

export default Welcome