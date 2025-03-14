import { type VariantProps } from 'class-variance-authority'
import { paginationVariants } from './pagination.classnames'
import { ExcludeNull } from 'types'

export type PaginationVariantProps = VariantProps<typeof paginationVariants>

export type TPaginationEvent = {
  currentPage: number
  totalPageCount: number
}

export interface PaginationProps
  extends ExcludeNull<
    Required<Pick<PaginationVariantProps, 'variant'>>,
    'variant'
  > {
  className?: string
  contentPerPage: number
  contentLength: number
  onPagination: (props: TPaginationEvent) => void
}
