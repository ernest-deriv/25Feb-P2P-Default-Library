import { render } from 'test-utils'
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons/Standalone'
import Tag from '.'

describe('Tag', () => {
  it('Should render Tag Default', () => {
    const { container } = render(<Tag>Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom with Icon', () => {
    const { container } = render(<Tag>Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag with Icon', () => {
    const { container } = render(
      <Tag
        icon={StandalonePlaceholderRegularIcon}
        variant="custom"
        colorStyle="custom"
        className="bg-gradient-to-r from-solid-blue-100 via-solid-blue-300 to-solid-blue-500 text-solid-blue-1200"
        iconClassName="fill-solid-blue-1200"
      >
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag without Icon', () => {
    const { container } = render(
      <Tag
        variant="custom"
        colorStyle="custom"
        className="bg-gradient-to-r from-solid-blue-100 via-solid-blue-300 to-solid-blue-500 text-solid-blue-1200"
      >
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Fill without Icon', () => {
    const { container } = render(
      <Tag
        colorStyle="custom"
        variant="fill"
        className="bg-solid-red-100 text-solid-red-1200"
      >
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Outline without Icon', () => {
    const { container } = render(
      <Tag
        colorStyle="custom"
        variant="outline"
        className="border-solid-mustard-1200 text-solid-mustard-1200"
      >
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Outline with Icon', () => {
    const { container } = render(
      <Tag
        icon={StandalonePlaceholderRegularIcon}
        colorStyle="custom"
        variant="outline"
        className="border-solid-mustard-1200 text-solid-mustard-1200"
        iconClassName="fill-solid-mustard-1200"
      >
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Error Tag Fill', () => {
    const { container } = render(<Tag colorStyle="error">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Warning Tag Fill', () => {
    const { container } = render(<Tag colorStyle="warning">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Success Tag Fill', () => {
    const { container } = render(<Tag colorStyle="success">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Info Tag Fill', () => {
    const { container } = render(<Tag colorStyle="info">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Error Tag Outline', () => {
    const { container } = render(
      <Tag colorStyle="error" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Warning Tag Outline', () => {
    const { container } = render(
      <Tag colorStyle="warning" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Success Tag Outline', () => {
    const { container } = render(
      <Tag colorStyle="success" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Info Tag Outline', () => {
    const { container } = render(
      <Tag colorStyle="info" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })
})
