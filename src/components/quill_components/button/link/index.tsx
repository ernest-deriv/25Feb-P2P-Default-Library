import qtMerge from 'qtMerge'
import { forwardRef } from 'react'
import {
  ButtonClassesProps,
  baseButtonCVA,
  buttonColorVariantCVA,
  buttonIconFillCVA,
  buttonIconSize,
  buttonSizeCVA,
} from '../button.classes'

import { QuillIconComponent } from 'types'

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonClassesProps {
  icon?: QuillIconComponent
  iconPosition?: 'start' | 'end'
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
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
      <a
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
      </a>
    )
  },
)

LinkButton.displayName = 'LinkButton'

export default LinkButton
