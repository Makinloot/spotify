import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useSpotify } from '../../context/SpotifyContext'
import testImg from '../../assets/liked-playlist.png'

import './Card.scss'

const Card: React.FC<{
  img?: string
  title: string
  undertext?: string
  radius?: boolean
  long?: boolean
  songs?: string
  uri?: string
}> = ({ img, title, undertext, radius, long, songs, uri }) => {
  
  const { setTrackUri } = useSpotify()
  
  return (
    <div className={long ? 'card long' : 'card'}>
      <img src={img || testImg} alt="" className={radius ? "card-img round box-shadow" : "card-img box-shadow"} />
      {songs && <div className='card-songs'>{songs}</div> }
      <strong className="card-title">{title}</strong>
      <span className="card-undertext">{undertext}</span>
      <div 
        className="card-hover flex-row box-shadow"
        onClick={() => setTrackUri(uri)}
      >
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  )
}

export default Card