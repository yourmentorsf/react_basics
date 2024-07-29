import { Link } from 'react-router-dom'
import { CardType } from '@tps/index'

const Card = (item: CardType) => {
  return (
    <>
      <div className='card'>
        <div className='card__heading'>
          <h3>
            <Link to={`/details/${item.imdbID}`} className='card__link'>
              {item.Title}
            </Link>
          </h3>

          <p className='tags'>
            <span className='tag'>{item.Year}</span>
            <span className='tag'>{item.Type}</span>
          </p>
        </div>
        <img src={item.Poster} alt={item.Title} />
      </div>
    </>
  )
}

export default Card
