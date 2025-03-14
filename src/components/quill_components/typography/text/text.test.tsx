import { render, screen } from '@testing-library/react'
import { Text } from '.'
import { BodyTextSizeProps } from './text.classes'

const textSizes: BodyTextSizeProps['size'][] = ['sm', 'md', 'lg', 'xl']

describe('Text', () => {
  it('should display correct content', () => {
    render(<Text>Text content</Text>)

    const text = screen.getByText(/Text content/)
    expect(text).toBeInTheDocument()
  })
  it('should display content with default classnames', () => {
    const { container } = render(<Text>Text content</Text>)

    expect(container).toMatchSnapshot()
  })

  it('should have correct classnames with size xl and type underline', () => {
    const { container } = render(
      <Text size="xl" underline>
        Text content
      </Text>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should have correct classnames with bold enabled', () => {
    const { container } = render(<Text bold>Text content</Text>)

    expect(container).toMatchSnapshot()
  })

  it('should have correct classnames with italic enabled', () => {
    const { container } = render(<Text italic>Text content</Text>)

    expect(container).toMatchSnapshot()
  })

  textSizes.forEach((size) => {
    it(`should have correct classnames with size ${size}`, () => {
      const { container } = render(<Text size={size}>Text content</Text>)

      expect(container).toMatchSnapshot()
    })
  })
})
