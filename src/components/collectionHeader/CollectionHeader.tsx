import SpotifyWebApi from "spotify-web-api-js";

import defaultPlaylistImg from "../../assets/default-playlist.png";
import "./CollectionHeader.scss";

interface CollectionProps {
  image: string;
  type: string;
  name: string;
  ownerImage: string;
  ownerName: string | undefined;
  totalSongs?: number;
}

const CollectionHeader: React.FC<CollectionProps> = ({
  image,
  type,
  name,
  ownerImage,
  ownerName,
  totalSongs,
}) => {

  return (
    <div className="collection-header">
      <div className="img flex-row">
        <img src={image || defaultPlaylistImg} />
      </div>
      <div className="collection-header-details flex-col">
        <div className="type">{type}</div>
        <div className="collection-name">{name}</div>
        <div className="collection-header-user-details flex-row">
          <span className="collection-user-img flex-row">
            <img src={ownerImage || defaultPlaylistImg} />
          </span>
          <span>{ownerName} </span>
          <span>•</span>
          <span>{totalSongs && totalSongs} songs</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
