import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { spotify } from "../../App";
import { Link } from "react-router-dom";

import "./Playlists.scss";

const Playlists = () => {
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[] | null>(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>("")

  // fetch user's saved playlists and store in state
  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => setPlaylists(playlists.items));
  }, []);

  // add active class to corresponding links
  useEffect(() => {
    const path = location.pathname.split('/playlist/')[1]
    setActiveLink(path)
  }, [location.pathname])

  return (
    <ul className="playlist">
      {playlists &&
        playlists.map(playlist => {
          return (
            <li key={playlist.id}>
              <Link 
                to={`/playlist/${playlist.id}`}
                className={playlist.id === activeLink ? 'active' : ""}
              >
                {playlist.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Playlists;
