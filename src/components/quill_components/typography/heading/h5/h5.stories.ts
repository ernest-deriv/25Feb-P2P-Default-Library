import type { Meta, StoryObj } from '@storybook/react'
import H5 from '.'

const meta = {
  title: 'Typography/Heading/h5',
  component: H5,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H5 Heading',
  },
}
