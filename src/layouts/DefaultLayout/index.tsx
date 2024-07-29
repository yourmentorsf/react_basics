import { createContext, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './styles.styl'

export const SearchContext = createContext<{
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}>({ searchQuery: 'batman', setSearchQuery: () => {} })

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('search') || 'batman'
  })

  useEffect(() => {
    localStorage.setItem('search', searchQuery)
  }, [searchQuery])

  return (
    <>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <Header />
        <div className='wrapper'>{children}</div>
        <Footer />
      </SearchContext.Provider>
    </>
  )
}

export default DefaultLayout
