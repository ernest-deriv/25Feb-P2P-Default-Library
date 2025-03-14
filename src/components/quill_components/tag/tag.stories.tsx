import type { Meta, StoryObj } from '@storybook/react'

import Tag from '.'
const meta = {
  title: 'Tags/Preset',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Label',
    size: 'md',
    isBold: false,
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
      table: {
        disable: true,
      },
    },
    iconClassName: {
      table: {
        disable: true,
      },
    },
    isBold: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorTagFill: Story = {
  args: {
    colorStyle: 'error',
    variant: 'fill',
  },
}

export const WarningTagFill: Story = {
  args: {
    colorStyle: 'warning',
    variant: 'fill',
    children: 'Warning',
  },
}

export const SuccessTagFill: Story = {
  args: {
    colorStyle: 'success',
    variant: 'fill',
    children: 'Success',
  },
}

export const InfoTagFill: Story = {
  args: {
    colorStyle: 'info',
    variant: 'fill',
    children: 'Info',
  },
}

export const ErrorTagOutline: Story = {
  args: {
    colorStyle: 'error',
    variant: 'outline',
    children: 'Error',
  },
}

export const WarningTagOutline: Story = {
  args: {
    colorStyle: 'warning',
    variant: 'outline',
    children: 'Warning',
  },
}

export const SuccessTagOutline: Story = {
  args: {
    colorStyle: 'success',
    variant: 'outline',
    children: 'Success',
  },
}

export const InfoTagOutline: Story = {
  args: {
    colorStyle: 'info',
    variant: 'outline',
    children: 'Info',
  },
}
