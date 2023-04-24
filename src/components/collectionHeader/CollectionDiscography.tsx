import { faHeart, faListDots, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpotify } from "../../context/SpotifyContext";

const CollectionDiscography: React.FC<{
  type?: string;
  date?: string;
  totalSongs?: number;
  uri: string | undefined
}> = ({ type, date, totalSongs, uri }) => {

  const { setTrackUri } = useSpotify()

  return (
    <>
      <div className="collection-discography-details">
        {`${type} • ${date} • ${totalSongs} song`}
      </div>
      <div className="collection-buttons flex-row">
        <div 
          className="play flex-row"
          onClick={() => console.log(setTrackUri(uri))}
        >
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="like flex-row">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="more flex-row">
          <FontAwesomeIcon icon={faListDots} />
        </div>
      </div>
    </>
  );
};

export default CollectionDiscography;
