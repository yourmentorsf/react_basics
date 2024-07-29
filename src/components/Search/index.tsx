import { FormEvent, useContext } from 'react'

import { SearchContext } from '@lts/DefaultLayout'
import './search.styl'

const Search = () => {
  const searchContextValue = useContext(SearchContext) || {
    searchQuery: '',
    setSearchQuery: () => {},
  }
  const { searchQuery, setSearchQuery } = searchContextValue

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const inp = form.firstElementChild as HTMLInputElement

    setSearchQuery(inp.value)
    localStorage.setItem('search', searchQuery || inp.value)
  }

  return (
    <>
      <form method='post' className='search-form' onSubmit={searchHandler}>
        <input type='text' name='search' id='search' placeholder='Search' />
        <button type='submit' className='btn'>
          Search Movies by Title
        </button>
      </form>
    </>
  )
}

export default Search
