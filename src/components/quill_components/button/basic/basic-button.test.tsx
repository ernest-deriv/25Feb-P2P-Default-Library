import { render } from 'test-utils'
import Button, { ButtonProps } from '.'
import { LabelPairedAndroidSmIcon } from '@deriv/quill-icons/LabelPaired'
import userEvent from '@testing-library/user-event'

const BasicButtonVariants: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'tertiary',
]

describe('BasicButton', () => {
  it('Should render BasicButton Default', () => {
    const { container } = render(<Button>Label</Button>)
    expect(container).toMatchSnapshot()
  })

  it('Should render BasicButton with Icon', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon}>Label</Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render BasicButton with Icon and IconPosition start', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon} iconPosition="start">
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render BasicButton with Icon and IconPosition end', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon} iconPosition="end">
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render BasicButton with Icon and IconPosition end and fullWidth', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon} iconPosition="end" fullWidth>
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render BasicButton with Icon and IconPosition end and fullWidth and isLoading', () => {
    const { container } = render(
      <Button
        icon={LabelPairedAndroidSmIcon}
        iconPosition="end"
        fullWidth
        isLoading
      >
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render BasicButton with Icon and IconPosition end and fullWidth and isLoading and className=custom-class', () => {
    const { container } = render(
      <Button
        icon={LabelPairedAndroidSmIcon}
        iconPosition="end"
        fullWidth
        isLoading
        className="opacity-50"
      >
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  BasicButtonVariants.forEach((variant) => {
    it(`Should render BasicButton with variant=${variant}`, () => {
      const { container } = render(<Button variant={variant}>Label</Button>)
      expect(container).toMatchSnapshot()
    })
  })

  it('Should handle onClick', async () => {
    const mockOnClick = jest.fn()
    const { getByRole } = render(<Button onClick={mockOnClick}>Label</Button>)
    const button = getByRole('button')
    await userEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
