import { forwardRef } from 'react'
import SelectableChip from '../selectable-chip'
import type { DismissibleChipProps } from '../types'

export const DismissibleChip = forwardRef<
  HTMLButtonElement,
  DismissibleChipProps
>(({ children, icon, onDismiss, labelTag, size, disabled, ...rest }, ref) => {
  return (
    <SelectableChip
      onDismiss={onDismiss}
      icon={icon}
      ref={ref}
      labelTag={labelTag}
      size={size}
      disabled={disabled}
      dismissible
      {...rest}
    >
      {children}
    </SelectableChip>
  )
})

DismissibleChip.displayName = 'DismissibleChip'

export default DismissibleChip
