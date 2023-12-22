import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavLinkCustom } from './NavLinkCustom'
import './pagination.css'
import { paginationConfig } from './paginationConfig'

const paginationDefault = {
  iterator: [],
}

const MAX_NUMBER_BTN = 5

export const Pagination = ({ numberPages, paramsURL }) => {
  const { pages } = numberPages
  const [pagination, setPagination] = useState(paginationDefault)
  const navigate = useNavigate()
  const location = useLocation()

  const str = location.pathname
  const currentLocation =
    str.replace(/\/page\/\d+/, '') === '/' ? '' : str.replace(/\/page\/\d+/, '')

  useEffect(() => {
    if (!pages) return
    paginationConfig(paramsURL, setPagination, pages, MAX_NUMBER_BTN)
  }, [paramsURL, pages])

  const handleNext = () => {
    const pageNext = !paramsURL ? 1 : parseInt(paramsURL) + 1

    console.log(paramsURL, ['number', 'string'].includes(typeof paramsURL))
    navigate({
      pathname: `${currentLocation}/page/${
        pageNext >= pages ? pages : pageNext
      }`,
    })
  }

  const handlePrev = () => {
    const pagePrev = !paramsURL ? 1 : parseInt(paramsURL) - 1

    navigate({
      pathname: `${currentLocation}/page/${pagePrev < 1 ? 1 : pagePrev}`,
    })
  }

  return (
    <>
      {pages >= 1 && (
        <div className='pagination'>
          <button
            className='pagination__btn'
            onClick={handlePrev}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='pagination__btn-arrow'
              width={'15px'}
              height={'15px'}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>

          <div className='pagination__pages'>
            {pagination.iterator.length > 1 &&
              pagination.iterator.map(page => (
                <NavLinkCustom
                  key={`${currentLocation}/page/${page}`}
                  to={`${currentLocation}/page/${page}`}
                >
                  {page}
                </NavLinkCustom>
              ))}
          </div>

          <button
            className='pagination__btn'
            onClick={handleNext}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='pagination__btn-arrow'
              width={'15px'}
              height={'15px'}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
