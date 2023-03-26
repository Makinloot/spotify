import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClock } from "@fortawesome/free-solid-svg-icons";
import defaultPlaylistImg from "../../assets/default-playlist.png";

const MusicListItem: React.FC<{
  index: number;
  img: string;
  name: string;
  artistName: string;
  albumName: string;
  added_at?: string;
  duration_ms?: number;
}> = ({
  index,
  img,
  name,
  artistName,
  albumName,
  added_at,
  duration_ms,
}) => {
  // convert date
  function handleDate(date: string) {
    const dateString = date;
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const convertedDate = `${month} ${day}, ${year}`;
    return convertedDate;
  };

  // convert music duration
  function handleDuration(ms: number) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const duration = `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
    return duration;
  };

  return (
    <div className="music-list-item">
      <div className="position flex-row">
        <div>{index + 1}</div>
        <FontAwesomeIcon icon={faPlay} />
      </div>
      <div className="title flex-row">
        <img src={img || defaultPlaylistImg} />
        <div className="name-band flex-col">
          <div>{name}</div>
          <div>{artistName}</div>
        </div>
      </div>
      <div className="album">{albumName}</div>
      {added_at && <div className="added">{handleDate(added_at)}</div>}
      {duration_ms && <div className="duration">{handleDuration(duration_ms)}</div> }
    </div>
  );
};

export default MusicListItem;
