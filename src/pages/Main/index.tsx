import { useContext } from 'react'
import Cards from '@cmp/Cards'
import { SearchContext } from '@lts/DefaultLayout'
import './main.styl'

const Main = () => {
  const { searchQuery } = useContext(SearchContext)

  return (
    <main className='main'>
      <Cards searchRequest={searchQuery} />
    </main>
  )
}

export default Main
