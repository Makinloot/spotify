import { useEffect, useState } from "react";
import { spotify } from "../../App";
import { useSpotify } from "../../context/SpotifyContext";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import BrowseCard from "../../components/browseCard/BrowseCard";
import Results from "../../components/search-results/Results";
import ResultsSongs from "../../components/search-results/ResultsSongs";
import ResultsAlbums from "../../components/search-results/ResultsAlbums";
import ResultsArtists from "../../components/search-results/ResultsArtists";
import "./Search.scss";

const Search = () => {
  const params = useParams();
  const { currentUser } = useSpotify();
  const [categories, setCategories] = useState<SpotifyApi.CategoryObject[] | null>(null);
  const [searchResults, setSearchResults] = useState<SpotifyApi.SearchResponse | null>(null);

  function handleCategories() {
    if (categories) {
      const genresToExclude = ['equal', 'decades', 'wellness', 'cooking & dining', 'kids & family', 'folk & acoustic', 'travel']
      const categoriesList = categories
        .filter(category => !genresToExclude.includes(category.name.toLocaleLowerCase()))
        .map(filteredList => (
          <BrowseCard
            key={filteredList.id}
            title={filteredList.name}
            img={filteredList.icons[0].url}
            id={filteredList.id}
          />
        ))
      return categoriesList;
    }
  }

  function handleResults() {
    if (params.type === "songs") return <ResultsSongs songs={searchResults?.tracks?.items} />;
    else if (params.type === "albums") return <ResultsAlbums albums={searchResults?.albums?.items} />;
    else if (params.type === "artists") return <ResultsArtists artists={searchResults?.artists?.items} />;
    else if (params.query && params.query.length > 3) return <Results searchResults={searchResults} />;
  }

  useEffect(() => {
    spotify.getCategories({ limit: 50 }).then((categories) => {
      setCategories(categories.categories.items.slice(1, 50));
    });
  }, []);

  useEffect(() => {
    if (params.query) {
      spotify
        .search(params.query, ["track", "artist", "album"])
        .then((results) => {
          setSearchResults(results);
        });
    }
  }, [params.query]);

  return (
    <div className="search">
      {currentUser && (
        <Header
          username={currentUser.display_name}
          userImg={currentUser.images[0].url}
          search
        />
      )}
      {params.query && params.query.length > 3 &&
        <ul className="types flex-row">
          <li>
            <Link to={`/search/${params.query}`}>all</Link>
          </li>
          <li>
            <Link to={`/search/${params.query}/albums`}>albums</Link>
          </li>
          <li>
            <Link to={`/search/${params.query}/artists`}>artists</Link>
          </li>
          <li>
            <Link to={`/search/${params.query}/songs`}>songs</Link>
          </li>
        </ul>
      }
      {handleResults() ||
        <div className="search-initial">
          <h3 className="search-title">browse all</h3>
          <div className="search-categories">{handleCategories()}</div>
        </div>
      }
    </div>
  );
};

export default Search;
