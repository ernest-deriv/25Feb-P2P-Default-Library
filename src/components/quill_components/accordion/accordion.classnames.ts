import { cva } from 'class-variance-authority'

export const accordionBaseClassNames =
  'flex flex-col w-full overflow-hidden focus-visible:outline-1 focus-visible:outline-opacity-red-100 '

export const accordionStateClassNames =
  'hover:bg-opacity-black-75 active:bg-opacity-black-100 border-opacity-black-100'

export const accordionTransitionClassNames =
  'transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]'

export const accordionDisabledClassNames = 'pointer-events-none'

export const accordionBaseVariant = cva(accordionBaseClassNames, {
  variants: {
    divider: {
      both: 'border-100 border-x-none border-b-opacity-black-100 border-t-opacity-black-100',
      bottom: 'border-100 border-b-opacity-black-100 !border-t-none',
      none: '',
    },
    disabled: {
      true: 'pointer-events-none fill-opacity-black-300',
    },
    expandedColor: {
      true: '!bg-opacity-black-75',
    },
  },
  defaultVariants: {
    divider: 'both',
    expandedColor: false,
  },
})

export const AccordionSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'md',
      md: 'lg',
      lg: 'xs',
    },
  },
})
