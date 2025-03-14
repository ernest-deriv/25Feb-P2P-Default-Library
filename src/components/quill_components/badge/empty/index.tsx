import { HTMLAttributes, forwardRef } from 'react'
import { BadgeBaseCVA, EmptyBadgeSizeCVA } from '../badge.classname'
import qtMerge from 'qtMerge'
import { BadgeEmptyClassProps } from '../types'

export interface EmptyBadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    BadgeEmptyClassProps {}

export const EmptyBadge = forwardRef<HTMLDivElement, EmptyBadgeProps>(
  ({ size, className, colorStyle, ...rest }, ref) => {
    return (
      <span
        className={qtMerge(
          BadgeBaseCVA({
            colorStyle,
          }),
          EmptyBadgeSizeCVA({ size }),
          className,
        )}
        ref={ref}
        {...rest}
      />
    )
  },
)

EmptyBadge.displayName = 'EmptyBadge'
