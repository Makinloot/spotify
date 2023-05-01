import MusicList from "../../components/musiclist/MusicList";
import Row from "../../components/row/Row";
import "./Results.scss";

const Results: React.FC<{
  searchResults: SpotifyApi.SearchResponse | null;
}> = ({ searchResults }) => {
  return (
    <div className="search-results">
      <div className="results flex-row">
        <div className="results-top">
          <h5>top result</h5>
          <div className="wrapper">
            <img src={searchResults?.artists?.items[0].images[0].url} />
            <div className="title">{searchResults?.artists?.items[0].name}</div>
            <div className="type">artist</div>
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
