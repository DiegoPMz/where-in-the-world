import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useSegmentDataPage = ({ data, pageSize }) => {
  const { regionPage, page } = useParams()
  const [totalPages, setTotalPages] = useState(null)
  const [segmentedData, setSegmentedData] = useState(null)

  const segmentData = (page = 1) => {
    const currentPage = parseInt(page)
    const pages = Math.ceil(data.length / pageSize)

    const startIndex = pageSize * (currentPage - 1)
    const endIndex = pageSize * currentPage
    const segment = data.slice(startIndex, endIndex)

    return { pages, segment }
  }

  useEffect(() => {
    if (!data) return

    if (page) {
      const { pages, segment } = segmentData(page)
      setTotalPages(pages)
      setSegmentedData(segment)
    } else if (regionPage) {
      const { pages, segment } = segmentData(regionPage)
      setTotalPages(pages)
      setSegmentedData(segment)
    } else {
      const { pages, segment } = segmentData()
      setTotalPages(pages)
      setSegmentedData(segment)
    }
  }, [data, page, regionPage])

  return { totalPages, segmentedData }
}
