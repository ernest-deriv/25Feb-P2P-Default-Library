import { VariantProps, cva } from 'class-variance-authority'

import { ExcludeAllNull, VariantClassNames } from 'types'
import { BasicButtonSize, SocialButtonSize } from './types'
import { captionTextSizeClassnames } from 'components/typography/caption'
import {
  bodyTextCVA,
  bodyTextSizeCVA,
} from 'components/typography/text/text.classes'

export const buttonIconSize: VariantClassNames<
  BasicButtonSize,
  { width: number; height: number }
> = {
  sm: {
    width: 12,
    height: 18,
  },
  md: {
    width: 14,
    height: 22,
  },
  lg: {
    width: 14,
    height: 24,
  },
  xl: {
    width: 20,
    height: 30,
  },
}

export const socialButtonIconSize: VariantClassNames<
  SocialButtonSize,
  { width: number; height: number }
> = {
  md: {
    width: 24,
    height: 24,
  },
  lg: {
    width: 24,
    height: 24,
  },
  xl: {
    width: 32,
    height: 32,
  },
}
export const baseButtonCVA = cva(
  [
    'transition-colors',
    'duration-150',
    'ease-in-out',
    'font-bold',
    'disabled:opacity-600',
    'disabled:cursor-not-allowed',
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'text-typography-prominent',
  ],
  {
    variants: {
      isLoading: {
        true: 'cursor-wait',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
  },
)
export const buttonColorVariantCVA = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: 'border-75',
      tertiary: 'underline',
    },
    colorStyle: {
      black: '',
      white: '',
      coral: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    colorStyle: 'coral',
  },
  compoundVariants: [
    {
      variant: 'primary',
      colorStyle: 'coral',
      className:
        'bg-solid-coral-700 text-solid-slate-50 enabled:hover:bg-solid-coral-800 enabled:active:bg-solid-coral-900',
    },
    {
      variant: 'primary',
      colorStyle: 'black',
      className:
        'bg-solid-slate-1400 text-solid-slate-50 enabled:hover:bg-opacity-black-700 enabled:active::bg-opacity-black-800',
    },
    {
      variant: 'primary',
      colorStyle: 'white',
      className:
        'bg-solid-slate-50 text-solid-slate-1400 enabled:hover:bg-opacity-white-800 enabled:active:bg-opacity-white-700',
    },
    {
      variant: 'secondary',
      colorStyle: 'coral',
      className:
        'text-solid-coral-700 enabled:hover:bg-solid-coral-100 enabled:active:bg-solid-coral-200 border-solid-coral-700',
    },
    {
      variant: 'secondary',
      colorStyle: 'black',
      className:
        'text-solid-slate-1400 enabled:hover:bg-opacity-black-100 enabled:active:bg-opacity-black-200 border-solid-slate-1400',
    },
    {
      variant: 'secondary',
      colorStyle: 'white',
      className:
        'text-solid-slate-50 enabled:hover:bg-opacity-white-200 enabled:active:bg-opacity-white-100 border-solid-slate-50',
    },
    {
      variant: 'tertiary',
      colorStyle: 'coral',
      className:
        'text-solid-coral-700 enabled:hover:bg-solid-coral-100 enabled:active:bg-solid-coral-200',
    },
    {
      variant: 'tertiary',
      colorStyle: 'black',
      className:
        'text-solid-slate-1400 enabled:hover:bg-opacity-black-100 enabled:active:bg-opacity-black-200',
    },
    {
      variant: 'tertiary',
      colorStyle: 'white',
      className:
        'text-solid-slate-50 enabled:hover:bg-opacity-black-100 enabled:active:bg-opacity-white-200',
    },
  ],
})
export const buttonSizeCVA = cva('', {
  variants: {
    size: {
      sm: `rounded-400 ${captionTextSizeClassnames}`,
      md: ` rounded-600 ${
        (bodyTextCVA({ bold: true }), bodyTextSizeCVA({ size: 'sm' }))
      }`,
      lg: `rounded-800 ${
        (bodyTextCVA({ bold: true }), bodyTextSizeCVA({ size: 'md' }))
      }`,
      xl: `rounded-1200 ${
        (bodyTextCVA({ bold: true }), bodyTextSizeCVA({ size: 'lg' }))
      }`,
    },
    componentType: {
      'with-label': '',
      'icon-only': '',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      componentType: 'icon-only',
      className: 'h-[24px] min-w-[24px] p-200',
    },
    {
      size: 'md',
      componentType: 'icon-only',
      className: 'h-[32px] min-w-[32px] p-200',
    },
    {
      size: 'lg',
      componentType: 'icon-only',
      className: 'h-[48px] min-w-[48px] p-600',
    },
    {
      size: 'xl',
      componentType: 'icon-only',
      className: 'h-[64px] min-w-[64px] p-800',
    },
    {
      size: 'sm',
      componentType: 'with-label',
      className: 'h-[24px] min-w-[48px] px-400 py-200 gap-200',
    },
    {
      size: 'md',
      componentType: 'with-label',
      className: 'h-[32px] min-w-[64px] px-600 py-300 gap-300',
    },
    {
      size: 'lg',
      componentType: 'with-label',
      className: 'h-[48px] min-w-[96px] px-800 py-600 gap-400 ',
    },
    {
      size: 'xl',
      componentType: 'with-label',
      className: 'h-[64px] min-w-[128px] px-1200 py-800 gap-600 ',
    },
  ],
})

export const buttonIconFillCVA = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      tertiary: '',
    },
    colorStyle: {
      black: '',
      white: '',
      coral: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      colorStyle: 'coral',
      className: 'fill-solid-slate-50',
    },
    {
      variant: 'primary',
      colorStyle: 'black',
      className: 'fill-solid-slate-50',
    },
    {
      variant: 'primary',
      colorStyle: 'white',
      className: 'fill-solid-slate-1400',
    },
    {
      variant: 'secondary',
      colorStyle: 'coral',
      className: 'fill-solid-coral-700',
    },
    {
      variant: 'secondary',
      colorStyle: 'black',
      className: 'fill-solid-slate-1400',
    },
    {
      variant: 'secondary',
      colorStyle: 'white',
      className: 'fill-solid-slate-50',
    },
    {
      variant: 'tertiary',
      colorStyle: 'coral',
      className: 'fill-solid-coral-700',
    },
    {
      variant: 'tertiary',
      colorStyle: 'black',
      className: 'fill-solid-slate-1400',
    },
    {
      variant: 'tertiary',
      colorStyle: 'white',
      className: 'fill-solid-slate-50',
    },
  ],
})

export const socialButtonSize = cva('', {
  variants: {
    size: {
      md: `rounded-600 h-[32px] min-w-[32px] ${bodyTextSizeCVA({
        size: 'sm',
      })}`,
      lg: `rounded-800 h-[48px] min-w-[48px] ${bodyTextSizeCVA({
        size: 'md',
      })}`,
      xl: `rounded-1200 h-[64px] min-w-[64px]  ${bodyTextSizeCVA({
        size: 'lg',
      })}`,
    },
    componentType: {
      'with-label': '',
      'icon-only': '',
    },
  },
  compoundVariants: [
    {
      size: 'md',
      componentType: 'with-label',
      className: 'p-600 gap-300',
    },
    {
      size: 'lg',
      componentType: 'with-label',
      className: 'p-800 gap-400',
    },
    {
      size: 'xl',
      componentType: 'with-label',
      className: 'p-1200 gap-600',
    },
  ],
})

export const appleSocialButtonCVA = cva('', {
  variants: {
    variant: {
      primary:
        'bg-solid-slate-1400 hover:bg-opacity-black-700 active:bg-opacity-black-800 text-solid-slate-50',
      secondary:
        'border-75 border-opacity-black-100 hover:bg-opacity-black-100 active:bg-opacity-black-200 ',
    },
  },
})

export const facebookSocialButtonCVA = cva('', {
  variants: {
    variant: {
      primary:
        'bg-[#1877F2] hover:bg-[#166DDF] active:bg-[#1464CB] text-solid-slate-50',
      secondary:
        'border-75 border-opacity-black-100 hover:bg-opacity-black-100 active:bg-opacity-black-200 ',
    },
  },
})

export const googleSocialButtonCVA = cva('', {
  variants: {
    variant: {
      primary:
        'bg-opacity-black-100 hover:bg-opacity-black-100 active:bg-opacity-black-200',
      secondary:
        'border-75 border-opacity-black-100 hover:bg-opacity-black-100 active:bg-opacity-black-200 ',
    },
  },
})

export const tradeButtonCVAs = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: 'border-75',
      tertiary: 'underline',
    },
    tradeType: {
      buy: '',
      sell: '',
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      tradeType: 'buy',
      className:
        'bg-solid-emerald-700 text-solid-slate-50 hover:bg-solid-emerald-800 active:bg-solid-emerald-900',
    },
    {
      variant: 'primary',
      tradeType: 'sell',
      className:
        'bg-solid-cherry-700 text-solid-slate-50 hover:bg-solid-cherry-800 active:bg-solid-cherry-900',
    },
    {
      variant: 'secondary',
      tradeType: 'buy',
      className:
        'border-solid-emerald-700 text-solid-emerald-700 hover:bg-opacity-emerald-100 active:bg-opacity-emerald-200',
    },
    {
      variant: 'secondary',
      tradeType: 'sell',
      className:
        'border-solid-cherry-700 text-solid-cherry-700 hover:bg-opacity-cherry-100 active:bg-opacity-cherry-200',
    },
    {
      variant: 'tertiary',
      tradeType: 'buy',
      className:
        'text-solid-emerald-700 hover:bg-opacity-emerald-100 active:bg-opacity-emerald-200',
    },
    {
      variant: 'tertiary',
      tradeType: 'sell',
      className:
        'text-solid-cherry-700 hover:bg-opacity-cherry-100 active:bg-opacity-cherry-200',
    },
  ],

  defaultVariants: {
    variant: 'primary',
    tradeType: 'buy',
  },
})

export const tradeButtonIconFillCVAs = cva('', {
  variants: {
    variant: {
      primary: 'fill-solid-slate-50',
      secondary: '',
      tertiary: '',
    },
    tradeType: {
      buy: '',
      sell: '',
    },
  },
  compoundVariants: [
    {
      variant: 'secondary',
      tradeType: 'sell',
      className: 'fill-solid-cherry-700',
    },
    {
      variant: 'secondary',
      tradeType: 'buy',
      className: 'fill-solid-emerald-700',
    },
    {
      variant: 'tertiary',
      tradeType: 'sell',
      className: 'fill-solid-cherry-700',
    },
    {
      variant: 'tertiary',
      tradeType: 'buy',
      className: 'fill-solid-emerald-700',
    },
  ],
})

export type ButtonClassesProps = ExcludeAllNull<
  VariantProps<typeof baseButtonCVA> &
    VariantProps<typeof buttonColorVariantCVA> &
    VariantProps<typeof buttonSizeCVA>
>

export type SocialButtonClassesProps = ExcludeAllNull<
  VariantProps<typeof baseButtonCVA> &
    Omit<VariantProps<typeof socialButtonSize>, 'componentType'>
>

export type SocialButtonVariantProps = ExcludeAllNull<
  VariantProps<typeof appleSocialButtonCVA>
>

export type TradeButtonVariantProps = ExcludeAllNull<
  VariantProps<typeof baseButtonCVA> &
    VariantProps<typeof tradeButtonCVAs> &
    VariantProps<typeof buttonSizeCVA>
>
