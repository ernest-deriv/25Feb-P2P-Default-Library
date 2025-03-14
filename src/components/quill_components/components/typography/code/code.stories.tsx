import type { Meta, StoryObj } from '@storybook/react'
import { CodeText } from '.'

const meta = {
  title: 'Typography/Text/Code',
  component: CodeText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'Text', control: 'text' },
  },
  args: {
    bold: false,
    underline: false,
    italic: false,
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus, porro est veniam, sunt enim inventore minima ratione commodi architecto dignissimos tempora debitis minus facilis molestias optio eligendi consequuntur nisi?',
  },
} satisfies Meta<typeof CodeText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}
