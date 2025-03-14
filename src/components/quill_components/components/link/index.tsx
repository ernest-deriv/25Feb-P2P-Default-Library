import qtMerge, { qtJoin } from 'qt-merge'
import { forwardRef } from 'react'
import {
  LinkIconSizes,
  LinkIconStandaloneSizes,
  linkCva,
  linkIconCva,
  linkRightIconCva,
} from './link.classnames'

import { LabelPairedChevronRightSmRegularIcon } from '@deriv/quill-icons/LabelPaired'
import { LinkProps } from './types'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      colorStyle = 'black',
      size = 'sm',
      disabled,
      icon: Icon,
      hasIcon = false,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        {...rest}
        className={qtMerge(linkCva({ colorStyle, size, disabled, className }))}
      >
        {Icon && (
          <Icon
            className={qtJoin(linkIconCva({ colorStyle }))}
            data-testid="dt-link-icon"
            {...LinkIconStandaloneSizes[size]}
          />
        )}
        {children}

        {hasIcon && (
          <LabelPairedChevronRightSmRegularIcon
            className={qtJoin(linkRightIconCva({ colorStyle }))}
            data-testid="dt-link-chevron"
            {...LinkIconSizes[size]}
          />
        )}
      </a>
    )
  },
)

Link.displayName = 'Link'

export default Link
