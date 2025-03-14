import { ReactNode } from 'react'
import { ExcludeNull, QuillIconComponent } from 'types'
import { type VariantProps } from 'class-variance-authority'
import { accordionBaseVariant } from './accordion.classnames'
import {
  ExtendedStandardSizes,
  LargeSizes,
  StandardSizes,
} from 'types/generics'
import { AccordionVariants } from '.'

export interface AccordionProps extends AccordionPropsExcludingNull {
  id?: string
  className?: string
  title?: string
  subtitle?: string
  icon?: QuillIconComponent
  iconSize?: ExtendedStandardSizes
  size?: StandardSizes
  expanded?: boolean
  divider?: AccordionDivider
  disabled?: boolean
  contentClassname?: string
  expandedColor?: boolean
  content?: () => ReactNode
  customContent?: () => ReactNode
  onExpand?: (e: boolean, i: string) => void
}
export interface AccordionTabProps extends Omit<AccordionProps, 'content'> {
  tab?: Tab
  className?: string
  variant?: keyof AccordionVariants
  content: {
    className?: string
    data: AccordionProps[][]
  }
  multiCollapse?: boolean
}

export type TBaseAccordionVariant = VariantProps<typeof accordionBaseVariant>

type AccordionPropsExcludingNull = ExcludeNull<TBaseAccordionVariant, 'divider'>

export type Tab = {
  align?: TabAlign
  data: TabData[]
}

export type TabData = {
  id: number
  title: string
}

export type TabAlign = 'center' | 'end'

export type AccordionDivider = 'none' | 'both' | 'bottom'

export const sizeVariant: Record<StandardSizes, LargeSizes> = {
  sm: 'md',
  md: 'lg',
  lg: 'xl',
}
