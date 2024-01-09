import './App.css'

import { HashRouter, Route, Routes } from 'react-router-dom'
import { CardApp } from './components/cardApp/CardApp'
import { Navbar } from './components/navbar/Navbar'
import { CountryInfo } from './pages/CountryInfo/CountryInfo'

function App() {
  const routes = [
    { path: '/region/:regionValue/page/:regionPage', element: <CardApp /> },
    { path: '/region/:regionValue', element: <CardApp /> },
    { path: '/page/:page', element: <CardApp /> },
    { path: '/search/*', element: <CardApp /> },
    { path: '/*', element: <CardApp /> },
  ]

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}

        <Route
          path='/info/:infoCountry'
          element={<CountryInfo />}
        />
      </Routes>
    </HashRouter>
  )
}

export default App

//  <Route
//         path='/region/:regionValue/page/:regionPage'
//         element={<CardApp />}
//       />

//       <Route
//         path='/region/:regionValue'
//         element={<CardApp />}
//       />

//       <Route
//         path='/page/:page'
//         element={<CardApp />}
//       />

//       <Route
//         path='/search/*'
//         element={<CardApp />}
//       />

//       <Route
//         path='/*'
//         element={<CardApp />}
//       />
