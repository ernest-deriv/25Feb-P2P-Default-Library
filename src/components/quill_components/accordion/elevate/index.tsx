import Base from '../base'
import { AccordionProps } from '../types'

import qtMerge from 'qtMerge'

export const Elevate = ({ className, ...otherProps }: AccordionProps) => {
  return (
    <Base
      {...otherProps}
      className={qtMerge(
        'rounded-1200 bg-opacity-white-800 shadow-330',
        className,
      )}
      divider="none"
    />
  )
}

Elevate.displayName = 'AccordionElevate'

export default Elevate
