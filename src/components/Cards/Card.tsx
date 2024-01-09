import { Link } from 'react-router-dom'

export type CardProps = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const Card = (item: CardProps) => {
  return (
    <>
      <div className='card'>
        <h3>{item.Title}</h3>

        <p className='tags'>
          <span className='tag'>{item.Year}</span>
          <span className='tag'>{item.Type}</span>
        </p>
        <img src={item.Poster} alt={item.Title} />
        <Link to={`/details/${item.imdbID}`} className='btn'>
          Details
        </Link>
      </div>
    </>
  )
}

export default Card
