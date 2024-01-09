export const NextPageButton = ({ handleNext }) => {
  return (
    <button
      className='pagination__btn'
      onClick={handleNext && handleNext}
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
  )
}
