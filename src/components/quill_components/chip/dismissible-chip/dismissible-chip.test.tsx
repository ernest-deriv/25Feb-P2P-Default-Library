import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import { DismissibleChip } from '.'

describe('Dismissible Chip', () => {
  it('should handle onDismiss event', async () => {
    const onClickButton = jest.fn()
    render(
      <DismissibleChip size={'sm'} onDismiss={onClickButton}>
        Selectable Chip
      </DismissibleChip>,
    )
    const button = screen.getByTestId('dt-chip-dismissable-btn')
    await userEvent.click(button)
    expect(onClickButton).toHaveBeenCalled()
  })
})
