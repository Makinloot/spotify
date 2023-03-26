import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

import testImg from '../../assets/liked-playlist.png'

import './Card.scss'

const Card: React.FC<{
  img: string
  title: string
  undertext?: string
  radius?: boolean
  long?: boolean
}> = ({ img, title, undertext, radius, long }) => {
  return (
    <div className={long ? 'card long' : 'card'}>
      <img src={img || testImg} alt="" className={radius ? "card-img round box-shadow" : "card-img box-shadow"} />
      <strong className="card-title">{title}</strong>
      <span className="card-undertext">{undertext}</span>
      <div className="card-hover flex-row box-shadow">
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  )
}

export default Card