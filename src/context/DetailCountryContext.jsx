import { createContext, useState } from 'react'

const DetailCountryContext = createContext(null)

export const DetailCountryProvider = ({ children }) => {
  const [countryDetail, setCountryDetail] = useState(null)

  const value = {
    setCountryDetail,
    countryDetail,
  }

  return (
    <DetailCountryContext.Provider value={value}>
      {children}
    </DetailCountryContext.Provider>
  )
}

export default DetailCountryContext
