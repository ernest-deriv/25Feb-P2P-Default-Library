import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'
import {
  LabelPairedCircleInfoSmBoldIcon,
  LabelPairedAndroidSmIcon,
  LabelPairedAppleSmIcon,
} from '@deriv/quill-icons/LabelPaired'

const icons: Record<string, object | null> = {
  sample_1: LabelPairedCircleInfoSmBoldIcon,
  sample_2: LabelPairedAndroidSmIcon,
  sample_3: LabelPairedAppleSmIcon,
  none: null,
}

const meta = {
  title: 'Chips/Dropdown Chip Single Select',
  component: Chip,
  parameters: {
    docs: {
      story: {
        height: '250px',
      },
    },
    controls: {
      exclude: ['dismissible'],
    },
  },
  args: {
    defaultOption: { value: '', label: 'Dropdown Chip Single Select' },
    size: 'md',
    disabled: false,
  },
  argTypes: {
    defaultOption: {
      name: 'defaultOption',
      control: 'object',
    },
    icon: {
      description: 'Icon to display on the left side of the chip',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    onSelectionChange: { action: 'onChange' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownChipSingleSelect: Story = {
  args: {
    options: [
      { value: '1', label: 'Sample Item 1' },
      {
        value: '2',
        label: 'Sample Item 2 - which is disabled',
        disabled: true,
      },
      { value: '3', label: 'Sample Item 3' },
      { value: '4', label: 'Sample Item 4' },
    ],
  },
}
