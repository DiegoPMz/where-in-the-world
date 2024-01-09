import { SkeletonLoader } from '../../skeletonLoader/SkeletonLoader'
import { Card } from '../card/Card'

export const CardContainer = ({ segmentedData }) => {
  return (
    <section className='cards__container'>
      {segmentedData
        ? segmentedData.map(el => (
            <Card
              key={el.name.common}
              flag={el.flags.svg}
              name={el.name.common}
              population={el.population}
              region={el.region}
              capital={el.capital}
              // onClick={e => sendCountryDetails(e, el)}
            />
          ))
        : Array(12)
            .fill()
            .map(() => <SkeletonLoader key={crypto.randomUUID()} />)}
    </section>
  )
}
