import { VariantProps, cva } from 'class-variance-authority'
import { ExcludeNull } from 'types'

export const bodyTextSizeCVA = cva('', {
  variants: {
    size: {
      sm: 'text-body-sm leading-body-sm',
      md: 'text-body-md leading-body-md',
      lg: 'text-body-lg leading-body-lg',
      xl: 'text-body-xl leading-body-xl',
    },
  },
})

export const bodyTextCVA = cva('', {
  variants: {
    bold: {
      true: 'font-bold',
      false: 'font-regular',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline',
    },
    colorStyle: {
      prominent: 'text-typography-prominent',
      default: 'text-typography-default',
      subtle: 'text-typography-subtle',
      disabled: 'text-typography-disabled',
    },
  },
  defaultVariants: {
    colorStyle: 'default',
    underline: false,
    italic: false,
    bold: false,
  },
})

export const bodyTextParagraphSpacingCVA = cva('', {
  variants: {
    size: {
      sm: 'space-y-paragraphSpacing-body-sm',
      md: 'space-y-paragraphSpacing-body-md',
      lg: 'space-y-paragraphSpacing-body-lg',
      xl: 'space-y-paragraphSpacing-body-xl',
    },
  },
})

export type BodyTextProps = ExcludeNull<
  VariantProps<typeof bodyTextCVA>,
  'colorStyle' | 'bold' | 'italic' | 'underline'
>
export type BodyTextSizeProps = ExcludeNull<
  VariantProps<typeof bodyTextSizeCVA>,
  'size'
>
