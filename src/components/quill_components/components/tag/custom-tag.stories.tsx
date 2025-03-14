import type { Meta, StoryObj } from '@storybook/react'
import { LabelPairedPlaceholderSmRegularIcon } from '@deriv/quill-icons/LabelPaired'

import Tag from '.'
const meta = {
  title: 'Tags/Custom',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Custom',
    size: 'md',
    isBold: true,
    variant: 'custom',
    colorStyle: 'custom',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
    },
    icon: {
      table: {
        disable: true,
      },
    },
    className: {
      name: 'Class Name',
      control: 'text',
    },
    iconClassName: {
      table: {
        disable: true,
      },
    },
    isBold: {
      control: 'boolean',
    },
    colorStyle: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const CustomTagFillWithIcon: Story = {
  args: {
    variant: 'custom',
    icon: LabelPairedPlaceholderSmRegularIcon,
    className:
      'bg-gradient-to-r from-solid-blue-100 via-solid-blue-300 to-solid-blue-500 text-solid-blue-1200',
    iconClassName: 'fill-solid-blue-1200',
  },
}

export const CustomTagWithoutIcon: Story = {
  args: {
    variant: 'custom',
    colorStyle: 'custom',
    className: 'bg-solid-yellow-100 text-solid-yellow-1200',
    isBold: false,
    size: 'lg',
  },
}

export const CustomTagOutlineWithoutIcon: Story = {
  args: {
    variant: 'outline',
    icon: LabelPairedPlaceholderSmRegularIcon,
    className: 'border-solid-red-1200 text-solid-red-1200',
    iconClassName: 'fill-solid-red-1200',
    isBold: false,
    size: 'sm',
  },
}
