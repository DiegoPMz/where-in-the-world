export const pagesIterator = (paginationTo, paginationFrom) => {
  const newIterator = []
  for (let index = paginationTo; index <= paginationFrom; index++) {
    newIterator.push(index)
  }

  return [...newIterator]
}
