import {
  StandaloneCircleFillIcon,
  StandaloneEllipsisRegularIcon,
} from '@deriv/quill-icons/Standalone'
import { paginationVariants } from './pagination.classnames'
import { DOTS } from 'hooks/usePaginationRange'
import { PaginationProps } from './pagination.types'

interface PaginationButtonProps extends Pick<PaginationProps, 'variant'> {
  pageNumber: number | string
  currentPage: number
  handleOnClick: (event: string | null) => void
}

/**
 * Component to render type of Pagination button based on variant and page number.
 * @name PaginationButton
 * @param {number} currentPage - Selected page number
 * @param {function} handleOnClick - Function to handle click action on the Pagination button
 * @param {number} pageNumber - Page number
 * @param {string} variant - Variant of Pagination
 */
const PaginationButton = ({
  currentPage,
  handleOnClick,
  pageNumber,
  variant,
}: PaginationButtonProps) => {
  if (variant === 'bullet') {
    return (
      <button
        onClick={() => handleOnClick(String(pageNumber))}
        className={paginationVariants({ variant })}
        aria-label={`Go to page ${pageNumber}`}
        aria-current={currentPage === pageNumber}
      >
        <StandaloneCircleFillIcon
          iconSize="sm"
          height={12}
          width={12}
          className="active:fill-opacity-black-200 group-aria-[current=false]:fill-opacity-black-100 group-aria-[current=true]:fill-solid-slate-1400"
        />
      </button>
    )
  }

  if (pageNumber === DOTS) {
    return (
      <button
        disabled
        className={paginationVariants({ variant })}
        aria-label="Hidden pages"
      >
        <StandaloneEllipsisRegularIcon fill="black" iconSize="sm" />
      </button>
    )
  }

  return (
    <button
      aria-label={`Go to page ${pageNumber}`}
      aria-current={currentPage === pageNumber}
      onClick={(e) => handleOnClick(e.currentTarget.textContent)}
      className={paginationVariants({
        variant,
      })}
    >
      {pageNumber}
    </button>
  )
}

export default PaginationButton
