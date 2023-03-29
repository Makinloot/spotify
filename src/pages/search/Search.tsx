import { useEffect, useState } from 'react'
import { spotify } from '../../App'
import { useSpotify } from '../../context/SpotifyContext'

import Header from '../../components/header/Header'
import BrowseCard from '../../components/browseCard/BrowseCard'

import './Search.scss'

const Search = () => {
  
  const { currentUser } = useSpotify()
  const [categories, setCategories] = useState<SpotifyApi.CategoryObject[] | null>(null)

  function handleCategories() {
    if(categories) {
      const categoriesList = categories.map(category => (
        <BrowseCard key={category.id} title={category.name} img={category.icons[0].url} />
      ))

      return categoriesList
    }
  }

  useEffect(() => {
    spotify.getCategories({ limit: 50 }).then(categories => {
      setCategories(categories.categories.items)
    })
  }, [])

  return (
    <div className="search">
      {currentUser && <Header username={currentUser.display_name} userImg={currentUser.images[0].url} search />}
      <h3 className='search-title'>browse all</h3>
      <div className="search-categories">
        {handleCategories()}
      </div>
    </div>
  )
}

export default Search