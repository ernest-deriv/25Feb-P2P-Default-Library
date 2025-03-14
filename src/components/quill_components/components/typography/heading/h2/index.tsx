import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

type HeadingOneProps = ComponentPropsWithRef<'h2'>

const H2 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h2
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-h2',
          'font-bold',
          'leading-heading-h2',
          'space-y-paragraphSpacing-heading-h2',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h2>
    )
  },
)

H2.displayName = 'Heading.h2'

export default H2
