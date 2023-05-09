import MusicList from "../../components/musiclist/MusicList";
import Row from "../../components/row/Row";
import Card from "../card/Card";
import "./Results.scss";

const Results: React.FC<{
  searchResults: SpotifyApi.SearchResponse | null;
}> = ({ searchResults }) => {
  return (
    <div className="search-results">
      <div className="results flex-row">
        <div className="results-top">
          <h5>top results</h5>
          <div className="wrapper">
            <Card
              img={searchResults?.artists?.items[0].images[0].url}
              title={searchResults?.artists?.items[0].name}
              undertext={searchResults?.artists?.items[0].type}
              uri={searchResults?.artists?.items[0].uri}
              url={`/artist/${searchResults?.artists?.items[0].id}`}
            />
          </div>
        </div>

        <div className="results-songs">
          <h5>songs</h5>
          <MusicList topTracks={searchResults?.tracks?.items.slice(0, 4)} />
        </div>
      </div>

      <div className="search-artists">
        <Row artists={searchResults?.artists?.items} />
      </div>

      <div className="search-albums">
        <Row albumObjSimplified={searchResults?.albums?.items} />
      </div>
    </div>
  );
};

export default Results;
