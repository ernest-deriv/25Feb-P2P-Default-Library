import type { Meta, StoryObj } from '@storybook/react'
import H3 from '.'

const meta = {
  title: 'Typography/Heading/h3',
  component: H3,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H3>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H3 Heading',
  },
}
