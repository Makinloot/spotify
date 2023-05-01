import { useEffect, useState } from "react";
import { useSpotify } from "../../context/SpotifyContext";
import { useParams } from "react-router-dom";
import { spotify } from "../../App";
import Header from "../../components/header/Header";
import "./Genre.scss";
import Row from "../../components/row/Row";

const Genre = () => {
  const { currentUser } = useSpotify();
  const { id } = useParams()
  const [ genre, setGenre ] = useState<SpotifyApi.SingleCategoryResponse | null>(null)
  const [ results, setResults ] = useState<SpotifyApi.SearchResponse | undefined>(undefined)

  useEffect(() => {
    if(id){
      spotify.getCategory(id).then(category => {
        setGenre(category)
      })
    }
  }, [id])

  useEffect(() => {
    if(genre) {
      spotify.search(`genre:${genre?.name}`, ['artist', 'album', 'track'], { limit: 10 }).then(results => {
        setResults(results)
      })
    }
  }, [genre])

  return (
    <div className="genre">
      {currentUser && (
        <Header
          username={currentUser.display_name}
          userImg={currentUser.images[0].url}
        />
      )}
      <div className="genre-hero flex-row">
        {genre && genre.name}
      </div>
      {results && 
        <>
          <Row artists={results.artists?.items} title="artists" />
          <Row trackObjFull={results.tracks?.items} title="tracks" />
        </>
      }
    </div>
  );
};

export default Genre;
