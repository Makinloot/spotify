import Card from "../card/Card";

const TrackObj: React.FC<{
  trackObjFull?: SpotifyApi.TrackObjectFull[];
  trackObjSimplified?: SpotifyApi.TrackObjectSimplified[] | any[];
  userSavedTracksResponse?: SpotifyApi.UsersSavedTracksResponse;
}> = ({ trackObjFull, trackObjSimplified, userSavedTracksResponse }): any => {
  const uniqueKey = () => Math.random() * Math.random() * Math.random();

  if (trackObjFull) {
    const songs = trackObjFull.map((song) => (
      <Card
        key={uniqueKey()}
        title={song.name}
        undertext={song.type}
        img={song.album.images[0].url}
        url={`/album/${song.album.id}`}
        uri={song.uri}
      />
    ));
    return songs;
  } else if (trackObjSimplified) {
    return trackObjSimplified.map((track) => (
      <Card
        key={uniqueKey()}
        title={track.name}
        undertext={track.type}
        img={track.album.images[0].url}
        url={`/album/${track.album.id}`}
        uri={track.uri}
      />
    ));
  }

  return null;
};

export default TrackObj;
