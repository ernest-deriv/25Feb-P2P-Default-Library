import { cva } from 'class-variance-authority'

const paginationBaseClass =
  'focus-visible:outline-offset-2 focus-visible:outline-solid-blue-700 disabled:pointer-events-none flex items-center justify-center group'

export const paginationVariants = cva(paginationBaseClass, {
  variants: {
    variant: {
      number:
        'h-1600 w-1600 rounded-200 hover:bg-opacity-black-100 active:bg-opacity-black-200 aria-[current=true]:bg-solid-slate-1400 aria-[current=true]:hover:bg-solid-slate-1400 text-ellipsis leading-100 text-typography-default aria-[current=true]:text-solid-slate-50 text-50',
      bullet: 'rounded-pill',
    },
  },
  defaultVariants: {
    variant: 'number',
  },
})
