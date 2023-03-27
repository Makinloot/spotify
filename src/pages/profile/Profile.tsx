import { useEffect, useState } from "react";
import { useSpotify } from "../../context/SpotifyContext";
import { spotify } from "../../App";

import CollectionHeader from "../../components/collectionHeader/CollectionHeader";
import Row from "../../components/row/Row";
import MusicList from "../../components/musiclist/MusicList";
import Header from "../../components/header/Header";
import "./Profile.scss";

const Profile = () => {
  const { currentUser } = useSpotify();
  const [following, setFollowing] = useState<SpotifyApi.UsersFollowedArtistsResponse | undefined>();
  const [artists, setArtists] = useState<SpotifyApi.ArtistObjectFull[] | null>(null)
  const [topTracks, setTopTracks] = useState<SpotifyApi.TrackObjectFull[] | null>(null)

  useEffect(() => {
    spotify.getFollowedArtists().then((data) => setFollowing(data));
    spotify.getMyTopArtists().then(artists => setArtists(artists.items))
    spotify.getMyTopTracks().then(tracks => setTopTracks(tracks.items.slice(0, 4)))
  }, [])

  return (
    <div className="profile">
      {currentUser && (
        <>
          <Header username={currentUser.display_name} userImg={currentUser.images[0].url} />      
          <CollectionHeader
            type="profile"
            name={currentUser.display_name}
            followers={currentUser.followers.total}
            following={following && following?.artists.total}
            image={currentUser.images[0].url}
          />
        </>
      )}
      <Row title="top artists this month" artists={artists} />
      <div className="profile-top-tracks">
        <h3>top tracks this month</h3>
        <MusicList topTracks={topTracks} />
      </div>
      <Row title="following" artists={following?.artists.items} />
    </div>
  );
};

export default Profile;
