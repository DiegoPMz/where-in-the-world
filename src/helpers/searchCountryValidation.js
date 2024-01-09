export const searchCountryValidation = (
  errorSearchDefault,
  searchParam,
  setErrorSearch,
) => {
  fetch(`https://restcountries.com/v3.1/translation/${searchParam}?fields=name`)
    .then(res => {
      if (!res.ok) {
        setErrorSearch({
          ...errorSearchDefault,
          status: true,
          message: `Country "${searchParam}" not found. Please check the spelling and try again.`,
        })
      }
    })
    .catch()
}
