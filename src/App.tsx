import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";

// COMPONENTS
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import Liked from "./pages/liked/Liked";
import UserPlaylist from "./pages/saved-playlists/UserPlaylist";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import Library from "./pages/library/Library";

export const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }

    // clear browser url
    window.location.hash = "";
  }, []);

  return (
    <div className="container">
      {token ? 
        <div className="app">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/playlist/:id" element={<UserPlaylist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library/:type" element={<Library />} />
          </Routes>
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
