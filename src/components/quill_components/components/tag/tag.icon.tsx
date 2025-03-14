import {
  BaseTagIconProps,
  BaseTagProps,
  BaseTagSizeProps,
  TagIconFillCVA,
  TagIconSizes,
  TagIcons,
} from './tag.classnames'
import { QuillIconComponent } from 'types'

export interface TagIconProps extends BaseTagSizeProps, BaseTagIconProps {
  icon?: QuillIconComponent
  className?: string
  isBold: BaseTagProps['isBold']
}

export const TagIcon = ({
  icon: Icon,
  size,
  className,
  isBold,
  colorStyle,
}: TagIconProps) => {
  let IconComponent: QuillIconComponent | undefined
  if (colorStyle === 'custom') {
    IconComponent = Icon
  } else {
    IconComponent =
      TagIcons[colorStyle ?? 'success'][isBold ? 'bold' : 'regular']
  }
  return (
    <>
      {Icon && colorStyle === 'custom' ? (
        <Icon className={className} {...TagIconSizes[size ?? 'md']} />
      ) : (
        <>
          {IconComponent && (
            <IconComponent
              className={TagIconFillCVA({ colorStyle })}
              {...TagIconSizes[size ?? 'md']}
            />
          )}
        </>
      )}
    </>
  )
}

export default TagIcon
