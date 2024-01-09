import './card.css'

import { Link } from 'react-router-dom'

export const Card = ({ flag, name, population, region, capital}) => {
  return (
    <Link
      to={`/info/${name}`}
      className='card'
    >
      <article className='card__main'>
        <img
          className='card__image'
          src={flag}
          alt={`flag of ${name}`}
        />
        <div className='card__content'>
          <span className='card__content-title'> {name} </span>
          <ul className='card__content-list'>
            <li className='content-list__item'>
              <span className='item__key'>population:</span>
              <span className='item__value'> {population} </span>
            </li>
            <li className='content-list__item'>
              <span className='item__key'>Region:</span>
              <span className='item__value'> {region} </span>
            </li>
            <li className='content-list__item'>
              <span className='item__key'>Capital:</span>
              <span className='item__value'> {capital} </span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  )
}
