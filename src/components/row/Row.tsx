import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import "./Row.scss";

import { Link } from "react-router-dom";
import Card from "../card/Card";

const Row: React.FC<{
  artists?: SpotifyApi.ArtistObjectFull[] | null;
  data?: SpotifyApi.TrackObjectFull[] | null;
  title: string;
}> = ({ data, title, artists }) => {
  
  function handleRows() {
    if(artists) {
      return artists.map(artist => (
        <Card
          key={artist.id}
          title={artist.name}
          undertext={artist.type}
          img={artist.images[0].url}
          radius
        />
      ))
    } else if(data) {
      return data.map(item => (
        <Card
          key={item.id}
          title={item.name}
          undertext={item.type}
          img={item.album.images[0].url}
        />
      ))
    }
  }

  return (
    <div className="row">
      <div className="flex-row" style={{ justifyContent: "space-between" }}>
        <h3 className="row-title">{title}</h3>
        <Link className="show-more" to="#">
          show all
        </Link>
      </div>
      <div className="rows flex-row">{handleRows()}</div>
    </div>
  );
};

export default Row;
