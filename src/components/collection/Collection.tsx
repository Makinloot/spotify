import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";

// components
import Header from "../header/Header";
import MusicList from "../musiclist/MusicList";
import CollectionHeader from "../collectionHeader/CollectionHeader";

import "./Collection.scss";

const Collection: React.FC<{
  data: SpotifyApi.SavedTrackObject[] | SpotifyApi.PlaylistTrackObject[] | null;
}> = ({ data }) => {

  useEffect(() => {
    // console.log(data)
  }, [])

  return (
    <div className="collection-page">
      <div className="collection-icons flex-row">
        <div className="play flex-row">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="like">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <MusicList data={data} />
    </div>
  );
};

export default Collection;
