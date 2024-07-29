import { Link } from 'react-router-dom'
import './header.styl'
import Search from '@cmp/Search/index'
const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link className='nav__link' to='/'>
                Home
              </Link>
            </li>
          </ul>
          <Search />
        </nav>
      </header>
    </>
  )
}

export default Header
