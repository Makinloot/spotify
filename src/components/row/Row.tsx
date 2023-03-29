import "./Row.scss";

import { Link } from "react-router-dom";
import Card from "../card/Card";

const Row: React.FC<{
  artists?: SpotifyApi.ArtistObjectFull[] | null;
  data?: SpotifyApi.TrackObjectFull[] | null;
  playlists?: SpotifyApi.PlaylistObjectSimplified[] | null;
  likedSongs?: SpotifyApi.UsersSavedTracksResponse | null;
  title: string;
}> = ({ data, title, artists, playlists, likedSongs }) => {
  function handleRows() {
    if (artists) {
      return artists.map((artist) => (
        <Card
          key={artist.id}
          title={artist.name}
          undertext={artist.type}
          img={artist.images[0].url}
          radius
        />
      ));
    } else if (data) {
      const uniqueKey = () => Math.random() * Math.random() * Math.random();
      return data.map((item) => (
        <Card
          key={uniqueKey()}
          title={item.name}
          undertext={item.type}
          img={item.album.images[0].url}
        />
      ));
    } else if (playlists && likedSongs) {
      const playlistsCards = playlists.map((playlist) => (
        <Card
          key={playlist.id}
          title={playlist.name}
          undertext={`By ${playlist.owner.display_name}`}
          img={playlist.images[0] && playlist.images[0].url}
        />
      ));
      return (
        <>
          <div className="liked">
            <Card
              title="liked songs"
              undertext={`${likedSongs.total} liked songs`}
              songs={likedSongs.items.map((song) => song.track.name).join(" • ")}
            />
          </div>
          {playlistsCards}
        </>
      );
    }
  }

  return (
    <div className="row">
      <div className="flex-row" style={{ justifyContent: "space-between" }}>
        <h3 className="row-title">{title}</h3>
        <Link className="show-more" to="#">
          show all
        </Link>
      </div>
      <div className={playlists ? "rows playlists flex-row" : "rows flex-row"}>
        {handleRows()}
      </div>
    </div>
  );
};

export default Row;
