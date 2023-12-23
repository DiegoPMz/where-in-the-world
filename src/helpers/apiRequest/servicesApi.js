export const getAllCountries = controller => {
  try {
    const options = { signal: controller.signal }

    const response = fetch('https://restcountries.com/v3.1/all', options).then(
      res => {
        if (!res.ok) throw new Error('HTTP error ' + response.status)
        return res.json()
      },
    )
    const apiData = response.then(data => data)

    return { apiData }
  } catch (error) {
    console.log(error + '❌')
  }
}

export const getRegionCountries = (valueApi, controller) => {
  try {
    const options = { signal: controller.signal }

    const response = fetch(
      `https://restcountries.com/v3.1/region/${valueApi}`,
      options,
    ).then(res => {
      if (!res.ok) throw new Error('HTTP error ' + response.status)

      return res.json()
    })

    const apiData = response.then(data => data)

    return { apiData }
  } catch (error) {}
}

export const getSearchCountrie = (valueApi, controller) => {
  try {
    const options = { signal: controller.signal }
    const response = fetch(
      `https://restcountries.com/v3.1/translation/${valueApi}`,
      options,
    ).then(res => {
      if (!res.ok) throw new Error('HTTP error ' + response.status)

      return res.json()
    })

    const apiData = response.then(data => data)

    return { apiData }
  } catch (error) {}
}
export const getCodeCountrie = (valueApi, controller) => {
  try {
    const options = { signal: controller.signal }
    const response = fetch(
      `https://restcountries.com/v3.1/alpha?codes=${valueApi}`,
      options,
    ).then(res => {
      if (!res.ok) throw new Error('HTTP error ' + response.status)

      return res.json()
    })

    const apiData = response.then(data => data)

    return { apiData }
  } catch (error) {}
}

export const getDetailCountrie = (valueApi, controller) => {
  try {
    const options = { signal: controller.signal }
    const response = fetch(
      `https://restcountries.com/v3.1/name/${valueApi}?fullText=true`,
      options,
    ).then(res => {
      if (!res.ok) throw new Error('HTTP error ' + response.status)

      return res.json()
    })

    const apiData = response.then(data => data)

    return { apiData }
  } catch (error) {}
}
