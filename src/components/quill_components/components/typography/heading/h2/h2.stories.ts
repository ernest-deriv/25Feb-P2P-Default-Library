import type { Meta, StoryObj } from '@storybook/react'
import H2 from '.'

const meta = {
  title: 'Typography/Heading/h2',
  component: H2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H2 Heading',
  },
}
