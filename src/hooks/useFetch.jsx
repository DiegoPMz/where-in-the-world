import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { requestApi } from '../helpers/apiRequest/requestApi'

export const useFetch = (stateApp, setStateApp, searchCountryParam) => {
  const [apiData, setApiData] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (searchCountryParam)
      setStateApp({ ...stateApp, search: searchCountryParam })

    let typeApi = ''
    let valueApi = ''

    if (location.pathname === '/') {
      console.log('home')
      typeApi = 'default'
      valueApi = null
    }

    if (stateApp.region) {
      console.log('region')
      typeApi = 'region'
      valueApi = stateApp.region
    }

    if (stateApp.search) {
      console.log('search')
      typeApi = 'search'
      valueApi = stateApp.search
    }

    const { cancel } = requestApi({
      typeApi,
      valueApi,
      setApiData,
    })

    return () => {
      // cancel()

      typeApi = ''
      valueApi = ''
    }
  }, [location.pathname])

  return { apiData }
}
