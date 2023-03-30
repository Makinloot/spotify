import { Link } from "react-router-dom";
import SavedTrackObj from "./SavedTrackObj";
import ArtistObj from "./ArtistObj";
import TrackObj from "./TrackObj";
import AlbumObj from "./AlbumObj";

import "./Row.scss";

const Row: React.FC<{
  title?: string;
  artists?: SpotifyApi.ArtistObjectFull[] | null;
  songs?: SpotifyApi.TrackObjectFull[] | null;
  playlists?: SpotifyApi.PlaylistObjectSimplified[] | null;
  likedSongs?: SpotifyApi.UsersSavedTracksResponse | null;
  albums?: SpotifyApi.SavedAlbumObject[] | null;
  trackObjSimplified?: SpotifyApi.TrackObjectSimplified[] | null;
  nowrap?: boolean;
  albumObjSimplified?: SpotifyApi.AlbumObjectSimplified[];
  url?: string;
}> = ({
  songs,
  title,
  artists,
  playlists,
  likedSongs,
  albums,
  trackObjSimplified,
  albumObjSimplified,
  nowrap,
  url
}) => {
  // return row depending on data type
  function handleRows() {
    if (artists) return <ArtistObj data={artists} />;
    else if (songs) return <TrackObj data={songs} />;
    else if (playlists && likedSongs)
      return <SavedTrackObj data={likedSongs} playlists={playlists} />;
    else if (albums) return <AlbumObj data={albums} />;
    else if (trackObjSimplified)
      return <AlbumObj trackObj={trackObjSimplified} />;
    else if (albumObjSimplified)
      return <AlbumObj albumObjSimplified={albumObjSimplified} />;
  }

  return (
    <div className="row">
      {title && (
        <div className="flex-row" style={{ justifyContent: "space-between" }}>
          <h3 className="row-title">{title}</h3>
          {url && <Link to={url} className='show-more'>show all</Link> }
        </div>
      )}
      <div className={nowrap ? "rows nowrap flex-row" : "rows flex-row"}>
        {handleRows()}
      </div>
    </div>
  );
};

export default Row;
