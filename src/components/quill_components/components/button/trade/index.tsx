import qtMerge from 'qtMerge'
import { forwardRef } from 'react'
import {
  TradeButtonVariantProps,
  baseButtonCVA,
  buttonIconSize,
  buttonSizeCVA,
  tradeButtonCVAs,
  tradeButtonIconFillCVAs,
} from '../button.classes'

import { QuillIconComponent } from 'types'

export interface TradeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TradeButtonVariantProps {
  icon?: QuillIconComponent
  iconPosition?: 'start' | 'end'
}

export const TradeButton = forwardRef<HTMLButtonElement, TradeButtonProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      tradeType = 'buy',
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
          baseButtonCVA({
            fullWidth,
            isLoading,
          }),
          buttonSizeCVA({ size, componentType: 'with-label' }),
          tradeButtonCVAs({ variant, tradeType }),
          className,
        )}
        {...rest}
      >
        {iconPosition === 'start' && Icon && (
          <Icon
            {...buttonIconSize[size]}
            className={tradeButtonIconFillCVAs({ variant, tradeType })}
          />
        )}
        <span className="flex-1">{children}</span>
        {iconPosition === 'end' && Icon && (
          <Icon
            {...buttonIconSize[size]}
            className={tradeButtonIconFillCVAs({ variant, tradeType })}
          />
        )}
      </button>
    )
  },
)

TradeButton.displayName = 'TradeButton'

export default TradeButton
