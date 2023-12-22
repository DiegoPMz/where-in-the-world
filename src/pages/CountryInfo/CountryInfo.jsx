import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { requestApi } from '../../helpers/apiRequest/requestApi'
import './countryInfo.css'

export const CountryInfo = () => {
  const navigate = useNavigate()
  const { infoCountry } = useParams()
  const [detailAPI, setDetailAPI] = useState(null)
  const [borderCountries, setBorderCountries] = useState([])

  useEffect(() => {
    if (!infoCountry) return

    const { cancel } = requestApi({
      typeApi: 'search',
      valueApi: infoCountry,
      setApiData: setDetailAPI,
    })

    return () => cancel()
  }, [infoCountry])

  useEffect(() => {
    if (!detailAPI || !detailAPI[0].borders) return
    const { cancel } = getBorderCountries()

    window.scrollTo(0, 0)
    return () => cancel()
  }, [detailAPI])

  const getBorderCountries = () => {
    const borderValues = detailAPI[0].borders.toString()

    const { cancel } = requestApi({
      typeApi: 'code',
      valueApi: borderValues,
      setApiData: setBorderCountries,
    })

    return { cancel }
  }

  const handleBack = () => navigate(-1)

  const nativeName = detailAPI && detailAPI[0].name.nativeName[Object.keys(detailAPI[0].name.nativeName)[0]].common // prettier-ignore
  const currencies = detailAPI && Object.values(detailAPI[0].currencies)
  let allCurrencies = []

  currencies &&
    currencies.forEach(element => {
      allCurrencies = [...allCurrencies, element.name]
    })

  return (
    <>
      {detailAPI && (
        <section
          key={'main'}
          className='countryInfo'
        >
          <button
            onClick={handleBack}
            className='countryInfo__back'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={'30px'}
              height={'30px'}
              className='countryInfo__back-img'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>
            <span className='countryInfo__back-txt'>Back</span>
          </button>

          {detailAPI.map(el => 
          <div key={el.name.common +el.region} className='countryInfo__content'>
            <img
              src={el.flags.svg}
              alt={`flag ${el.name.common}`}
              className='countryInfo__content-img'
            />
            <div className='countryInfo__content-info'>
              <h2 className='content-info__title'> {el.name.common} </h2>
              <div className='content-info__listContainer'>
                <ul className='listContainer__list listContainer__list--first'>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>
                      Native Name:{' '}
                    </span>
                    <span className='listContainer__item-text'>
                      {nativeName}
                    </span>
                  </li>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>
                      Population:{' '}
                    </span>
                    <span className='listContainer__item-text'>
                      {el.population}
                    </span>
                  </li>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>Region: </span>
                    <span className='listContainer__item-text'>
                      {el.region}
                    </span>
                  </li>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>
                      Sub Region:{' '}
                    </span>
                    <span className='listContainer__item-text'>
                      {el.subregion}
                    </span>
                  </li>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>Capital: </span>
                    <span className='listContainer__item-text'>
                      {el.capital}
                    </span>
                  </li>
                </ul>

                <ul className='listContainer__list'>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>
                      Top Level Domain:{' '}
                    </span>
                    <span className='listContainer__item-text'>{el.tld}</span>
                  </li>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>
                      Currencies:{' '}
                    </span>
                    <span className='listContainer__item-text'>
                      {allCurrencies.join(', ')}
                    </span>
                  </li>
                  <li className='listContainer__item'>
                    <span className='listContainer__item-title'>
                      Languages:{' '}
                    </span>
                    <span className='listContainer__item-text'>
                      {Object.values(el.languages).join(', ')}
                    </span>
                  </li>
                </ul>
              </div>

              {borderCountries.length > 0 && (
                <div className='content-info__borderCountries'>
                  <span className='borderCountries__title'>
                    Border Countries:
                  </span>
                  <ul className='borderCountries__list'>
                    {borderCountries.map(el => (
                      <li
                        className='borderCountries__item'
                        key={el.name.common + el.idd.root}
                      >
                        <Link
                          to={`/info/${el.name.common}`}
                          className='borderCountries__link'
                        >
                          {el.name.common}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>)}

          
        </section>
      )}
    </>
  )
}