import { VariantProps } from 'class-variance-authority'
import { ExcludeAllNull } from 'types'
import {
  BadgeBaseCVA,
  EmptyBadgeSizeCVA,
  LabelBadgeSizeCVA,
} from './badge.classname'

export type BadgeEmptyClassProps = ExcludeAllNull<
  VariantProps<typeof BadgeBaseCVA> & VariantProps<typeof EmptyBadgeSizeCVA>
>

export type BadgeLabelClassProps = ExcludeAllNull<
  VariantProps<typeof BadgeBaseCVA> & VariantProps<typeof LabelBadgeSizeCVA>
>

export type BadgeSize = BadgeEmptyClassProps['size']
export type BadgeColorStyle = BadgeEmptyClassProps['colorStyle']
