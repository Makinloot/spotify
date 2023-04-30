import { useEffect, useState } from "react";
import { spotify } from "../../App";

import Card from "../card/Card";
import "./Welcome.scss";

const Welcome = () => {
  const [data, setData] = useState<SpotifyApi.TrackObjectFull[] | null>(null);

  const uniqueKey = () => Math.random() * Math.random() * Math.random();

  function handleWelcomeRows() {
    if (data) {
      const tracks = data
        .map((track) => {
          const { name, album } = track;
          return (
            <Card
              key={uniqueKey()}
              title={name}
              img={album.images[0].url}
              url={`/album/${album.id}`}
              uri={track.uri}
              long
            />
          );
        })
        .slice(0, 6);

      return tracks;
    }
  }

  useEffect(() => {
    spotify.getMyTopTracks().then((tracks) => setData(tracks.items));
  }, []);

  return (
    <div className="welcome">
      <h2 className="welcome-title">good evening</h2>
      <div className="welcome-rows">{handleWelcomeRows()}</div>
    </div>
  );
};

export default Welcome;
