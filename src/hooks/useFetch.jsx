import { useEffect, useState } from 'react'
import { requestApi } from '../helpers/apiRequest/requestApi'

export const useFetch = (countrySearch, setCountrySearch, getSearchCountry) => {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    if (getSearchCountry) {
      setCountrySearch({ ...countrySearch, search: getSearchCountry })
    }

    let typeApi = ''
    let valueApi = ''

    if (!countrySearch.region && !countrySearch.search) {
      typeApi = 'default'
      valueApi = null
    } else if (countrySearch.region) {
      typeApi = 'region'
      valueApi = countrySearch.region
    } else if (countrySearch.search) {
      typeApi = 'search'
      valueApi = countrySearch.search
    }

    const { cancel } = requestApi({
      typeApi,
      valueApi,
      setApiData,
    })

    return () => cancel()
  }, [countrySearch.region, countrySearch.search])

  return { apiData }
}
