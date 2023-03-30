import Card from "../card/Card";

const TrackObj: React.FC<{
  data: SpotifyApi.TrackObjectFull[];
}> = ({ data }): any => {
  const uniqueKey = () => Math.random() * Math.random() * Math.random();

  if (data) {
    const songs = data.map((song) => (
      <Card
        key={uniqueKey()}
        title={song.name}
        undertext={song.type}
        img={song.album.images[0].url}
      />
    ));
    return songs;
  }

  return null;
};

export default TrackObj;
