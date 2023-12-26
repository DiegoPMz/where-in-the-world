import { useContext } from 'react'
import DetailCountryContext from '../../../context/DetailCountryContext'
import { SkeletonLoader } from '../../skeletonLoader/SkeletonLoader'
import { Card } from '../card/Card'

export const CardContainer = ({ numberPages }) => {
  const { data } = numberPages
  const { setCountryDetail } = useContext(DetailCountryContext)

  const sendCountryDetails = (e, value) => {
    setCountryDetail(value)
  }

  return (
    <section className='cards__container'>
      {data
        ? data.map(el => (
            <Card
              key={el.name.common}
              flag={el.flags.svg}
              name={el.name.common}
              population={el.population}
              region={el.region}
              capital={el.capital}
              onClick={e => sendCountryDetails(e, el)}
            />
          ))
        : Array(12)
            .fill()
            .map(() => <SkeletonLoader key={crypto.randomUUID()} />)}
    </section>
  )
}
