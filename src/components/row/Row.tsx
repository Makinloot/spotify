import { Link } from "react-router-dom";
import LikedSongsRow from "./LikedSongRow";
import ArtistsRows from "./ArtistRows";
import SongsRows from "./SongRows";
import AlbumRows from "./AlbumRows";

import "./Row.scss";

const Row: React.FC<{
  title: string;
  artists?: SpotifyApi.ArtistObjectFull[] | null;
  songs?: SpotifyApi.TrackObjectFull[] | null;
  playlists?: SpotifyApi.PlaylistObjectSimplified[] | null;
  likedSongs?: SpotifyApi.UsersSavedTracksResponse | null;
  albums?: SpotifyApi.SavedAlbumObject[] | null;
  nowrap?: boolean;
}> = ({ songs, title, artists, playlists, likedSongs, albums, nowrap }) => {
  function handleRows() {
    if (artists) return <ArtistsRows artists={artists} />;
    else if (songs) return <SongsRows data={songs} />;
    else if (playlists && likedSongs) return <LikedSongsRow likedSongs={likedSongs} playlists={playlists} />;
    else if (albums) return <AlbumRows albums={albums} />;
  }

  return (
    <div className="row">
      <div className="flex-row" style={{ justifyContent: "space-between" }}>
        <h3 className="row-title">{title}</h3>
        <Link className="show-more" to="#">
          show all
        </Link>
      </div>
      <div className={nowrap ? "rows nowrap flex-row" : "rows flex-row"}>
        {handleRows()}
      </div>
    </div>
  );
};

export default Row;
