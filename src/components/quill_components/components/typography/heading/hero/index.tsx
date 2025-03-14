import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

type HeroProps = ComponentPropsWithRef<'h1'>

const HeroHeading = forwardRef(
  (
    { className, children, ...rest }: HeroProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h1
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-hero',
          'font-bold',
          'leading-heading-hero',
          'space-y-paragraphSpacing-heading-hero',
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

HeroHeading.displayName = 'Heading.hero'

export default HeroHeading
