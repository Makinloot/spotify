import defaultPlaylistImg from "../../assets/default-playlist.png";
import "./CollectionHeader.scss";
import CollectionDiscography from "./CollectionDiscography";

interface CollectionProps {
  image: string;
  type?: string;
  name: string;
  ownerImage?: string;
  ownerName?: string | undefined;
  totalSongs?: number;
  followers?: string | number;
  following?: number;
  date?: string;
  discography?: boolean;
  uri?: string;
}

const CollectionHeader: React.FC<CollectionProps> = ({
  image,
  type,
  name,
  ownerImage,
  ownerName,
  totalSongs,
  followers,
  following,
  date,
  discography,
  uri
}) => {

  return (
    <div className={discography ? "collection-header discography" : "collection-header"}>
      {image &&
        <div className={type === 'profile' ? "img flex-row round" : "img flex-row"}>
          <img src={image || defaultPlaylistImg} />
        </div>
      }
      <div className="collection-header-details flex-col">
        <div className="type">{type}</div>
        <div className="collection-name">{name}</div>
        {discography && <CollectionDiscography date={date} totalSongs={totalSongs} type={type} uri={uri} />}
        <div className="collection-header-user-details flex-row">
          {ownerImage &&
            <span className="collection-user-img flex-row">
              <img src={ownerImage} />
            </span>
          }
          {ownerName && <span>{ownerName}</span> }
          {date && <span>{` • ${date}`}</span> }
          {/* <span>•</span> */}
          {followers && <span>{` • ${followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Followers`}</span> }
          {following && <span>{` • ${following} Following`}</span> }
          {totalSongs && <span>{` • ${totalSongs} songs`}</span>}
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
