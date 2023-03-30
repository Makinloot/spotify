import { Link } from "react-router-dom";
import Card from "../card/Card";

const TrackObj: React.FC<{
  data: SpotifyApi.TrackObjectFull[];
}> = ({ data }): any => {
  const uniqueKey = () => Math.random() * Math.random() * Math.random();

  if (data) {
    console.log('me var', data)
    const songs = data.map((song) => (
      <Link to={`/album/${song.album.id}`} key={uniqueKey()}>
        <Card
          title={song.name}
          undertext={song.type}
          img={song.album.images[0].url}
        />
      </Link>
    ));
    return songs;
  }

  return null;
};

export default TrackObj;
