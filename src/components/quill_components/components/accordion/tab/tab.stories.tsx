import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone'
import { AccordionProps, TabData } from '../types'

const tabsCount = 5

const tabsName: TabData[] = Array.from({ length: tabsCount }).map((_, i) => ({
  id: i,
  title: `Label ${i + 1}`,
}))

const tabsData: AccordionProps[][] = Array.from({ length: tabsCount }).map(
  (_, count) =>
    Array.from({ length: Math.floor(Math.random() * 5 + 1) }).map((_, i) => ({
      icon: StandaloneAndroidIcon,
      title: `Title ${i + 1} - Label ${count + 1}`,
      subtitle: `Subtitle ${i + 1}`,
      content: () => (
        <img
          className="flex w-full flex-1"
          src="https://placehold.co/640x320"
          alt="Placeholder"
        />
      ),
    })),
)

const tabs: Record<string, object | null> = {
  left: {
    data: tabsName,
  },
  center: {
    align: 'center',
    data: tabsName,
  },
  right: {
    align: 'end',
    data: tabsName,
  },
  none: null,
}

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Tab Accordion',
  argTypes: {
    tab: {
      options: Object.keys(tabs),
      mapping: tabs,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['Flush', 'Fill', 'Outline', 'Elevate'],
      control: { type: 'radio' },
      table: { type: { summary: '"Flush", "Fill", "Outline", "Elevate"' } },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    multiCollapse: {
      control: { type: 'boolean' },
    },
    className: { table: { disable: true } },
  },
  tags: ['autodocs'],
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tab: { data: tabsName },
    content: { data: tabsData },
  },
}
