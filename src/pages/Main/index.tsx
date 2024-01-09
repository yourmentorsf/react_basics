// import { useEffect, useState } from "react"
import { useState } from 'react'
import Cards from '../../components/Cards'
import Search from '../../components/Search'
import './main.styl'

const Main = () => {
  let initState = localStorage.getItem('search')
    ? localStorage.getItem('search')
    : 'batman'
  const [searchRequest, setSearchRequest] = useState(initState)
  const handleDataChange = (data: string) => {
    setSearchRequest(data)
  }


  return (
    <main className='main'>
      {/* <h3>Main Page</h3> */}
      <Search onDataChange={handleDataChange} />
      <Cards searchRequest={searchRequest} />
    </main>
  )
}

export default Main
