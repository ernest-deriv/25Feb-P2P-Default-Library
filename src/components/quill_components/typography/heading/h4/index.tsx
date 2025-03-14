import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

type HeadingOneProps = ComponentPropsWithRef<'h4'>

const H4 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h4
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-h4',
          'font-bold',
          'leading-heading-h4',
          'space-y-paragraphSpacing-heading-h4',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h4>
    )
  },
)

H4.displayName = 'Heading.h4'

export default H4
