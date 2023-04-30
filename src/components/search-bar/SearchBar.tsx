import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.scss'


const SearchBar = () => {

  const navigate = useNavigate()

  function submitForm(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form className='search-bar' onSubmit={submitForm}>
      <label className='flex-row'>
        <FontAwesomeIcon icon={faSearch} />
        <input 
          className='search-bar' 
          type="text" 
          placeholder='What do you want to listen to?' 
          required
          onChange={(e) => navigate(`/search/${e.target.value}`)}
        />
        <input type="submit"/>
      </label>
    </form>
  )
}

export default SearchBar