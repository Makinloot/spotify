import Card from "../card/Card";

const LikedSongsRow: React.FC<{
  likedSongs: SpotifyApi.UsersSavedTracksResponse;
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}> = ({ likedSongs, playlists }) => {
  
  if (playlists && likedSongs) {
    const playlistsCards = playlists.map((playlist) => (
      <Card
        key={playlist.id}
        title={playlist.name}
        undertext={`By ${playlist.owner.display_name}`}
        img={playlist.images[0] && playlist.images[0].url}
      />
    ));

    return (
      <>
        <div className="liked">
          <Card
            title="liked songs"
            undertext={`${likedSongs.total} liked songs`}
            songs={likedSongs.items.map((song) => song.track.name).join(" • ")}
          />
        </div>
        {playlistsCards}
      </>
    );
  }

  return null;
};

export default LikedSongsRow;
