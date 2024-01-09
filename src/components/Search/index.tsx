import { FormEvent, useEffect, useState } from 'react'
import './search.styl'

const Search = ({ onDataChange }: { onDataChange:  (arg: string) => void 

}) => {
  const [data, setData] = useState('')

  useEffect(() => {

    return () => {
      // onDataChange(data)
    }
  }, [data])

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const inp = form.firstElementChild as HTMLInputElement
    // console.log(inp)
    onDataChange(inp.value)
    setData(inp.value)
    localStorage.setItem('search', inp.value)
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
