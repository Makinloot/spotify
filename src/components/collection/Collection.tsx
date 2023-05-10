import MusicList from "../musiclist/MusicList";
import "./Collection.scss";

const Collection: React.FC<{
  data: SpotifyApi.SavedTrackObject[] | SpotifyApi.PlaylistTrackObject[] | null;
}> = ({ data }) => {



  return (
    <div className="collection-page">
      <MusicList data={data} />
    </div>
  );
};

export default Collection;
