import qtMerge from 'qtMerge'
import { forwardRef } from 'react'

import { QuillIconComponent } from 'types'
import {
  baseButtonCVA,
  ButtonClassesProps,
  buttonColorVariantCVA,
  buttonIconFillCVA,
  buttonIconSize,
  buttonSizeCVA,
} from '../button.classes'

export interface BasicIconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    ButtonClassesProps {
  icon: QuillIconComponent
}

export const IconButton = forwardRef<HTMLButtonElement, BasicIconButtonProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      colorStyle = 'coral',
      fullWidth = false,
      isLoading = false, // TODO: we need to implement loading state
      icon: Icon,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={qtMerge(
          baseButtonCVA({ fullWidth, isLoading }),
          buttonColorVariantCVA({ variant, colorStyle }),
          buttonSizeCVA({ size, componentType: 'icon-only' }),
          className,
        )}
        {...rest}
      >
        <Icon
          {...buttonIconSize[size]}
          className={buttonIconFillCVA({ variant, colorStyle })}
        />
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'

export default IconButton
