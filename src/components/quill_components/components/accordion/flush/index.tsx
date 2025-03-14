import { AccordionProps } from '../types'

import Base from '../base'
import qtMerge from 'qtMerge'

export const Flush = ({ className, ...otherProps }: AccordionProps) => {
  return (
    <Base
      divider="bottom"
      className={qtMerge('border-x-none', className)}
      contentClassname="rounded-50"
      expandedColor
      {...otherProps}
    />
  )
}

Flush.displayName = 'AccordionFlush'

export default Flush
