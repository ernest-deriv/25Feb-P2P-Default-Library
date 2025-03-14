import type { Meta, StoryObj } from '@storybook/react'
import SocialAppleButton from '.'

const meta: Meta<typeof SocialAppleButton> = {
  title: 'Buttons/Social/Apple Social Button',
  component: SocialAppleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    fullWidth: false,
    hideLabel: false,
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[256px] min-w-[512px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof SocialAppleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
