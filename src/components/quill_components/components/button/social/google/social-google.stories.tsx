import type { Meta, StoryObj } from '@storybook/react'
import SocialGoogleIcon from '.'

const meta: Meta<typeof SocialGoogleIcon> = {
  title: 'Buttons/Social/Google Social Button',
  component: SocialGoogleIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    hideLabel: false,
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[256px] min-w-[512px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SocialGoogleIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
