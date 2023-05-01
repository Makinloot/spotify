import Row from "../row/Row";

const ResultsArtists: React.FC<{
  artists: SpotifyApi.ArtistObjectFull[] | undefined;
}> = ({ artists }) => {
  return (
    <div className="search-results">
      <Row artists={artists} nowrap />
    </div>
  );
};

export default ResultsArtists;
