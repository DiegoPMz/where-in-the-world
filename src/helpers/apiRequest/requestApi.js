import {
  getAllCountries,
  getCodeCountrie,
  getRegionCountries,
  getSearchCountrie,
} from './servicesApi'

export const requestApi = ({ typeApi, valueApi, setApiData }) => {
  const apiController = new AbortController()

  const typeFetch = {
    default: () => {
      const { apiData } = getAllCountries(apiController)
      apiData.then(res => setApiData(res))
    },

    search: () => {
      const { apiData } = getSearchCountrie(valueApi, apiController)
      apiData.then(res => setApiData(res))
    },

    region: () => {
      const { apiData } = getRegionCountries(valueApi, apiController)
      apiData.then(res => setApiData(res))
    },

    code: () => {
      const { apiData } = getCodeCountrie(valueApi, apiController)
      apiData.then(res => setApiData(res))
    },
  }

  if (!typeApi) return
  const selectRequest = typeFetch[typeApi]
  selectRequest()

  return { cancel: () => apiController.abort() }
}
