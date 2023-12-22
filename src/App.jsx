import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CardApp } from './components/cardApp/CardApp'
import { Navbar } from './components/navbar/Navbar'
import { DetailCountryProvider } from './context/DetailCountryContext'
import { CountryInfo } from './pages/CountryInfo/CountryInfo'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <DetailCountryProvider>
        <Routes>
          <Route
            path='/*'
            element={<CardApp />}
          />

          <Route
            path='/page/:page'
            element={<CardApp />}
          />

          <Route
            path='/region/:regionValue'
            element={<CardApp />}
          />

          <Route
            path='/region/:regionValue/page/:regionPage'
            element={<CardApp />}
          />

          <Route
            path='/search/*'
            element={<CardApp />}
          />

          <Route
            path='/info/:infoCountry'
            element={<CountryInfo />}
          />
        </Routes>
      </DetailCountryProvider>
    </BrowserRouter>
  )
}

export default App
