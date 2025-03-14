import qtMerge from 'qtMerge'
import { forwardRef } from 'react'

import { QuillIconComponent } from 'types'
import {
  ButtonClassesProps,
  baseButtonCVA,
  buttonColorVariantCVA,
  buttonIconFillCVA,
  buttonIconSize,
  buttonSizeCVA,
} from '../button.classes'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonClassesProps {
  icon?: QuillIconComponent
  iconPosition?: 'start' | 'end'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      colorStyle = 'coral',
      fullWidth = false,
      isLoading = false, // TODO: we need to implement loading state
      children,
      icon: Icon,
      iconPosition,
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
          buttonSizeCVA({ size, componentType: 'with-label' }),
          className,
        )}
        {...rest}
      >
        {iconPosition === 'start' && Icon && (
          <Icon
            {...buttonIconSize[size]}
            className={buttonIconFillCVA({ variant, colorStyle })}
          />
        )}
        <span className="flex-1">{children}</span>
        {iconPosition === 'end' && Icon && (
          <Icon
            {...buttonIconSize[size]}
            className={buttonIconFillCVA({ variant, colorStyle })}
          />
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
