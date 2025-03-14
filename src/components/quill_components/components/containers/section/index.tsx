import clsx from 'clsx'
import { AsProp, GenericElements, UnionToIntersection } from 'types'

export type SectionElements = GenericElements<'section' | 'div' | 'article'>

export type SectionAsProp<T> = AsProp<T, SectionElements>

export type SectionProps<T extends keyof SectionElements> = SectionAsProp<T> &
  UnionToIntersection<SectionElements[T]>

export const Section = <T extends keyof SectionElements>({
  as,
  className,
  ...rest
}: SectionProps<T>) => {
  const Component = as || 'section'
  return <Component className={clsx('w-full', className)} {...rest} />
}

export default Section
