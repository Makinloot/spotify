import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useSpotify } from "./context/SpotifyContext";

// COMPONENTS
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import Liked from "./pages/liked/Liked";
import UserPlaylist from "./pages/user-playlist/UserPlaylist";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import Library from "./pages/library/Library";
import Artist from "./pages/artist/Artist";
import Album from "./pages/album/Album";
import Discography from "./pages/discography/Discography";
import Player from "./components/player/Player";
import Genre from "./pages/genre/Genre";

export const spotify = new SpotifyWebApi();


function App() {
  const { token } = useSpotify()

  // useEffect(() => {
  //   localStorage.setItem('token', token)
  // })

  useEffect(() => {
    
  }, [token])

  return (
    <div className="container">
      {token ? 
      <>
        <div className="app">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/playlist/:id" element={<UserPlaylist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/search/:query/:type" element={<Search />} />
            <Route path="/library/:type" element={<Library />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/artist/:id/discography" element={<Discography />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/genre/:id" element={<Genre />} />
          </Routes>
          <Player accessToken={token} />
        </div>
          <div className="footer" style={{padding: '4rem 0 7rem', textAlign: 'center', color: 'white'}}>
            created by seed
          </div>
      </>
        :
        <Login />
      }
    </div>
  );
}

export default App;
