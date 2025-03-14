import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

type HeadingOneProps = ComponentPropsWithRef<'h5'>

const H5 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h5
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-h5',
          'font-bold',
          'leading-heading-h5',
          'space-y-paragraphSpacing-heading-h5',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h5>
    )
  },
)

H5.displayName = 'Heading.h5'

export default H5
