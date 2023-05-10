import { useEffect, useState } from "react";
import { useSpotify } from "../../context/SpotifyContext";
import { spotify } from "../../App";

import Collection from "../../components/collection/Collection";
import CollectionHeader from "../../components/collectionHeader/CollectionHeader";
import Header from "../../components/header/Header";

import likedPlaylistImg from "../../assets/liked-playlist.png";

const Liked = () => {
  const { currentUser } = useSpotify();

  const [data, setData] = useState<SpotifyApi.UsersSavedTracksResponse| null>(null);

  useEffect(() => {
    spotify
      .getMySavedTracks({ limit: 50 })
      .then((track) => setData(track));

      // console.log(data)
  }, []);


  return (
    <div className="liked">
      {currentUser && <Header username={currentUser.display_name} userImg={currentUser.images[0].url} />}
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
