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



const root = document.getElementById('root')! // Typescript also has a non-null assertion that you can use when you are sure that the value is never null by adding the ! operator to the end of your statement:

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
