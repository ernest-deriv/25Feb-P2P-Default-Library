import { ReactNode } from 'react'
import Flush from './flush'
import Fill from './fill'
import Outline from './outline'
import Elevate from './elevate'

export type AccordionVariants = {
  Flush: typeof Flush
  Fill: typeof Fill
  Outline: typeof Outline
  Elevate: typeof Elevate
}

const Base: AccordionVariants = ({ children }: { children: ReactNode }) => {
  return children
}

Base.Flush = Flush
Base.Fill = Fill
Base.Outline = Outline
Base.Elevate = Elevate

export default Base
export * from './tab'
export * from './types'
