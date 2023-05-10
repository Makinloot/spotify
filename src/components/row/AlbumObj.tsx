import Card from "../card/Card";

const AlbumObj: React.FC<{
  data?: SpotifyApi.SavedAlbumObject[];
  trackObj?: SpotifyApi.TrackObjectSimplified[] | any[];
  albumObjSimplified?: SpotifyApi.AlbumObjectSimplified[];
  url?: string;
}> = ({ data, albumObjSimplified }): any => {

  if (data) {
    return data.map((album) => (
      <Card
        key={album.album.id}
        title={album.album.name}
        img={album.album.images[0].url}
        undertext={album.album.artists[0].name}
        url={`/album/${album.album.id}`}
        uri={album.album.uri}
      />
    ));
  } else if (albumObjSimplified) {
    return albumObjSimplified.map((album) => (
      <Card
        key={album.id}
        title={album.name}
        img={album.images[0].url}
        undertext={album.type}
        url={`/album/${album.id}`}
        uri={album.uri}
      />
    ));
  }

  return null;
};

export default AlbumObj;
