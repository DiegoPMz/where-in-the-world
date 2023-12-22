import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const defaulValues = {
  search: '',
  region: '',
}

export const CardForm = ({ handleSubmit, handleSelect }) => {
  const [cardInputs, setCardInputs] = useState(defaulValues)
  const [isOpen, setIsOpen] = useState(false)
  const { regionValue } = useParams()

  const handleFocus = () => setIsOpen(true)
  const handleBlur = () => setIsOpen(false)

  const handleChange = e => {
    const { name, value } = e.target
    setCardInputs({ ...cardInputs, [name]: value })

    name === 'region' && handleSelect(value)
  }

  useEffect(() => {
    const valueSelect = ['africa', 'america', 'asia', 'europe', 'oceania']

    if (!regionValue || !valueSelect.includes(regionValue)) return

    setCardInputs({ ...cardInputs, region: regionValue })
  }, [regionValue])

  useEffect(() => {
    if (location.pathname === '/') {
      setCardInputs(defaulValues)
    }
  }, [location.pathname])

  return (
    <form
      id='cardForm'
      className='cards__form'
      onSubmit={e => handleSubmit(e, cardInputs, setCardInputs)}
    >
      <div className='cards__form-input'>
        <button
          className='form-input__btn'
          type='submit'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 form-input__img'
          >
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <input
          type='text'
          form='cardForm'
          placeholder='Search for a country...'
          className='form-input__input'
          name='search'
          value={cardInputs.search}
          onChange={e => handleChange(e)}
        />
      </div>

      <div className='cards__form-select'>
        <div className='form-select__subContainer'>
          <select
            form='cardForm'
            className='form-select__select'
            name='region'
            value={cardInputs.region}
            onChange={e => handleChange(e)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {!isOpen && (
              <option
                value=''
                className='form-select__option'
              >
                Filter by Region
              </option>
            )}

            <option
              className='form-select__option'
              value='africa'
            >
              Africa
            </option>
            <option
              className='form-select__option'
              value='america'
            >
              America
            </option>
            <option
              className='form-select__option'
              value='asia'
            >
              Asia
            </option>
            <option
              className='form-select__option'
              value='europe'
            >
              Europe
            </option>
            <option
              className='form-select__option'
              value='oceania'
            >
              Oceania
            </option>
          </select>
          <svg
            className='form-select__img'
            width='512'
            height='512'
            viewBox='0 0 1024 1024'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='currentColor'
              d='M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z'
            />
          </svg>
        </div>
      </div>
    </form>
  )
}
