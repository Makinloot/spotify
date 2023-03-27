import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.scss'

const SearchBar = () => {
  return (
    <form className='search-bar'>
      <label className='flex-row'>
        <FontAwesomeIcon icon={faSearch} />
        <input className='search-bar' type="text" placeholder='What do you want to listen to?' required />
        <input type="submit"/>
      </label>
    </form>
  )
}

export default SearchBar