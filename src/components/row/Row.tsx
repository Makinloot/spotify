import { Link } from "react-router-dom";
import SavedTrackObj from "./SavedTrackObj";
import ArtistObj from "./ArtistObj";
import TrackObj from "./TrackObj";
import AlbumObj from "./AlbumObj";
import "./Row.scss";

const Row: React.FC<{
  title?: string;
  artists?: SpotifyApi.ArtistObjectFull[] | null;
  trackObjFull?: SpotifyApi.TrackObjectFull[] | null;
  playlists?: SpotifyApi.PlaylistObjectSimplified[] | null;
  likedSongs?: SpotifyApi.UsersSavedTracksResponse | null;
  albums?: SpotifyApi.SavedAlbumObject[] | null;
  trackObjSimplified?: SpotifyApi.TrackObjectSimplified[] | null;
  nowrap?: boolean;
  albumObjSimplified?: SpotifyApi.AlbumObjectSimplified[];
  url?: string;
  flex?: boolean
}> = ({
  trackObjFull,
  title,
  artists,
  playlists,
  likedSongs,
  albums,
  trackObjSimplified,
  albumObjSimplified,
  nowrap,
  url,
  flex
}) => {
  // return row depending on data type
  function handleRows() {
    if (artists) return <ArtistObj data={artists} />;
    else if (trackObjFull) return <TrackObj trackObjFull={trackObjFull} />;
    else if (trackObjSimplified)
      return <TrackObj trackObjSimplified={trackObjSimplified} />;
    else if (playlists && likedSongs)
      return <SavedTrackObj data={likedSongs} playlists={playlists} />;
    else if (albums) return <AlbumObj data={albums} />;
    else if (albumObjSimplified)
      return <AlbumObj albumObjSimplified={albumObjSimplified} />;
  }

  return (
    <div className={flex ? 'row flex' : 'row'}>
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
