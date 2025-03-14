import { useMemo } from 'react'
export const DOTS = '...'

/**
 * Function to get the pagination range
 * @param start - starting page
 * @param end - ending page
 * @returns - array of page numbers
 */
const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}

type UsePaginationRangeProps = {
  currentPage: number
  totalPageCount: number
  variant: 'number' | 'bullet'
}

export const usePaginationRange = ({
  currentPage,
  totalPageCount,
  variant,
}: UsePaginationRangeProps) => {
  const TOTAL_PAGES_TO_DISPLAY = 5
  const FIRST_PAGE_INDEX = 1
  const START_END_PAGE_COUNT = 2
  const paginationRange: Array<number | '...'> = useMemo(() => {
    if (variant === 'bullet') {
      return range(FIRST_PAGE_INDEX, totalPageCount)
    }

    if (totalPageCount >= TOTAL_PAGES_TO_DISPLAY + 1) {
      /**
       * Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
       * Compute the position of ellipses
       */
      const leftSiblingIndex = Math.max(currentPage - 1, 1)
      const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount)
      const shouldShowLeftDots = leftSiblingIndex > START_END_PAGE_COUNT
      const shouldShowRightDots =
        rightSiblingIndex <= totalPageCount - START_END_PAGE_COUNT

      /**
     * Case 1: If the current page is less than the total pages to display
        No left ellipses to be shown, but rights ellipses to be shown
     */
      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftRange = range(FIRST_PAGE_INDEX, TOTAL_PAGES_TO_DISPLAY)
        return [...leftRange, DOTS, totalPageCount]
      }

      /**
     * Case 2: If the current page is greater than the total pages to display
        No right ellipses to be shown, but left ellipses to be shown
     */
      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightRange = range(
          totalPageCount - TOTAL_PAGES_TO_DISPLAY + 1,
          totalPageCount,
        )
        return [FIRST_PAGE_INDEX, DOTS, ...rightRange]
      }

      /**
     * Case 3: If the current page is somewhere in the middle
        Both left and right ellipses to be shown
     */
      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex)
        return [FIRST_PAGE_INDEX, DOTS, ...middleRange, DOTS, totalPageCount]
      }
    }

    /**
     * Case 4: If the number of pages is less than the page numbers we want to show in PaginationComponent
     */
    return range(FIRST_PAGE_INDEX, totalPageCount)
  }, [currentPage, totalPageCount, variant])
  return paginationRange
}
