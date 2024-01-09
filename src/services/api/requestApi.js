import {
  getAllCountriesApi,
  getCodeCountrieApi,
  getDetailCountrieApi,
  getRegionCountriesApi,
  getSearchCountrieApi,
} from './servicesApi'

const getDataApi = (setApiResponse, serviceApi, valueApi) => {
  try {
    const { apiData, controller } = serviceApi(valueApi)
    apiData.then(res => {
      setApiResponse(res)
    })

    return { controller }
  } catch (err) {}
}

export const requestApi = (typeApi, setApiData, valueApi = '') => {
  let apiController = null
  let apiError

  const typeFetch = {
    home: () => {
      const { controller } = getDataApi(setApiData, getAllCountriesApi)
      apiController = controller
    },

    search: () => {
      const { controller } = getDataApi(
        setApiData,
        getSearchCountrieApi,
        valueApi,
      )
      // apiError = error
      apiController = controller
    },

    region: () => {
      const { controller } = getDataApi(
        setApiData,
        getRegionCountriesApi,
        valueApi,
      )
      apiController = controller
    },

    code: () => {
      const { controller } = getDataApi(
        setApiData,
        getCodeCountrieApi,
        valueApi,
      )
      apiController = controller
    },

    detail: () => {
      const { controller } = getDataApi(
        setApiData,
        getDetailCountrieApi,
        valueApi,
      )
      apiController = controller
    },
  }

  if (!typeApi) return
  const selectRequest = typeFetch[typeApi]
  selectRequest()

  return { apiController, apiError }
}
