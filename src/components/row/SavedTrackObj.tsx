import Card from "../card/Card";

const SavedTrackObj: React.FC<{
  data: SpotifyApi.UsersSavedTracksResponse;
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}> = ({ data, playlists }) => {

  if (playlists && data) {
    const playlistsCards = playlists.map((playlist) => (
      <Card
        key={playlist.id}
        title={playlist.name}
        undertext={`By ${playlist.owner.display_name}`}
        img={playlist.images[0] && playlist.images[0].url}
        url={`/playlist/${playlist.id}`}
        uri={playlist.uri}
      />
    ));

    return (
      <>
        <div className="liked">
          <Card
            title="liked songs"
            undertext={`${data.total} liked songs`}
            songs={data.items.map((song) => song.track.name).join(" • ")}
            url="/liked"
            uri={data.items[0].track.uri}
          />
        </div>
        {playlistsCards}
      </>
    );
  }

  return null;
};

export default SavedTrackObj;
