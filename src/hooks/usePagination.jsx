import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const usePagination = (totalPages, numberButtons = 7) => {
  const { page, regionPage } = useParams()
  const [buttonsValues, setButtonsValues] = useState([])
  const [urlPage, setUrlPage] = useState(1)

  const buttonsPosition = (currentPage = 1) => {
    if (totalPages <= numberButtons) {
      const arrayLengthTotalPages = Array.from(
        { length: totalPages },
        (_, index) => index + 1,
      )
      return arrayLengthTotalPages
    }

    if (currentPage < numberButtons - 2) {
      const newArrayPositions = [
        1,
        numberButtons - 5,
        numberButtons - 4,
        numberButtons - 3,
        numberButtons - 2,
        '...',
        totalPages,
      ]

      return newArrayPositions
    }

    if (currentPage === totalPages) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    }

    if (currentPage >= numberButtons - 2 && currentPage < totalPages - 3) {
      const newArrayPositions = [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
      ]

      return newArrayPositions
    }

    if (currentPage >= totalPages - 3 && currentPage < totalPages) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    }
  }

  useEffect(() => {
    if (!totalPages) return

    if (page) {
      setButtonsValues(buttonsPosition(parseInt(page)))
      setUrlPage(parseInt(page))
    } else if (regionPage) {
      setButtonsValues(buttonsPosition(parseInt(regionPage)))
      setUrlPage(parseInt(regionPage))
    } else {
      setButtonsValues(buttonsPosition())
    }
  }, [totalPages, page, regionPage])

  return { buttonsValues, urlPage }
}
