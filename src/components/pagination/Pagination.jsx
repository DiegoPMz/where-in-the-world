import './pagination.css'

import { usePagination } from '../../hooks/usePagination'
import { NavLinkCustom } from './NavLinkCustom'
import { NextPageButton } from './NextPageButton'
import { PrevPageButton } from './PrevPageButton'

import { useLocation, useNavigate } from 'react-router-dom'

// const paginationDefault = {
//   iterator: [],
// }

// const MAX_NUMBER_BTN = 7

// export const Pagination = ({ numberPages, paramsURL, totalPages }) => {
//   // const { pages } = numberPages
//   // const [pagination, setPagination] = useState(paginationDefault)
//   const navigate = useNavigate()
//   const location = useLocation()

//   const str = location.pathname
//   const currentLocation =
//     str.replace(/\/page\/\d+/, '') === '/' ? '' : str.replace(/\/page\/\d+/, '')

//   // useEffect(() => {
//   //   if (!pages) return
//   //   paginationConfig(paramsURL, setPagination, pages, MAX_NUMBER_BTN)
//   // }, [paramsURL, pages])

//   const handleNext = () => {
//     const pageNext = !paramsURL ? 1 : parseInt(paramsURL) + 1

//     console.log(paramsURL, ['number', 'string'].includes(typeof paramsURL))
//     navigate({
//       pathname: `${currentLocation}/page/${
//         pageNext >= pages ? pages : pageNext
//       }`,
//     })
//   }

//   const handlePrev = () => {
//     const pagePrev = !paramsURL ? 1 : parseInt(paramsURL) - 1

//     navigate({
//       pathname: `${currentLocation}/page/${pagePrev < 1 ? 1 : pagePrev}`,
//     })
//   }

//   return (
//     <>
//       {totalPages >= 1 && (
//         <div className='pagination'>
//           <button
//             className='pagination__btn'
//             onClick={handlePrev}
//           >
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='pagination__btn-arrow'
//               width={'15px'}
//               height={'15px'}
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M15.75 19.5L8.25 12l7.5-7.5'
//               />
//             </svg>
//           </button>

//           {/* <div className='pagination__pages'>
//             {pagination.iterator.length > 1 &&
//               pagination.iterator.map(page => (
//                 <NavLinkCustom
//                   key={`${currentLocation}/page/${page}`}
//                   to={`${currentLocation}/page/${page}`}
//                 >
//                   {page}
//                 </NavLinkCustom>
//               ))}
//           </div> */}

//           <button
//             className='pagination__btn'
//             onClick={handleNext}
//           >
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='pagination__btn-arrow'
//               width={'15px'}
//               height={'15px'}
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M8.25 4.5l7.5 7.5-7.5 7.5'
//               />
//             </svg>
//           </button>
//         </div>
//       )}
//     </>
//   )
// }

export const Pagination = ({ totalPages }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const str = location.pathname
  const currentLocation =
    str.replace(/\/page\/\d+/, '') === '/' ? '' : str.replace(/\/page\/\d+/, '')

  const { buttonsValues, urlPage } = usePagination(totalPages)

  const handlePrev = () => {
    const prevPage = urlPage - 1
    navigate(`${currentLocation}/page/${prevPage < 1 ? 1 : prevPage}`)
  }

  const handleNext = () => {
    const nextPage = urlPage + 1
    navigate(
      `${currentLocation}/page/${
        nextPage > totalPages ? totalPages : nextPage
      }`,
    )
  }

  return (
    <>
      {buttonsValues && buttonsValues.length > 1 ? (
        <div className='pagination'>
          <PrevPageButton handlePrev={handlePrev} />

          <div className='pagination__pages'>
            {buttonsValues.map(value => (
              <NavLinkCustom
                key={`${location.pathname}/${value}/${crypto.randomUUID()} `}
                to={`${currentLocation}/page/${value}`}
                link={value !== '...'}
              >
                {value}
              </NavLinkCustom>
            ))}
          </div>

          <NextPageButton handleNext={handleNext} />
        </div>
      ) : null}
    </>
  )
}
