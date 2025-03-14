import { Meta, StoryObj } from '@storybook/react'
import SearchField from '.'
import {
  StandaloneCircleCheckBoldIcon,
  StandaloneTriangleExclamationBoldIcon,
} from '@deriv/quill-icons/Standalone'

const meta = {
  title: 'Inputs/Search Field',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    statusIcon: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const DisabledSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'outline',
  },
}

export const SuccessSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
  },
}
export const SuccessMessageSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Success message goes here',
  },
}
export const ErrorSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
  },
}

export const SuccessMessageSearchFieldWithIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Status message goes here',
    statusIcon: StandaloneCircleCheckBoldIcon,
  },
}
export const ErrorMessageSearchFieldWithIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
    leftStatusMessage: 'Status message goes here',
    statusIcon: StandaloneTriangleExclamationBoldIcon,
  },
}

export const SuccessStatusIconSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    statusIcon: StandaloneCircleCheckBoldIcon,
  },
  argTypes: {
    status: {
      table: {
        disable: true,
      },
    },
  },
}

export const ErrorStatusIconSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
    statusIcon: StandaloneTriangleExclamationBoldIcon,
  },
  argTypes: {
    status: {
      table: {
        disable: true,
      },
    },
  },
}
