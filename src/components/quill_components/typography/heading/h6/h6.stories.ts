import type { Meta, StoryObj } from '@storybook/react'
import H6 from '.'

const meta = {
  title: 'Typography/Heading/h6',
  component: H6,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H6>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H6 Heading',
  },
}
