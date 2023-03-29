import Card from "../card/Card";

const ArtistsRows: React.FC<{
  artists: SpotifyApi.ArtistObjectFull[];
}> = ({ artists }): any => {
  
  if (artists) {
    return artists.map((artist) => (
      <Card
        key={artist.id}
        title={artist.name}
        undertext={artist.type}
        img={artist.images[0].url}
        radius
      />
    ));
  }

  return null;
};

export default ArtistsRows;
