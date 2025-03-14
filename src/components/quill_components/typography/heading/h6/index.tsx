import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

type HeadingOneProps = ComponentPropsWithRef<'h6'>

const H6 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h6
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-h6',
          'font-bold',
          'leading-heading-h6',
          'space-y-paragraphSpacing-heading-h6',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h6>
    )
  },
)

H6.displayName = 'Heading.h6'

export default H6
