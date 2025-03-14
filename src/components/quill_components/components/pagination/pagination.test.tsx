import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import Pagination from '.'

jest.mock('@deriv/quill-icons/Standalone', () => ({
  StandaloneChevronLeftRegularIcon: () => <div>Previous</div>,
  StandaloneChevronRightRegularIcon: () => <div>Next</div>,
  StandaloneEllipsisRegularIcon: () => <div>...</div>,
  StandaloneCircleFillIcon: () => <div>O</div>,
}))

describe('Pagination', () => {
  const mockOnPagination = jest.fn()

  it('should render Previous and next navigation buttons and page numbers', () => {
    render(
      <Pagination
        contentPerPage={5}
        contentLength={50}
        variant="number"
        onPagination={mockOnPagination}
      />,
    )

    const elPreviousButton = screen.getByRole('button', { name: /previous/i })
    const elNextButton = screen.getByRole('button', { name: /next/i })
    const elPageNumbers = screen.getAllByRole('button', { name: /\d+/i })

    expect(elPreviousButton).toBeInTheDocument()
    expect(elNextButton).toBeInTheDocument()
    expect(elPageNumbers).toHaveLength(6)
  })

  it('should render Previous and next navigation buttons and bullet points', () => {
    render(
      <Pagination
        contentPerPage={5}
        contentLength={50}
        variant="bullet"
        onPagination={mockOnPagination}
      />,
    )

    const elPreviousButton = screen.getByRole('button', {
      name: /Go to Previous page/i,
    })
    const elNextButton = screen.getByRole('button', {
      name: /Go to Next page/i,
    })
    const elPageNumbers = screen.getAllByRole('button', { name: /Go to page/i })

    expect(elPreviousButton).toBeInTheDocument()
    expect(elNextButton).toBeInTheDocument()
    expect(elPageNumbers).toHaveLength(10)
  })

  it('should disable Previous button when current page is 1', () => {
    render(
      <Pagination
        contentPerPage={5}
        contentLength={50}
        variant="number"
        onPagination={mockOnPagination}
      />,
    )

    const elPreviousButton = screen.getByRole('button', { name: /previous/i })

    expect(elPreviousButton).toBeDisabled()
  })

  it('should disable Next button when current page is last page', async () => {
    render(
      <Pagination
        contentPerPage={10}
        contentLength={50}
        variant="number"
        onPagination={mockOnPagination}
      />,
    )

    const elNextButton = screen.getByRole('button', { name: /next/i })

    await userEvent.click(elNextButton)
    await userEvent.click(elNextButton)
    await userEvent.click(elNextButton)
    await userEvent.click(elNextButton)

    expect(elNextButton).toBeDisabled()
  })

  it('should render disabled ellipses button when total page count is more than 5', () => {
    render(
      <Pagination
        contentPerPage={5}
        contentLength={50}
        variant="number"
        onPagination={mockOnPagination}
      />,
    )

    const elEllipsesButton = screen.getByRole('button', {
      name: /Hidden pages/i,
    })

    expect(elEllipsesButton).toBeDisabled()
  })

  it('should trigger onPagination event when page is changed', async () => {
    render(
      <Pagination
        contentPerPage={10}
        contentLength={50}
        variant="bullet"
        onPagination={mockOnPagination}
      />,
    )
    const elPreviousButton = screen.getByRole('button', { name: /previous/i })
    const elNextButton = screen.getByRole('button', { name: /next/i })

    await userEvent.click(elNextButton)
    expect(mockOnPagination).toHaveBeenCalledWith({
      currentPage: 2,
      totalPageCount: 5,
    })

    await userEvent.click(elPreviousButton)
    expect(mockOnPagination).toHaveBeenCalledWith({
      currentPage: 1,
      totalPageCount: 5,
    })
  })
})
