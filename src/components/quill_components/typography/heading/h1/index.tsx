import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
export type HeadingOneProps = ComponentPropsWithRef<'h1'>

const H1 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h1
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-h1',
          'font-bold',
          'leading-heading-h1',
          'space-y-paragraphSpacing-heading-h1',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h1>
    )
  },
)

H1.displayName = 'Heading.h1'

export default H1
