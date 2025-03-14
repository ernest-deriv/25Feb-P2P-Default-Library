import { AccordionProps } from '../types'

import Base from '../base'
import qtMerge from 'qtMerge'

export const Fill = ({ className, ...otherProps }: AccordionProps) => {
  return (
    <Base
      {...otherProps}
      className={qtMerge('rounded-1200 bg-solid-slate-50', className)}
      divider="none"
      expandedColor
    />
  )
}

Fill.displayName = 'AccordionFill'

export default Fill
