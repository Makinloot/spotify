import { Link } from "react-router-dom";
import Card from "../card/Card";

const ArtistObj: React.FC<{
  data: SpotifyApi.ArtistObjectFull[];
}> = ({ data }): any => {
  
  if (data) {
    return data.map((artist) => (
      <Link to={`/artist/${artist.id}`} key={artist.id}>
        <Card
          title={artist.name}
          undertext={artist.type}
          img={artist.images[0]&& artist.images[0].url}
          radius
        />
      </Link>
    ));
  }

  return null;
};

export default ArtistObj;
