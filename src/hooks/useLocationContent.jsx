import { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const numberPagesDefault = {
  items: 12,
  pages: null,
  data: null,
}

export const useLocationContent = (
  apiData,
  countrySearch,
  setCountrySearch,
  defaultCountrySearch,
) => {
  const [numberPages, setNumberPages] = useState(numberPagesDefault)
  const [paramsURL, setParamsURL] = useState(null)

  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams({ country: '' })
  const getSearchCountry = searchParams.get('country')
  const { page, regionValue, regionPage } = useParams()

  const itemsPages = (apiData, page) => {
    const calcPages = Math.round(apiData.length / numberPages.items)
    let baseNumber = 0
    let toNumber = numberPages.items
    let dataToShow = apiData.slice(baseNumber, toNumber)

    if (getSearchCountry) {
      baseNumber = 0
      toNumber = 0
      dataToShow = apiData
      setNumberPages({ ...numberPages, pages: calcPages, data: dataToShow })
      return
    }

    if (page) {
      baseNumber = numberPages.items * (parseInt(page) - 1)
      toNumber = numberPages.items * parseInt(page)
      dataToShow = apiData.slice(baseNumber, toNumber)
    }

    setNumberPages({ ...numberPages, pages: calcPages, data: dataToShow })
  }

  useEffect(() => {
    if (!apiData) return

    if (location.pathname === '/' || page) {
      setCountrySearch(defaultCountrySearch)
      setParamsURL(page)
      itemsPages(apiData, page)
    }

    if (regionValue) {
      setCountrySearch({ ...countrySearch, region: regionValue })
      setParamsURL(regionPage)
      itemsPages(apiData, regionPage)
    }

    if (getSearchCountry) {
      itemsPages(apiData, regionPage)
    }

    window.scrollTo(0, 0)
  }, [location.pathname, apiData])

  return { numberPages, paramsURL }
}
