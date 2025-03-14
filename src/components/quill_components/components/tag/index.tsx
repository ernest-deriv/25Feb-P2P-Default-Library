import { forwardRef, HTMLAttributes } from 'react'
import { TagClassNamesCVA, TagProps, TagSizeCVA } from './tag.classnames'
import qtMerge from 'qtMerge'
import TagIcon from './tag.icon'
import { QuillIconComponent } from 'types'

export interface TagComponentProps
  extends HTMLAttributes<HTMLDivElement>,
    TagProps {
  icon?: QuillIconComponent
  iconClassName?: string
}

const Tag = forwardRef<HTMLDivElement, TagComponentProps>(
  (
    {
      children,
      className,
      variant,
      size = 'md',
      colorStyle = 'success',
      isBold = false,
      icon,
      iconClassName,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={qtMerge(
          TagClassNamesCVA({
            variant,
            className,
            colorStyle,
            isBold,
          }),
          TagSizeCVA({ size }),
          className,
        )}
        {...rest}
        ref={ref}
      >
        <TagIcon
          isBold={isBold}
          className={iconClassName}
          icon={icon}
          colorStyle={colorStyle}
          size={size}
        />
        {children}
      </div>
    )
  },
)

Tag.displayName = 'Tag'

export default Tag
