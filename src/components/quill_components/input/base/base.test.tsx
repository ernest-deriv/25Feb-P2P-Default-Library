import { render } from 'test-utils'
import Input from '.'
import { StandaloneTriangleExclamationBoldIcon } from '@deriv/quill-icons/Standalone'

describe('Input', () => {
  it('It should render a default Input', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })
  it('It should render an Input with a label', () => {
    const { container } = render(<Input label="Label" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render an Input with a status icon', () => {
    const { container } = render(
      <Input
        status="success"
        statusIcon={StandaloneTriangleExclamationBoldIcon}
      />,
    )
    expect(container).toMatchSnapshot()
  })
  it('It should render an Input with status messages', () => {
    const { container } = render(
      <Input leftStatusMessage="Message goes here" rightStatusMessage="0/0" />,
    )
    expect(container).toMatchSnapshot()
  })
  it('It should render an Input with centered text', () => {
    const { container } = render(<Input textAlignment="center" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render an Input with a size of sm', () => {
    const { container } = render(<Input inputSize="sm" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render a disabled Input', () => {
    const { container } = render(<Input disabled />)
    expect(container).toMatchSnapshot()
  })
  it('It should render an Input with a variant of fill', () => {
    const { container } = render(<Input variant="fill" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render a disabled Input with a variant of fill', () => {
    const { container } = render(<Input disabled variant="fill" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render a disabled Input with a variant of outline', () => {
    const { container } = render(<Input disabled variant="outline" />)
    expect(container).toMatchSnapshot()
  })
})
