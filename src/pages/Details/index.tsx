import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './details.styl'
import { DetailsType, RatingType } from '@tps/index'
import { useApiUrl } from '@hks/index'

const Details = () => {
  const { id } = useParams()
  const apiUrl = useApiUrl()

  console.log('API URL', apiUrl)
  const [details, setDetails] = useState({} as DetailsType)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${apiUrl}&i=${id}`)
      .then(response => response.json())
      .then(data => {
        setDetails(data)
        setLoading(false)
      })
  }, [apiUrl, id])

  return (
    <article className='description'>
      <NavLink to='/' className='home'>Home</NavLink>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='details'>
          <h2 className='header-2'>{details.Title}</h2>
          <div className='properties'>
            <div className='stats'>
              <p className='tags'>
                <span className='tag'>Year: {details.Year}</span>
                <span className='tag'>Type: {details.Type}</span>
                <span className='tag'>Language: {details.Language}</span>
                <span className='tag'>Country: {details.Country}</span>
              </p>
              <ul className='ratings tags'>
                {details.Ratings?.map((item: RatingType) => (
                  <li className='rating tag' key={item.Source}>
                    <span className='source'>{item.Source}</span>
                    <span className='value'>{item.Value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img src={details.Poster} alt={details.Title} />
          </div>

          <p className='text'>{details.Plot}</p>
        </div>
      )}
    </article>
  )
}

export default Details
