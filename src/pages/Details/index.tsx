import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './details.styl'

type RatingsArray = {
  Source: string
  Value: string
}
type DetailsProps = Record<string, any> & {
  Ratings: RatingsArray[]
}

const initState: DetailsProps = {
  Ratings: [],
}
const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`

const Details = () => {

  const { id } = useParams()
  console.log(id)


  const [details, setDetails] = useState(initState)
  const [loading, setLoading] = useState(true)
  // const getData = () =>
  //   fetch('../src/assets/data.json')
  //     .then(response => response.json())
  //     .then(data => setDetails(data[0]))
  const getData = async () =>
    await fetch(`${apiUrl}i=${id}`)
      .then(response => response.json())
      .then(data => {
        setDetails(data)
        setLoading(false)
      })

  useEffect(() => {
    getData()
  }, [])

  return (
    <article className='description'>
      <h3>Details</h3>

      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='details'>
          <h2 className='header-2'>{details.Title}</h2>
          <p className='tags'>
            <span className='tag'>{details.Year}</span>
            <span className='tag'>{details.Type}</span>
            <span className='tag'>{details.Language}</span>
            <span className='tag'>{details.Country}</span>
          </p>
          <img src={details.Poster} alt={details.Title} />

          <p className='text'>{details.Plot}</p>
          <ul className='ratings'>
            {details.Ratings?.map((item: any) => (
              <li className='rating' key={item.Source}>
                <span className='source'>{item.Source}</span>
                <span className='value'>{item.Value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Details
