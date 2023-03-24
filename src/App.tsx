import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getTokenFromUrl } from "./config/spotify";
import { useSpotify } from "./context/SpotifyContext";
import SpotifyWebApi from "spotify-web-api-js";

// COMPONENTS
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";

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
          <Header />
          <Aside />
        </div>
        :
        <Login />
      }
      {/* <div className="app">
        <Header username="shiet" />
        <Aside />
      </div> */}
    </div>
  );
}

export default App;
