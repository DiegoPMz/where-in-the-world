import './cardApp.css'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useSegmentDataPage } from '../../hooks/useSegmentDataPage'
import { useSetDataLocation } from '../../hooks/useSetDataLocation'
import { Pagination } from '../pagination/Pagination'
import { CardContainer } from './cardContainer/CardContainer'
import { CardForm } from './cardForm/CardForm'

const defaultCountrySearch = {
  search: '',
  region: '',
}

export const CardApp = () => {
  const [countrySearch, setCountrySearch] = useState(defaultCountrySearch)
  const [, setSearchParams] = useSearchParams({ country: '' })
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (e, inputValues, setInputValues) => {
    e.preventDefault()
    if (!inputValues.search) return

    setCountrySearch({ ...defaultCountrySearch, search: inputValues.search })
    setInputValues({ ...defaultCountrySearch })

    setSearchParams({ country: inputValues.search })
    navigate(`/search/?country=${inputValues.search}`, { replace: true })
  }

  const handleSelect = selectInput => {
    setCountrySearch({ ...defaultCountrySearch, region: selectInput })
    navigate({ pathname: `/region/${selectInput}` })
  }

  const { locationData, errorSearch } = useSetDataLocation(countrySearch)

  const { totalPages, segmentedData } = useSegmentDataPage({
    data: locationData,
    pageSize: 12,
  })

  useEffect(() => {
    if (location.pathname === '/' || `/page/`)
      setCountrySearch(defaultCountrySearch)

    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <main className='cards'>
      <CardForm
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
      />

      {errorSearch.status && (
        <span className='cards__error-message'> {errorSearch.message} </span>
      )}
      {!errorSearch.status && (
        <>
          <CardContainer segmentedData={segmentedData} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </main>
  )
}
