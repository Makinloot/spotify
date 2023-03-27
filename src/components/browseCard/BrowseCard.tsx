
import './BrowseCard.scss'

const BrowseCard: React.FC<{
  title: string
  img: string
}> = ({ title, img }) => {
  return (
    <div className="browse-card">
      <div className="browse-card-title">{title}</div>
      <img src={img} alt={title} className="browse-card-img" />
    </div>
  )
}

export default BrowseCard