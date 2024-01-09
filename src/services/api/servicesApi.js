export const getAllCountriesApi = () => {
  const controller = new AbortController()
  const options = { signal: controller.signal }

  try {
    const apiData = fetch('https://restcountries.com/v3.1/all', options)
      .then(res => res.json())
      .then(data => data)

    return { apiData, controller }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(
        'Fetch aborted by user action (browser stop button, closing tab, etc.',
      )
    } else {
      console.error(`Error type: ${error.name}, message: ${error.message}`)
    }
  }
}

export const getRegionCountriesApi = valueApi => {
  const controller = new AbortController()
  const options = { signal: controller.signal }

  try {
    const apiData = fetch(
      `https://restcountries.com/v3.1/region/${valueApi}`,
      options,
    )
      .then(res => res.json())
      .then(data => data)

    return { apiData, controller }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(
        'Fetch aborted by user action (browser stop button, closing tab, etc.',
      )
    } else {
      console.error(`Error type: ${error.name}, message: ${error.message}`)
    }
  }
}

export const getSearchCountrieApi = valueApi => {
  const controller = new AbortController()
  const options = { signal: controller.signal }

  try {
    const apiData = fetch(
      `https://restcountries.com/v3.1/translation/${valueApi}`,
      options,
    )
      .then(res => {
        if (!res.ok) throw new Error(`the "${valueApi}" value does not exist`)

        return res.json()
      })
      .then(data => data)

    return { apiData, controller }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(
        'Fetch aborted by user action (browser stop button, closing tab, etc.',
      )
    } else {
      console.error(`Error type: ${error.name}, message: ${error.message}`)
    }
  }
}
export const getCodeCountrieApi = valueApi => {
  const controller = new AbortController()
  const options = { signal: controller.signal }
  try {
    const apiData = fetch(
      `https://restcountries.com/v3.1/alpha?codes=${valueApi}`,
      options,
    )
      .then(res => res.json())
      .then(data => data)

    return { apiData, controller }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(
        'Fetch aborted by user action (browser stop button, closing tab, etc.',
      )
    } else {
      console.error(`Error type: ${error.name}, message: ${error.message}`)
    }
  }
}

export const getDetailCountrieApi = valueApi => {
  const controller = new AbortController()
  const options = { signal: controller.signal }
  try {
    const apiData = fetch(
      `https://restcountries.com/v3.1/name/${valueApi}?fullText=true`,
      options,
    )
      .then(res => res.json())
      .then(data => data)

    return { apiData, controller }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(
        'Fetch aborted by user action (browser stop button, closing tab, etc.',
      )
    } else {
      console.error(`Error type: ${error.name}, message: ${error.message}`)
    }
  }
}
