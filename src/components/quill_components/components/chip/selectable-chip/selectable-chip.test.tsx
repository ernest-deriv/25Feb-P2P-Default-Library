import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import SelectableChip from '.'
import { LabelPairedAndroidSmIcon } from '@deriv/quill-icons/LabelPaired'
import { ChipSize } from '../types'

describe('Selectable Chip', () => {
  it('should handle onClick event', async () => {
    const onClickButton = jest.fn()
    render(
      <SelectableChip size={'sm'} onChipSelect={onClickButton}>
        Selectable Chip
      </SelectableChip>,
    )
    const button = screen.getByRole('button', { name: /Selectable Chip/i })
    await userEvent.click(button)
    expect(onClickButton).toHaveBeenCalled()
  })

  it('should not handle onClick event when it is disabled', async () => {
    const onClickButton = jest.fn()
    render(
      <SelectableChip size={'sm'} disabled>
        Selectable Chip
      </SelectableChip>,
    )
    const button = screen.getByRole('button', { name: /Selectable Chip/i })
    await userEvent.click(button)
    expect(button).toBeDisabled()
    expect(onClickButton).not.toHaveBeenCalled()
  })

  it('should toggle selected state on clicking the chip', async () => {
    render(<SelectableChip size={'sm'}>Selectable Chip</SelectableChip>)
    const button = screen.getByRole('button', { name: /Selectable Chip/i })
    await userEvent.click(button)
    expect(button).toHaveAttribute('data-state', 'selected')
    await userEvent.click(button)
    expect(button).toHaveAttribute('data-state', '')
  })

  it('should render correct disabled classname when it is disabled', () => {
    render(<SelectableChip size={'sm'}>Selectable Chip</SelectableChip>)
    const button = screen.getByRole('button', { name: /Selectable Chip/i })
    expect(button).toHaveClass('disabled:text-opacity-black-300')
  })

  it('should render correct labelTag', () => {
    render(
      <SelectableChip size={'sm'} labelTag="labelTag">
        Selectable Chip
      </SelectableChip>,
    )
    const labelTag = screen.getByText('labelTag')
    expect(labelTag).toBeInTheDocument()
  })

  it('should render icon properly', () => {
    render(
      <SelectableChip icon={LabelPairedAndroidSmIcon} size={'sm'}>
        Selectable Chip
      </SelectableChip>,
    )
    const icon = screen.getByRole('img', { name: '' })
    expect(icon).toBeInTheDocument()
  })

  it('should handle onChipSelect for selectable chip', async () => {
    const onSelect = jest.fn()
    render(
      <SelectableChip size={'sm'} onChipSelect={onSelect}>
        Selectable Chip
      </SelectableChip>,
    )
    const button = screen.getByText('Selectable Chip')
    await userEvent.click(button)
    expect(onSelect).toHaveBeenCalled()
  })

  it('should handle onDismiss for dissmisable chip', async () => {
    const onDismiss = jest.fn()
    render(
      <SelectableChip size={'sm'} dismissible onDismiss={onDismiss}>
        Selectable Chip
      </SelectableChip>,
    )
    const button = screen.getByTestId('dt-chip-dismissable-btn')
    await userEvent.click(button)
    expect(onDismiss).toHaveBeenCalled()
  })

  it('should not toggle data-state if chip is dissmisable', async () => {
    render(
      <SelectableChip size={'sm'} dismissible>
        Selectable Chip
      </SelectableChip>,
    )
    const dismissButton = screen.getByTestId('dt-chip-dismissable-btn')
    const chipButton = screen.getByRole('button', { name: /Selectable Chip/i })
    await userEvent.click(dismissButton)
    expect(chipButton).toHaveAttribute('data-state', '')
  })

  const sizes: ChipSize[] = ['sm', 'md', 'lg']
  sizes.forEach((size) => {
    it(`should render correctly with ${size} size`, () => {
      render(<SelectableChip size={size}>{`Chip - ${size}`}</SelectableChip>)
      const button = screen.getByRole('button', { name: `Chip - ${size}` })
      expect(button).toMatchSnapshot()
    })
  })
})
