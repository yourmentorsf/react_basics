import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Main from './pages/Main'
import Details from './pages/Details'
import DefaultLayout from './layouts/DefaultLayout'



const root = document.getElementById('root')! 
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='details'>
            <Route path=':id' element={<Details />} />
          </Route>
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  </React.StrictMode>
)
