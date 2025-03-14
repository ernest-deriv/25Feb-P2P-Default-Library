import type { Meta, StoryObj } from '@storybook/react'
import { CaptionText } from '.'

const meta = {
  title: 'Typography/Text/Caption',
  component: CaptionText,
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
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus, porro est veniam, sunt enim inventore minima ratione commodi architecto dignissimos tempora debitis minus facilis molestias optio eligendi consequuntur nisi?',
  },
} satisfies Meta<typeof CaptionText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
