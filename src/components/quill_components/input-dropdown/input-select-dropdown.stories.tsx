import {
  StandaloneCircleCheckBoldIcon,
  StandalonePlaceholderRegularIcon,
  StandaloneTriangleExclamationBoldIcon,
} from '@deriv/quill-icons/Standalone'
import InputSelectDropDown from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Inputs/Input Dropdown',
  component: InputSelectDropDown,
} satisfies Meta<typeof InputSelectDropDown>

export default meta

type Story = StoryObj<typeof meta>

export const LabelledInputDropDown: Story = {
  args: {
    icon: StandalonePlaceholderRegularIcon,
    labelTag: 'Label',
    defaultOption: { value: '', label: 'Select' },
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 2' },
      { value: '4', label: 'Sample Item 3' },
      { value: '5', label: 'Sample Item 4' },
      { value: '6', label: 'Sample Item 5' },
      { value: '7', label: 'Sample Item 6' },
      { value: '8', label: 'Sample Item 7' },
      { value: '9', label: 'Sample Item 8' },
      { value: '10', label: 'Sample Item 9' },
      { value: '11', label: 'Sample Item 10' },
      { value: '12', label: 'Sample Item 11' },
      { value: '13', label: 'Sample Item 12' },
    ],
  },
}

export const LabelledInputDropDownSuccess: Story = {
  args: {
    icon: StandalonePlaceholderRegularIcon,
    labelTag: 'Label',
    statusIcon: StandaloneCircleCheckBoldIcon,
    defaultOption: { value: '', label: 'Select' },
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 2' },
      { value: '4', label: 'Sample Item 3' },
      { value: '5', label: 'Sample Item 4' },
      { value: '6', label: 'Sample Item 5' },
      { value: '7', label: 'Sample Item 6' },
      { value: '8', label: 'Sample Item 7' },
      { value: '9', label: 'Sample Item 8' },
      { value: '10', label: 'Sample Item 9' },
      { value: '11', label: 'Sample Item 10' },
      { value: '12', label: 'Sample Item 11' },
      { value: '13', label: 'Sample Item 12' },
    ],
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Success message goes here',
  },
}

export const LabelledInputDropDownError: Story = {
  args: {
    icon: StandalonePlaceholderRegularIcon,
    labelTag: 'Label',
    statusIcon: StandaloneTriangleExclamationBoldIcon,
    defaultOption: { value: '', label: 'Select' },
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 2' },
      { value: '4', label: 'Sample Item 3' },
      { value: '5', label: 'Sample Item 4' },
      { value: '6', label: 'Sample Item 5' },
      { value: '7', label: 'Sample Item 6' },
      { value: '8', label: 'Sample Item 7' },
      { value: '9', label: 'Sample Item 8' },
      { value: '10', label: 'Sample Item 9' },
      { value: '11', label: 'Sample Item 10' },
      { value: '12', label: 'Sample Item 11' },
      { value: '13', label: 'Sample Item 12' },
    ],
    variant: 'outline',
    status: 'error',
    leftStatusMessage: 'Error message goes here',
  },
}

export const LabellessInputDropDown: Story = {
  args: {
    icon: StandalonePlaceholderRegularIcon,
    defaultOption: { value: '', label: 'Select' },
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 2' },
      { value: '4', label: 'Sample Item 3' },
      { value: '5', label: 'Sample Item 4' },
      { value: '6', label: 'Sample Item 5' },
      { value: '7', label: 'Sample Item 6' },
      { value: '8', label: 'Sample Item 7' },
      { value: '9', label: 'Sample Item 8' },
      { value: '10', label: 'Sample Item 9' },
      { value: '11', label: 'Sample Item 10' },
      { value: '12', label: 'Sample Item 11' },
      { value: '13', label: 'Sample Item 12' },
    ],
  },
}
export const LabellessInputDropDownSuccess: Story = {
  args: {
    icon: StandalonePlaceholderRegularIcon,
    statusIcon: StandaloneCircleCheckBoldIcon,
    defaultOption: { value: '', label: 'Select' },
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 2' },
      { value: '4', label: 'Sample Item 3' },
      { value: '5', label: 'Sample Item 4' },
      { value: '6', label: 'Sample Item 5' },
      { value: '7', label: 'Sample Item 6' },
      { value: '8', label: 'Sample Item 7' },
      { value: '9', label: 'Sample Item 8' },
      { value: '10', label: 'Sample Item 9' },
      { value: '11', label: 'Sample Item 10' },
      { value: '12', label: 'Sample Item 11' },
      { value: '13', label: 'Sample Item 12' },
    ],
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Success message goes here',
  },
}

export const LabellessInputDropDownError: Story = {
  args: {
    icon: StandalonePlaceholderRegularIcon,
    statusIcon: StandaloneTriangleExclamationBoldIcon,
    defaultOption: { value: '', label: 'Select' },
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 3' },
      { value: '4', label: 'Sample Item 4' },
      { value: '5', label: 'Sample Item 1' },
      { value: '6', label: 'Sample Item 3' },
      { value: '7', label: 'Sample Item 4' },
      { value: '8', label: 'Sample Item 1' },
      { value: '9', label: 'Sample Item 3' },
      { value: '10', label: 'Sample Item 4' },
      { value: '11', label: 'Sample Item 1' },
      { value: '12', label: 'Sample Item 3' },
      { value: '13', label: 'Sample Item 4' },
    ],
    variant: 'outline',
    status: 'error',
    leftStatusMessage: 'Error message goes here',
  },
}
