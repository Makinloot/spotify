import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClock } from "@fortawesome/free-solid-svg-icons";
import defaultPlaylistImg from "../../assets/default-playlist.png";

import "./MusicList.scss";

const MusicList = ({ data, header }: { data: SpotifyApi.SavedTrackObject[] | null, header?: boolean }) => {

  // convert date
  const handleDate = (date: string) => {
    const dateString = date;
    const dateObj = new Date(dateString)
    const year = dateObj.getFullYear()
    const month = dateObj.toLocaleString('default', { month: 'short'})
    const day = dateObj.getDate()
    const convertedDate = `${month} ${day}, ${year}`
    return convertedDate
  }

  // convert music duration
  const handleDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const duration = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    return duration
  }

  const handleData = (data: any[]) => {
    const mapData = data.map((item, i) => {
      const { track } = item;
      return (
        <div className="music-list-item" key={track.id}>
          <div className="position flex-row">
            <div>{i + 1}</div>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="title flex-row">
            <img src={track.album.images[0].url || defaultPlaylistImg} />
            <div className="name-band flex-col">
              <div>{track.name}</div>
              <div>{track.artists[0].name}</div>
            </div>
          </div>
          <div className="album">{track.album.name}</div>
          <div className="added">{handleDate(item.added_at)}</div>
          <div className="duration">{handleDuration(track.duration_ms)}</div>
        </div>
      );
    });
    return mapData;
  };

  return (
    <>
      <div className={header ? "music-list" : "music-list hidden"}>
        <hr />
        <div className="music-list-headings">
          <span>#</span>
          <span>title</span>
          <span>album</span>
          <span>date added</span>
          <span><FontAwesomeIcon icon={faClock} /></span>
        </div>
        <div className="music-list-wrapper">
          {data && handleData(data)}
        </div>
      </div>
    </>
  );
};

export default MusicList;
