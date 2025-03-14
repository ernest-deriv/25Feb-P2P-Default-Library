import type { Meta, StoryObj } from '@storybook/react'
import H1 from '.'

const meta = {
  title: 'Typography/Heading/h1',
  component: H1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H1 Heading',
  },
}
