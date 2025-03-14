import type { Meta, StoryObj } from '@storybook/react'
import H4 from '.'

const meta = {
  title: 'Typography/Heading/h4',
  component: H4,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H4 Heading',
  },
}
