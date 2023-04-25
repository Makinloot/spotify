import SpotifyPlayer from "react-spotify-web-playback";
import { useSpotify } from "../../context/SpotifyContext";
import { useEffect, useState } from "react";
import './Player.scss'
const Player = ({ accessToken }: {accessToken: string}) => {

  const { trackUri } = useSpotify()
  const [play, setPlay] = useState(false)

  // focus play btn
  function focusPlay() {
    const playBtn: HTMLButtonElement | null = document.querySelector('.rswp__toggle')
    if(playBtn){
      playBtn.focus()
    }
  }

  // automatically play tracks when clicking on them
  useEffect(() => {
    setPlay(true)
    window.addEventListener('click', () => {
      focusPlay()
    })

    return () => {
      window.removeEventListener('click', focusPlay)
    }
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
    </div>
  );
};

export default Player;
