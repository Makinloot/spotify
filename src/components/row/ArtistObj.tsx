import Card from "../card/Card";

const ArtistObj: React.FC<{
  data: SpotifyApi.ArtistObjectFull[];
}> = ({ data }): any => {

  if (data) {
    return data.map((artist) => (
      <Card
        key={artist.id}
        title={artist.name}
        undertext={artist.type}
        img={artist.images[0] && artist.images[0].url}
        url={`/artist/${artist.id}`}
        uri={artist.uri}
        radius
      />
    ));
  }

  return null;
};

export default ArtistObj;
