import type { Meta, StoryObj } from '@storybook/react'
import { Flush } from '.'
import {
  StandaloneAndroidIcon,
  StandaloneAppStoreIcon,
  StandaloneAppStoreIosIcon,
} from '@deriv/quill-icons/Standalone'
import { Heading } from 'components/typography'

const meta: Meta<typeof Flush> = {
  title: 'Components/Accordion/Flush',
  argTypes: {
    divider: ['both', 'bottom', 'none'],
    icon: {
      options: ['Android', 'App Store', 'IOS'],
      mapping: {
        Android: StandaloneAndroidIcon,
        'App Store': StandaloneAppStoreIcon,
        IOS: StandaloneAppStoreIosIcon,
      },
    },
  },
  tags: ['autodocs'],
  component: Flush,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Flush>

export default meta

type Story = StoryObj<typeof meta>

export const NoIcon: Story = {
  args: {
    title: 'Accordion Flush',
    subtitle: 'There is no icon in this accordion',
    divider: 'both',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x320"
        alt="Placeholder"
      />
    ),
  },
}

export const ShortContent: Story = {
  args: {
    icon: StandaloneAppStoreIosIcon,
    title: 'Accordion Flush',
    subtitle: 'This is a subtitle',
    divider: 'both',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x320"
        alt="Placeholder"
      />
    ),
  },
}

export const LongSubtitle: Story = {
  args: {
    icon: StandaloneAppStoreIosIcon,
    title: 'Accordion Flush (Long Subtitle)',
    divider: 'bottom',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    className: '!w-[400px]',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x320"
        alt="Placeholder"
      />
    ),
  },
}

export const LongContent: Story = {
  args: {
    icon: StandaloneAndroidIcon,
    title: 'Accordion Flush (Long Content)',
    subtitle: 'This is a test subtitle',
    divider: 'both',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x1320"
        alt="Placeholder"
      />
    ),
  },
}

export const OnlyBottom: Story = {
  args: {
    icon: StandaloneAndroidIcon,
    title: 'Accordion Flush',
    subtitle: 'Only bottom has border',
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x1320"
        alt="Placeholder"
      />
    ),
  },
}

export const CustomContent: Story = {
  args: {
    customContent: () => (
      <>
        <Heading.H1>This is a custom content</Heading.H1>
      </>
    ),
    content: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/800x400"
        alt="Placeholder"
      />
    ),
  },
}
