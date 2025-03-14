import { useEffect, useMemo, useState } from 'react'
import {
  StandaloneChevronLeftRegularIcon,
  StandaloneChevronRightRegularIcon,
} from '@deriv/quill-icons/Standalone'
import qtMerge from 'qtMerge'
import { usePaginationRange } from 'hooks/usePaginationRange'
import PaginationButton from './pagination-button'
import { paginationVariants } from './pagination.classnames'
import { PaginationProps } from './pagination.types'

/**
 * Component that can divide large lists of data into smaller more manageable pages.
 * @name Pagination
 * @param className - Styles to be applied to Pagination body
 * @param contentPerPage - Number of items to be displayed per page
 * @param contentLength - Total length of data to be paginated
 * @param onPagination - Function to handle pagination event. It passes an object with currentPage and totalPageCount
 * @param variant - Variant of Pagination.
 *
 * @example
 * <Pagination className="pagination__container" contentPerPage={10}
 * contentLength={100} variant="number" onPagination={handlePagination}>
 * />
 */
export const Pagination = ({
  className,
  contentPerPage,
  contentLength,
  onPagination,
  variant = 'number',
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPageCount = useMemo(() => {
    const dataToDisplay = contentPerPage > 0 ? contentPerPage : 1
    return Math.ceil(contentLength / dataToDisplay)
  }, [contentLength, contentPerPage])

  const paginationRange = usePaginationRange({
    totalPageCount,
    currentPage,
    variant,
  })

  useEffect(() => {
    onPagination({ currentPage, totalPageCount })
  }, [currentPage, onPagination, totalPageCount])

  const goToNextPage = () => setCurrentPage((page) => page + 1)

  const gotToPreviousPage = () => setCurrentPage((page) => page - 1)

  const changePage = (event: string | null) => {
    const pageNumber = Number(event)
    setCurrentPage(pageNumber)
  }

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className={qtMerge('flex items-center justify-center gap-400', className)}
    >
      <button
        onClick={gotToPreviousPage}
        disabled={currentPage === 1}
        className={paginationVariants({ variant })}
        aria-label="Go to Previous page"
      >
        <StandaloneChevronLeftRegularIcon
          iconSize="sm"
          className="fill-solid-slate-1400 group-disabled:fill-opacity-black-300"
        />
      </button>
      {paginationRange.map((pageNumber, index) => (
        <PaginationButton
          key={`${pageNumber}_${index}`}
          pageNumber={pageNumber}
          variant={variant}
          currentPage={currentPage}
          handleOnClick={changePage}
        />
      ))}
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPageCount}
        className={paginationVariants({ variant })}
        aria-label="Go to Next page"
      >
        <StandaloneChevronRightRegularIcon
          iconSize="sm"
          className="fill-solid-slate-1400 group-disabled:fill-opacity-black-300"
        />
      </button>
    </nav>
  )
}

export default Pagination
