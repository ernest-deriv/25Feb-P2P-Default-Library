import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedAndroidSmIcon,
  LabelPairedAppleSmIcon,
  LabelPairedCircleInfoSmBoldIcon,
  LabelPairedPlaceholderSmRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import TradeButton from '.'
import { QuillIconComponent } from 'types'

const icons: Record<string, QuillIconComponent | undefined> = {
  placeholder: LabelPairedPlaceholderSmRegularIcon,
  'Circle info bold': LabelPairedCircleInfoSmBoldIcon,
  Android: LabelPairedAndroidSmIcon,
  Apple: LabelPairedAppleSmIcon,
  none: undefined,
}

const meta: Meta<typeof TradeButton> = {
  title: 'Buttons/Trade',
  component: TradeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: icons['placeholder'],
    iconPosition: undefined,
    fullWidth: false,
    isLoading: false,
    disabled: false,
    size: 'md',
    children: 'Trade Primary Sell Button',
    variant: 'primary',
    tradeType: 'sell',
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
} as Meta<typeof TradeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimarySell: Story = {
  args: {
    children: 'Primary Sell TradeButton',
    size: 'md',
    variant: 'primary',
    tradeType: 'sell',
    disabled: false,
  },
}

export const PrimaryBuy: Story = {
  args: {
    children: 'Primary Buy TradeButton',
    size: 'md',
    variant: 'primary',
    tradeType: 'buy',
    disabled: false,
  },
}

export const SecondarySell: Story = {
  args: {
    children: 'Secondary Sell TradeButton',
    size: 'md',
    variant: 'secondary',
    tradeType: 'sell',
    disabled: false,
  },
}

export const SecondaryBuy: Story = {
  args: {
    children: 'Secondary Buy TradeButton',
    size: 'md',
    variant: 'secondary',
    tradeType: 'buy',
    disabled: false,
  },
}

export const TertiarySell: Story = {
  args: {
    children: 'Tertiary Sell TradeButton',
    size: 'md',
    variant: 'tertiary',
    tradeType: 'sell',
    disabled: false,
  },
}

export const TertiaryBuy: Story = {
  args: {
    children: 'Tertiary Buy TradeButton',
    size: 'md',
    variant: 'tertiary',
    tradeType: 'buy',
    disabled: false,
  },
}
