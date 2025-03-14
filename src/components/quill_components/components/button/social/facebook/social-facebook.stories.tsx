import type { Meta, StoryObj } from '@storybook/react'
import SocialFacebookButton from '.'

const meta: Meta<typeof SocialFacebookButton> = {
  title: 'Buttons/Social/Facebook Social Button',
  component: SocialFacebookButton,
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
} as Meta<typeof SocialFacebookButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
