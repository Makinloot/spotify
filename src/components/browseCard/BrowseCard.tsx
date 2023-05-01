import { Link } from 'react-router-dom'
import './BrowseCard.scss'

const BrowseCard: React.FC<{
  title: string
  img: string
  id: string
}> = ({ title, img, id }) => {
  return (
    <Link to={`/genre/${id}`}>
      <div className="browse-card">
        <div className="browse-card-title">{title}</div>
        <img src={img} alt={title} className="browse-card-img" />
      </div>
    </Link>
  )
}

export default BrowseCard