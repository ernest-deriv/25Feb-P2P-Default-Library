import { cva } from 'class-variance-authority'

export const SectionMessageBaseCVA = cva(
  'rounded-[16px] inline-flex justify-start p-800 text-solid-slate-50',
  {
    variants: {
      colorStyle: {
        success: 'bg-opacity-green-100',
        warning: 'bg-opacity-yellow-100',
        danger: ' bg-opacity-red-100',
        default: ' bg-opacity-black-75',
        information: 'bg-opacity-blue-100',
      },
    },
    defaultVariants: {
      colorStyle: 'default',
    },
  },
)

export const SectionMessageTitleSizeCVA = cva('!font-bold', {
  variants: {
    size: {
      sm: 'text-100',
      md: 'text-200',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
export const SectionMessageDescriptionSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'text-75',
      md: 'text-100',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const SectionMessageLinkSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'text-75',
      md: 'text-100',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
