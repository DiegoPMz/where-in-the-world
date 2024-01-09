import { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { searchCountryValidation } from '../helpers/searchCountryValidation'
import { requestApi } from '../services/api/requestApi'

const errorSearchDefault = {
  status: false,
  message: '',
}

export const useSetDataLocation = appStateValues => {
  const [locationData, setLocationData] = useState(null)
  const [errorSearch, setErrorSearch] = useState(errorSearchDefault)

  const stateSearchCountry = appStateValues.search
  const stateSelectRegion = appStateValues.region

  const [searchParams] = useSearchParams()
  const urlParamSearchCountry = searchParams.get('country')
  const { page, regionValue } = useParams()
  const location = useLocation()

  const locationFetch = () => {
    const ENDPOINTS = {
      HOME: 'home',
      REGION: 'region',
      SEARCH: 'search',
    }

    if (location.pathname === '/' || page) {
      const { apiController } = requestApi(ENDPOINTS.HOME, setLocationData)
      return apiController
    }

    if (stateSelectRegion || regionValue) {
      const { apiController } = requestApi(
        ENDPOINTS.REGION,
        setLocationData,
        stateSelectRegion || regionValue,
      )

      return apiController
    }

    if (stateSearchCountry || urlParamSearchCountry) {
      // ⁉👇⁉
      searchCountryValidation(
        errorSearchDefault,
        urlParamSearchCountry,
        setErrorSearch,
      )

      const { apiController } = requestApi(
        ENDPOINTS.SEARCH,
        setLocationData,
        stateSearchCountry || urlParamSearchCountry,
      )
      return apiController
    }
  }

  useEffect(() => {
    setErrorSearch({ ...errorSearchDefault })
    let apiController = null
    apiController = locationFetch()

    return () => {
      if (apiController) apiController.abort()
    }
  }, [regionValue, urlParamSearchCountry])

  return { locationData, errorSearch }
}
