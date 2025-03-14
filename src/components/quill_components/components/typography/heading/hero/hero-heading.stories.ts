import type { Meta, StoryObj } from '@storybook/react'

import HeroHeading from '.'

const meta = {
  title: 'Typography/Heading/hero',
  component: HeroHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof HeroHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is Hero Heading',
  },
}
