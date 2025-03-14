import type { Meta, StoryObj } from '@storybook/react'
import Badge from '..'
const meta = {
  title: 'Badges/Empty',
  component: Badge.Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge.Empty>

export default meta
type Story = StoryObj<typeof meta>

export const SuccessBadge: Story = {
  args: {
    size: 'sm',
    colorStyle: 'success',
  },
}
export const warningBadge: Story = {
  args: {
    size: 'md',
    colorStyle: 'warning',
  },
}
export const DangerBadge: Story = {
  args: {
    size: 'lg',
    colorStyle: 'danger',
  },
}
