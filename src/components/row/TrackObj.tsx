import { Link } from "react-router-dom";
import Card from "../card/Card";

const TrackObj: React.FC<{
  trackObjFull?: SpotifyApi.TrackObjectFull[];
  trackObjSimplified?: SpotifyApi.TrackObjectSimplified[] | any[];
  userSavedTracksResponse?: SpotifyApi.UsersSavedTracksResponse
}> = ({ trackObjFull, trackObjSimplified, userSavedTracksResponse }): any => {
  const uniqueKey = () => Math.random() * Math.random() * Math.random();

  if (trackObjFull) {
    const songs = trackObjFull.map((song) => (
      <Link to={`/album/${song.album.id}`} key={uniqueKey()}>
        <Card
          title={song.name}
          undertext={song.type}
          img={song.album.images[0].url}
          uri={song.uri}
        />
      </Link>
    ));
    return songs;
  } else if(trackObjSimplified) {
    console.log('LMAO', trackObjSimplified)
    return trackObjSimplified.map(track => (
      <Link to={`/album/${track.album.id}`} key={uniqueKey()}>
        <Card
          title={track.name}
          undertext={track.type}
          img={track.album.images[0].url}
          uri={track.uri}
        />
      </Link>
    ))
  }

  return null;
};

export default TrackObj;
