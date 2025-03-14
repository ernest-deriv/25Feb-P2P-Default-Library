import { qtMerge } from 'qtMerge'
import { HTMLAttributes, forwardRef } from 'react'
import {
  BodyTextProps,
  BodyTextSizeProps,
  bodyTextCVA,
  bodyTextParagraphSpacingCVA,
  bodyTextSizeCVA,
} from './text.classes'

export interface BodyTypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    BodyTextProps,
    BodyTextSizeProps {}

export const Text = forwardRef<HTMLParagraphElement, BodyTypographyProps>(
  (
    {
      size = 'md',
      className,
      bold = false,
      italic = false,
      underline = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        className={qtMerge(
          bodyTextCVA({
            colorStyle: 'default',
            bold,
            italic,
            underline,
          }),
          bodyTextSizeCVA({ size }),
          bodyTextParagraphSpacingCVA({ size }),
          className,
        )}
        {...rest}
      />
    )
  },
)

Text.displayName = 'Text'

export default Text
