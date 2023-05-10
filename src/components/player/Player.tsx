import SpotifyPlayer from "react-spotify-web-playback";
import { useSpotify } from "../../context/SpotifyContext";
import { useEffect, useState } from "react";
import './Player.scss'
import Navbar from "../navbar/Navbar";
const Player = ({ accessToken }: {accessToken: string}) => {

  const { trackUri } = useSpotify()
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(true)
  }, [trackUri])

  return (
    <div className="player">
      <SpotifyPlayer
        token={accessToken}
        callback={state => {
          if(!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
      <div className="player-menu flex-row">
        <Navbar bottom />
      </div>
    </div>
  );
};

export default Player;
