import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useState } from "react";

const SavedTrackObj: React.FC<{
  data: SpotifyApi.UsersSavedTracksResponse;
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}> = ({ data, playlists }) => {
  
  if (playlists && data) {
    const playlistsCards = playlists.map((playlist) => (
      <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
        <Card
          key={playlist.id}
          title={playlist.name}
          undertext={`By ${playlist.owner.display_name}`}
          img={playlist.images[0] && playlist.images[0].url}
          uri={playlist.uri}
        />
      </Link>
    ));

    return (
      <>
        <Link to="/liked" className="liked">
          <Card
            title="liked songs"
            undertext={`${data.total} liked songs`}
            songs={data.items.map((song) => song.track.name).join(" • ")}
          />
        </Link>
        {playlistsCards}
      </>
    );
  }

  return null;
};

export default SavedTrackObj;
