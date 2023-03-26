import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { spotify } from "../../App";

import Collection from "../../components/collection/Collection";
import CollectionHeader from "../../components/collectionHeader/CollectionHeader";

import "./UserPlaylist.scss";

const UserPlaylist = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] =
    useState<SpotifyApi.SinglePlaylistResponse | null>(null);
  const [ownerImage, setOwnerImage] = useState<string>("");

  useEffect(() => {
    if (id) {
      spotify.getPlaylist(id).then((playlist) => {
        // console.log(playlist);
        setPlaylist(playlist);
      });
    }
  }, [id]);

  // get playlist owner image
  function handleOwnerImage(id: string) {
    spotify.getUser(id).then((user) => {
      if (user.images) setOwnerImage(user.images[0].url);
    });
  }

  function handleUserPlaylist() {
    if (playlist) {
      const { name, images, owner, type, tracks } = playlist;
      handleOwnerImage(owner.id);
      return (
        <CollectionHeader
          name={name}
          image={images[0]?.url}
          ownerName={owner.display_name}
          type={type}
          ownerImage={ownerImage}
          totalSongs={tracks.total}
        />
      );
    }
  }

  return (
    <div className="user-playlist">
      {handleUserPlaylist()}
      <Collection data={playlist && playlist.tracks.items} />
    </div>
  );
};

export default UserPlaylist;
