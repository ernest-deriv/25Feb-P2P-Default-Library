import { cva } from 'class-variance-authority'

export const BadgeBaseCVA = cva(
  'rounded-[50%] inline-flex items-center justify-center font-bold text-solid-slate-50 text-center',
  {
    variants: {
      colorStyle: {
        success: 'bg-solid-green-700',
        warning: 'bg-solid-yellow-700',
        danger: ' bg-solid-red-700',
      },
    },
    defaultVariants: {
      colorStyle: 'success',
    },
  },
)

export const EmptyBadgeSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'h-400 w-400',
      md: 'h-800 w-800',
      lg: 'h-1200 w-1200',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const LabelBadgeSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'h-900 min-w-[18px] text-caption',
      md: 'h-1200 min-w-[24px] text-body-sm',
      lg: 'h-1800 min-w-[36px] text-body-md',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
