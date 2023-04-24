import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { spotify } from "../../App";
import { useSpotify } from "../../context/SpotifyContext";

import CollectionHeader from "../../components/collectionHeader/CollectionHeader";
import Header from "../../components/header/Header";
import MusicList from "../../components/musiclist/MusicList";
import Row from "../../components/row/Row";

const Album = () => {
  const { id } = useParams();
  const { currentUser } = useSpotify();
  const [album, setAlbum] = useState<SpotifyApi.SingleAlbumResponse | null>(null);
  const [artist, setArtist] = useState<string | null>(null)
  const [artistAlbums, setArtistAlbums] = useState<SpotifyApi.AlbumObjectSimplified[] | null>(null)

  useEffect(() => {
    if (id) {
      spotify.getAlbum(id).then((album) => {
        setAlbum(album)
        setArtist(album.artists[0].id)
      });
      window.scrollTo(0, 0)
    }
  }, [id]);

  useEffect(() => {
    if(artist) spotify.getArtistAlbums(artist).then(albums => setArtistAlbums(albums.items))
  }, [artist])

  if (album) {
    const { images, name, type, artists, release_date, tracks } = album
    return (
      <div className="album" style={{paddingBottom: '4rem'}}>
        <Header
          username={currentUser.display_name}
          userImg={currentUser.images[0].url}
        />
        <CollectionHeader
          image={images[0].url}
          name={name}
          type={type}
          ownerName={artists[0].name}
          date={release_date}
          totalSongs={tracks.total}
        />
        <MusicList trackObjSimplified={album.tracks.items} />
        {artistAlbums &&
          <Row
            albumObjSimplified={artistAlbums}
            title={`more by ${artists[0].name}`}
            url={`/artist/${artists[0].id}/discography`}
          />
        }
      </div>
    );
  }

  return null
};

export default Album;
