import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull, QuillIconComponent } from 'types'
import { AnchorHTMLAttributes } from 'react'
import { linkCva } from './link.classnames'

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ExcludeNull<
      VariantProps<typeof linkCva>,
      'colorStyle' | 'size' | 'disabled'
    > {
  icon?: QuillIconComponent
  hasIcon?: boolean
}
export type LinkSize = 'caption' | 'sm' | 'md' | 'lg' | 'xl'

export type colorStyle = LinkProps['colorStyle']

export type LinkTestSize = LinkProps['size']

export type LinkDisabled = LinkProps['disabled']
