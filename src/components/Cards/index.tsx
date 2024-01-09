import { useEffect, useState } from 'react'
import Card, { CardProps } from './Card'
import './cards.styl'

const initState: CardProps[] = [
  {
    Title: 'Title',
    Year: 'Year',
    imdbID: 'imdbID',
    Type: 'Type',
    Poster: 'Poster',
  },
]
const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&`

function Cards({ searchRequest }: { searchRequest: string | null }) {
  const [data, setData] = useState(initState)
  const [loading, setLoading] = useState(true)

  
  
  const getData = () =>
  fetch(`${apiUrl}s=${searchRequest}`)
  .then(response => response.json())

  .then(data => {
    setData(data.Search)
    setLoading(false)
  })
  
  useEffect(() => {
    getData()
  }, [searchRequest])


  return (
    <div className='card-block'>

      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='cards'>
          {data.map((item: CardProps) => (
            <Card {...item} key={item.imdbID} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cards
