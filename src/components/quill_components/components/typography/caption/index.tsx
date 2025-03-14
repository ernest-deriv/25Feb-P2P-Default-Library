import qtMerge from 'qtMerge'
import { HTMLAttributes, forwardRef } from 'react'
import { BodyTextProps } from '../text/text.classes'

export interface CaptionTextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    BodyTextProps {}

export const captionTextSizeClassnames = 'text-caption'

export const CaptionText = forwardRef<HTMLParagraphElement, CaptionTextProps>(
  ({ bold, italic, underline, className, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={qtMerge(
          captionTextSizeClassnames,
          'text-typography-prominent',
          bold ? 'font-bold' : 'font-regular',
          italic ? 'italic' : 'not-italic',
          underline && 'underline',
          className,
        )}
        {...rest}
      />
    )
  },
)

CaptionText.displayName = 'CaptionText'

export default CaptionText
