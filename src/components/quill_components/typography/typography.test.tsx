import { render } from 'test-utils'
import { Heading, Text } from '.'

describe('Heading', () => {
  it('Should render Hero Heading with h1', () => {
    const { container } = render(<Heading.Hero>Hero heading</Heading.Hero>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h1 Heading with h1', () => {
    const { container } = render(<Heading.H1>h1 heading</Heading.H1>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h2 Heading with h2', () => {
    const { container } = render(<Heading.H2>h2 heading</Heading.H2>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h3 Heading with h3', () => {
    const { container } = render(<Heading.H3>h3 heading</Heading.H3>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h4 Heading with h4', () => {
    const { container } = render(<Heading.H4>h4 heading</Heading.H4>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h5 Heading with h5', () => {
    const { container } = render(<Heading.H5>h5 heading</Heading.H5>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h6 Heading with h6', () => {
    const { container } = render(<Heading.H6>h6 heading</Heading.H6>)
    expect(container).toMatchSnapshot()
  })
})

describe('Text', () => {
  it('Should display correct content', () => {
    const { container } = render(<Text>Text content</Text>)
    expect(container).toMatchSnapshot()
  })
})
