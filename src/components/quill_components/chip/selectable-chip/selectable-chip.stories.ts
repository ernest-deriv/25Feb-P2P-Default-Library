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
  title: 'Chips/Selectable Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['dismissible', 'onDismiss', 'isDropdownOpen', 'dropdown'],
    },
  },
  args: {
    children: 'Selectable Chip',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'children',
      control: 'text',
    },
    icon: {
      description: 'Icon to display on the left side of the chip',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    selected: {
      name: 'selected',
      control: 'boolean',
      description:
        'A boolean flag indicating whether the chip is in a selected/active state. If `selected` is set to `true` or `false`, the chip will act as a controlled component, allowing external control over its state. If no value is passed (undefined), the chip will be uncontrolled, and its state will be managed internally.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const SelectableChip: Story = {}
