import React from "react";
import Row from "../row/Row";

const ResultsAlbums: React.FC<{
  albums: SpotifyApi.AlbumObjectSimplified[] | undefined;
}> = ({ albums }) => {
  return (
    <div className="search-results">
      <Row albumObjSimplified={albums} nowrap />
    </div>
  );
};

export default ResultsAlbums;
