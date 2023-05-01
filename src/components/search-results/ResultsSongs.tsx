import MusicList from "../musiclist/MusicList";

const ResultsSongs: React.FC<{
  songs: SpotifyApi.TrackObjectFull[] | undefined;
}> = ({ songs }) => {
  return (
    <div className="search-results">
      <MusicList topTracks={songs} header />
    </div>
  );
};

export default ResultsSongs;
