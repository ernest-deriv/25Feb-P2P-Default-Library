import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '.'
import { MOCK_DATA } from './mocks/sample-data'
import Blog from './mocks/Blog'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    exclude: ['contentLength'],
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['number', 'bullet'],
      control: { type: 'select' },
      description: 'Type of pagination',
      table: {
        defaultValue: { summary: 'number' },
      },
    },
    contentPerPage: {
      control: { type: 'number', min: 1 },
      description: 'List of data to be rendered per page',
      table: {
        defaultValue: { summary: 1 },
      },
    },
    contentLength: {
      control: { type: 'number', min: 1 },
      description: 'Total length of data to be paginated',
      table: {
        defaultValue: { summary: 1 },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Styles to be applied to Pagination body',
    },
    onPagination: {
      description: 'Callback function when pagination is triggered',
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const NumberPagination: Story = {
  args: {
    contentPerPage: 5,
    variant: 'number',
    className: 'p-general-sm',
    contentLength: MOCK_DATA.length,
    onPagination: () => {},
  },
}

export const BulletPagination: Story = {
  args: {
    contentPerPage: 20,
    variant: 'bullet',
    className: 'p-general-sm',
    contentLength: MOCK_DATA.length,
    onPagination: () => {},
  },
}

export const PaginationImplementation: Story = {
  render: () => <Blog posts={MOCK_DATA} />,
  args: {
    contentPerPage: 5,
    variant: 'bullet',
    contentLength: MOCK_DATA.length,
  },
}
