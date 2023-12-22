import { pagesIterator } from './pagesIterator'

export const paginationConfig = (
  page,
  setPagination,
  pages,
  MAX_NUMBER_BTN,
) => {
  if (parseInt(page) > pages) return

  const pageURL = ['string', 'number'].includes(typeof page)
    ? parseInt(page)
    : 1

  const multiplesNumberBtn = pageURL % MAX_NUMBER_BTN === 0
  let arrayOrderBtns
  let prevValue

  const setOrderNumbers = {
    true: () => {
      if (pageURL === 20) {
        const minMultiple = 16
        const maxMultiple = pages

        prevValue = minMultiple - MAX_NUMBER_BTN
        arrayOrderBtns = pagesIterator(minMultiple, maxMultiple)

        setPagination(prevState => ({
          ...prevState,
          iterator: [prevValue, ...arrayOrderBtns],
        }))

        return
      }

      const minMultiple = pageURL + 1
      const maxMultiple = pageURL + MAX_NUMBER_BTN

      prevValue =
        minMultiple - MAX_NUMBER_BTN <= 0 ? 1 : minMultiple - MAX_NUMBER_BTN

      arrayOrderBtns = pagesIterator(minMultiple, maxMultiple)

      setPagination(prevState => ({
        ...prevState,
        iterator: [prevValue, ...arrayOrderBtns, pages],
      }))
    },

    false: () => {
      if (pageURL === pages) {
        const minMultiple =
          pages - MAX_NUMBER_BTN < 1 ? 1 : pages - MAX_NUMBER_BTN
        const maxMultiple = pages

        prevValue = minMultiple - MAX_NUMBER_BTN
        arrayOrderBtns = pagesIterator(minMultiple, maxMultiple)

        setPagination(prevState => ({
          ...prevState,
          iterator: [prevValue, ...arrayOrderBtns],
        }))

        return
      }

      const minMultiple =
        Math.floor(pageURL / MAX_NUMBER_BTN) * MAX_NUMBER_BTN + 1

      const maxMultiple = Math.ceil(pageURL / MAX_NUMBER_BTN) * MAX_NUMBER_BTN

      prevValue = minMultiple - MAX_NUMBER_BTN

      arrayOrderBtns = pagesIterator(minMultiple, maxMultiple)

      minMultiple === 1
        ? setPagination(prevState => ({
            ...prevState,
            iterator: [...arrayOrderBtns, pages],
          }))
        : setPagination(prevState => ({
            ...prevState,
            iterator: [prevValue, ...arrayOrderBtns, pages],
          }))
    },
  }

  const buttonsPagination = setOrderNumbers[multiplesNumberBtn]
  buttonsPagination()

  if (pages <= MAX_NUMBER_BTN) {
    arrayOrderBtns = pagesIterator(1, pages)

    setPagination(prevState => ({
      ...prevState,
      iterator: [...arrayOrderBtns],
    }))
  }
}
