import { faHeart, faListDots, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CollectionDiscography: React.FC<{
  type?: string;
  date?: string;
  totalSongs?: number;
}> = ({ type, date, totalSongs }) => {
  return (
    <>
      <div className="collection-discography-details">
        {`${type} • ${date} • ${totalSongs} song`}
      </div>
      <div className="collection-buttons flex-row">
        <div className="play flex-row">
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
