import { QuillSvgProps } from '@deriv/quill-icons'

export type Theme = 'dark' | 'light'

export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type AsProp<T, P> = T extends keyof P
  ? { as?: T; className?: string }
  : never
export type GenericElements<T extends keyof JSX.IntrinsicElements> = Pick<
  JSX.IntrinsicElements,
  T
>

export type VariantClassNames<T extends string, U = string> = { [key in T]: U }

export type OptionalVariantClassNames<T extends string, U = string> = {
  [key in T]?: U
}

export type ExcludeNull<T, Keys extends keyof T> = {
  [K in keyof T]: K extends Keys ? Exclude<T[K], null> : T[K]
}

export type ExcludeAllNull<T> = {
  [K in keyof T]: Exclude<T[K], null>
}

export type ExcludeNullAndUndefined<T, K extends keyof T> = {
  [P in K]-?: NonNullable<T[P]>
} & Omit<T, K>

export type QuillIconComponent = React.ForwardRefExoticComponent<
  Omit<QuillSvgProps, 'ref'>
>
