import { ExcludeAllNull, QuillIconComponent } from 'types'
import { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { tabVariants } from './tab.classnames'

export type TabProps = ComponentProps<'button'> &
  ExcludeAllNull<VariantProps<typeof tabVariants>>

export type TabTriggerProps = TabProps & {
  icon?: QuillIconComponent
}

export type TabSize = NonNullable<TabProps['size']>
