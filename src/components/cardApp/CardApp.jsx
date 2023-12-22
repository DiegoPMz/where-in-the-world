import './cardApp.css'

import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { inpuntValidation } from '../../helpers/inputValidation/inpuntValidation'
import { useFetch } from '../../hooks/useFetch'
import { useLocationContent } from '../../hooks/useLocationContent'
import { Pagination } from '../pagination/Pagination'
import { CardContainer } from './cardContainer/CardContainer'
import { CardForm } from './cardForm/CardForm'

const defaultCountrySearch = {
  search: '',
  region: '',
}

export const CardApp = () => {
  const [countrySearch, setCountrySearch] = useState(defaultCountrySearch)
  const [searchParams, setSearchParams] = useSearchParams({ country: '' })
  const getSearchCountry = searchParams.get('country')
  const navigate = useNavigate()

  const handleSubmit = (e, inputValues, setInputValues) => {
    e.preventDefault()
    const { status } = inpuntValidation(inputValues.search)
    if (status) return

    setCountrySearch({ ...defaultCountrySearch, search: inputValues.search })
    setInputValues({ ...defaultCountrySearch })

    setSearchParams({ country: inputValues.search })
    navigate(`/search/?country=${inputValues.search}`)
  }

  const handleSelect = selectInput => {
    setCountrySearch({ ...countrySearch, region: selectInput })
    navigate({ pathname: `/region/${selectInput}` })
  }

  const { apiData } = useFetch(
    countrySearch,
    setCountrySearch,
    getSearchCountry,
  )

  const { numberPages, paramsURL } = useLocationContent(
    apiData,
    countrySearch,
    setCountrySearch,
    defaultCountrySearch,
  )

  return (
    <main className='cards'>
      <CardForm
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
      />
      <CardContainer
        apiData={apiData}
        numberPages={numberPages}
      />
      <Pagination
        numberPages={numberPages}
        paramsURL={paramsURL}
      />
    </main>
  )
}
