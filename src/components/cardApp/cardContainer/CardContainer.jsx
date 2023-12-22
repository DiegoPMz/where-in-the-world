import { useContext } from 'react'
import DetailCountryContext from '../../../context/DetailCountryContext'
import { Card } from '../card/Card'

export const CardContainer = ({ apiData, numberPages }) => {
  const { data } = numberPages
  const { setCountryDetail } = useContext(DetailCountryContext)

  const sendCountryDetails = (e, value) => {
    setCountryDetail(value)
  }

  return (
    <section className='cards__container'>
      {data &&
        data.map(el => (
          <Card
            key={el.name.common}
            flag={el.flags.svg}
            name={el.name.common}
            population={el.population}
            region={el.region}
            capital={el.capital}
            onClick={e => sendCountryDetails(e, el)}
          />
        ))}
    </section>
  )
}
