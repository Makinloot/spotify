import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useSpotify } from "../../context/SpotifyContext";

import Collection from "../../components/collection/Collection";
import CollectionHeader from "../../components/collectionHeader/CollectionHeader";

import likedPlaylistImg from "../../assets/liked-playlist.png";

const spotify = new SpotifyWebApi();

const Liked = () => {
  const { currentUser } = useSpotify();

  const [data, setData] = useState<SpotifyApi.UsersSavedTracksResponse| null>(null);

  useEffect(() => {
    spotify
      .getMySavedTracks({ limit: 50 })
      .then((track) => setData(track));
    }, []);


  return (
    <div className="liked">
      <CollectionHeader
        type="playlist"
        name="Liked Songs"
        image={likedPlaylistImg}
        ownerImage={currentUser && currentUser.images[0].url}
        ownerName={currentUser && currentUser.display_name}
        totalSongs={data?.total && data.total}
      />
      <Collection data={data && data.items} />
    </div>
  );
};

export default Liked;
