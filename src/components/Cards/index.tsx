import { useEffect, useState } from 'react'
import Card from './Card'
import { CardType } from '@tps/index'
import { useApiUrl } from '@hks/index'
import './cards.styl'

function Cards({ searchRequest }: { searchRequest: string }) {
  const apiUrl = useApiUrl()
  const [data, setData] = useState(Array<CardType>())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  console.log('Search request', searchRequest)

  useEffect(() => {
    fetch(`${apiUrl}&s=${searchRequest}`)
      .then(response => response.json())

      .then(data => {
        console.log('Data', data)
        if (data.Error) {
          setError(data.Error)
          setLoading(false)
          return
        }
        setData(data.Search)
        setLoading(false)
      })
      .catch(err => console.log('Error', err))
  }, [apiUrl, searchRequest])

  return (
    <div className='card-block'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : error ? (
        <div className='error'>{error}</div>
      ) : (
        <div className='cards'>
          {data.map((item: CardType) => (
            <Card {...item} key={item.imdbID} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cards
