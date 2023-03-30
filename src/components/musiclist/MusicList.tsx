import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClock } from "@fortawesome/free-solid-svg-icons";
import defaultPlaylistImg from "../../assets/default-playlist.png";

import "./MusicList.scss";
import MusicListItem from "./MusicListItem";

const MusicList: React.FC<{
  header?: boolean;
  data?:
    | SpotifyApi.SavedTrackObject[]
    | SpotifyApi.PlaylistTrackObject[]
    | null;
  topTracks?: SpotifyApi.TrackObjectFull[] | null;
  trackObjSimplified?: SpotifyApi.TrackObjectSimplified[]
  
}> = ({ data, topTracks, header, trackObjSimplified }) => {
  function handleData(data: any[]) {
    const mapData = data.map((item, i) => {
      const { id, album, name, artists, duration_ms } = item.track;
      return (
        <MusicListItem
          key={id}
          index={i}
          img={album.images[0].url}
          name={name}
          artistName={artists[0].name}
          albumName={album.name}
          added_at={item.added_at}
          duration_ms={duration_ms}
        />
      );
    });
    
    return mapData;
  }

  function handleTopTracks(data: SpotifyApi.TrackObjectFull[]) {
    const topTracks = data.map((item, i) => {
      const { id, album, name, artists, duration_ms } = item;
      return (
        <MusicListItem
          key={id}
          index={i}
          img={album.images[0].url}
          albumName={album.name}
          artistName={artists[0].name}
          name={name}
          duration_ms={duration_ms}
        />
      );
    });

    return topTracks;
  }

  function handleTrackObjSimplified(data: SpotifyApi.TrackObjectSimplified[]) {
    const mapData = data.map((item, i) => {
      const { id, name, artists, duration_ms } = item
      return (
        <MusicListItem
          key={id}
          index={i}
          name={name}
          artistName={artists[0].name}
          duration_ms={duration_ms}
        />
      )
    })

    return mapData
  }

  return (
    <>
      <div className={header ? "music-list" : "music-list hidden"}>
        <hr />
        <div className="music-list-headings">
          <span>#</span>
          <span>title</span>
          <span>album</span>
          <span>date added</span>
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
        </div>
        {data && <div className="music-list-wrapper">{handleData(data)}</div>}
        {topTracks && <div className="music-list-wrapper">{handleTopTracks(topTracks)}</div>}
        {trackObjSimplified && <div className="music-list-wrapper">{handleTrackObjSimplified(trackObjSimplified)}</div> }
      </div>
    </>
  );
};

export default MusicList;
