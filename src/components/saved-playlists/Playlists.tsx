import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Link } from "react-router-dom";

const spotify = new SpotifyWebApi();

import "./Playlists.scss";

const Playlists = () => {
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[] | null>(null);

  // fetch user's saved playlists and store in state
  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => setPlaylists(playlists.items));
  }, []);

  return (
    <ul className="playlist">
      {playlists &&
        playlists.map(playlist => {
          return (
            <li key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Playlists;
