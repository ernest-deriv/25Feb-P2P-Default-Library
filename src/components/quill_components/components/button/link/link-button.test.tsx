import { render } from 'test-utils'
import Button, { LinkButtonProps } from '.'
import { LabelPairedAndroidSmIcon } from '@deriv/quill-icons/LabelPaired'

const LinkButtonVariants: LinkButtonProps['variant'][] = [
  'primary',
  'secondary',
  'tertiary',
]

describe('LinkButton', () => {
  it('Should render LinkButton Default', () => {
    const { container } = render(<Button>Label</Button>)
    expect(container).toMatchSnapshot()
  })

  it('Should render LinkButton with Icon', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon}>Label</Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render LinkButton with Icon and IconPosition start', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon} iconPosition="start">
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render LinkButton with Icon and IconPosition end', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon} iconPosition="end">
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render LinkButton with Icon and IconPosition end and fullWidth', () => {
    const { container } = render(
      <Button icon={LabelPairedAndroidSmIcon} iconPosition="end" fullWidth>
        Label
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render LinkButton with Icon and IconPosition end and fullWidth and isLoading', () => {
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

  it('Should render LinkButton with Icon and IconPosition end and fullWidth and isLoading and className=custom-class', () => {
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

  LinkButtonVariants.forEach((variant) => {
    it(`Should render LinkButton with variant=${variant}`, () => {
      const { container } = render(<Button variant={variant}>Label</Button>)
      expect(container).toMatchSnapshot()
    })
  })

  it('Should have correct href', async () => {
    const { getByRole } = render(
      <Button href="https://www.example.com">Label</Button>,
    )
    const linkButton = getByRole('link')
    expect(linkButton).toHaveAttribute('href', 'https://www.example.com')
  })
})
