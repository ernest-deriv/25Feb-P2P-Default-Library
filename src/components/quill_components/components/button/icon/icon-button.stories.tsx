import type { Meta, StoryObj } from '@storybook/react'
import IconButton from '.'
import {
  LabelPairedAndroidSmIcon,
  LabelPairedAppleSmIcon,
  LabelPairedCircleInfoSmBoldIcon,
  LabelPairedPlaceholderSmRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import { QuillIconComponent } from 'types'

const icons: Record<string, QuillIconComponent | undefined> = {
  placeholder: LabelPairedPlaceholderSmRegularIcon,
  'Circle info bold': LabelPairedCircleInfoSmBoldIcon,
  Android: LabelPairedAndroidSmIcon,
  Apple: LabelPairedAppleSmIcon,
}

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    fullWidth: false,
    isLoading: false,
    disabled: false,
    size: 'md',
    icon: icons['placeholder'],
    variant: 'primary',
    colorStyle: 'coral',
  },
  argTypes: {
    icon: {
      description: 'Icon to display on the left side of the chip',
      options: Object.keys(icons),
      defaultValue: icons['placeholder'],
      mapping: icons,
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[256px] min-w-[512px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryCoral: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const PrimaryBlack: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const PrimaryWhite: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const SecondaryCoral: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const SecondaryBlack: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const SecondaryWhite: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const TertiaryCoral: Story = {
  args: {
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const TertiaryBlack: Story = {
  args: {
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const TertiaryWhite: Story = {
  args: {
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'white',
    disabled: false,
  },
}
