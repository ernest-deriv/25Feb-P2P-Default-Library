import { render, screen } from 'test-utils'
import Link from '.'
import { colorStyle, LinkDisabled, LinkTestSize } from './types'
import { StandaloneArrowLeftBoldIcon } from '@deriv/quill-icons/Standalone'

describe('Link', () => {
  it('should render correctly', () => {
    render(<Link>Click me</Link>)
    const LinkElement = screen.getByText(/click me/i)
    expect(LinkElement).toBeInTheDocument()
  })
  it('should have URL', () => {
    render(<Link href="/">Click me</Link>)
    const LinkElement = screen.getByText(/click me/i)
    expect(LinkElement)
    expect(LinkElement.closest('a')).toHaveAttribute('href', '/')
  })

  it('should render the classname', () => {
    render(<Link className="px-300">Click me</Link>)
    const LinkElement = screen.getByText(/click me/i)
    expect(LinkElement).toHaveClass('px-300')
  })

  it('should render chevron icon when hasIcon prop is true', () => {
    render(<Link hasIcon>Click me</Link>)
    const icon = screen.getByTestId('dt-link-chevron')
    expect(icon).toBeInTheDocument()
  })

  it('should render icon when a icon is pass', () => {
    render(<Link icon={StandaloneArrowLeftBoldIcon}>Click me</Link>)
    const icon = screen.getByTestId('dt-link-icon')
    expect(icon).toBeInTheDocument()
  })

  const colorStyles: colorStyle[] = ['black', 'white']
  const sizes: LinkTestSize[] = ['caption', 'sm', 'md', 'lg', 'xl']

  colorStyles.forEach((colorStyle) => {
    sizes.forEach((size) => {
      it(`should render correctly with ${size} size and color ${colorStyle}`, () => {
        const { container } = render(
          <Link size={size} colorStyle={colorStyle}>
            Click me - {size}
          </Link>,
        )
        expect(container).toMatchSnapshot()
      })
    })
  })

  const disabled: LinkDisabled[] = [true, false]
  disabled.forEach((dis) => {
    it(`should render correctly with disabled ${dis}`, () => {
      render(<Link disabled={dis}>Click me disabled</Link>)
      const LinkElement = screen.getByText('Click me disabled')
      expect(LinkElement).toMatchSnapshot()
    })
  })
})
