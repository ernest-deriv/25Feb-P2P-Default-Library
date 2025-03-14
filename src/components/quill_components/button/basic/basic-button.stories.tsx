import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedAndroidSmIcon,
  LabelPairedAppleSmIcon,
  LabelPairedCircleInfoSmBoldIcon,
  LabelPairedPlaceholderSmRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import Button from '.'
import { QuillIconComponent } from 'types'

const icons: Record<string, QuillIconComponent | undefined> = {
  placeholder: LabelPairedPlaceholderSmRegularIcon,
  'Circle info bold': LabelPairedCircleInfoSmBoldIcon,
  Android: LabelPairedAndroidSmIcon,
  Apple: LabelPairedAppleSmIcon,
  none: undefined,
}

const meta: Meta<typeof Button> = {
  title: 'Buttons/Basic',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    fullWidth: false,
    isLoading: false,
    disabled: false,
    size: 'md',
    children: 'Basic Button',
    variant: 'primary',
    colorStyle: 'coral',
  },
  argTypes: {
    children: { name: 'Text', control: 'text' },
    icon: {
      description: 'Icon to display on the left side of the chip',
      options: Object.keys(icons),
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
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryCoral: Story = {
  args: {
    children: 'Primary Coral BasicButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const PrimaryBlack: Story = {
  args: {
    children: 'Primary Black BasicButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const PrimaryWhite: Story = {
  args: {
    children: 'Primary White BasicButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const SecondaryCoral: Story = {
  args: {
    children: 'Secondary Coral BasicButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const SecondaryBlack: Story = {
  args: {
    children: 'Secondary Black BasicButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const SecondaryWhite: Story = {
  args: {
    children: 'Secondary White BasicButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const TertiaryCoral: Story = {
  args: {
    children: 'Tertiary Coral BasicButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const TertiaryBlack: Story = {
  args: {
    children: 'Tertiary Black BasicButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const TertiaryWhite: Story = {
  args: {
    children: 'Tertiary White BasicButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'white',
    disabled: false,
  },
}
