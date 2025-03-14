import { AccordionProps } from '../types'

import Base from '../base'
import qtMerge from 'qtMerge'

export const Outline = ({ className, ...otherProps }: AccordionProps) => {
  return (
    <Base
      {...otherProps}
      className={qtMerge(
        'rounded-1200 border-sm border-opacity-black-100',
        className,
      )}
    />
  )
}

Outline.displayName = 'AccordionOutline'

export default Outline
