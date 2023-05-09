import { Link } from "react-router-dom";
import "./BrowseCard.scss";

const colors = [
  "225, 51, 0",
  "115, 88, 255",
  "232, 17, 91",
  "20, 138, 8",
  "188, 89, 0",
  "225, 17, 140",
  "141, 103, 171",
  "83, 122, 161",
];

const BrowseCard: React.FC<{
  title: string;
  img: string;
  id: string;
}> = ({ title, img, id }) => {
  return (
    <Link to={`/genre/${id}`}>
      <div
        className="browse-card"
        style={{backgroundColor: `rgb(${colors[Math.floor(Math.random() * colors.length)]})`}}
      >
        <div className="browse-card-title">{title}</div>
        <img src={img} alt={title} className="browse-card-img" />
      </div>
    </Link>
  );
};

export default BrowseCard;
