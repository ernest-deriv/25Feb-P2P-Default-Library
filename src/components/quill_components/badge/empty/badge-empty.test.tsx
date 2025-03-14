import { render, screen } from 'test-utils'
import { EmptyBadge } from '.'
import { BadgeColorStyle, BadgeSize } from '../types'

describe('<Badge.Empty/>', () => {
  it('should render correctly', () => {
    render(<EmptyBadge aria-label="Default Badge" />)
    const badge = screen.getByLabelText('Default Badge')
    expect(badge).toBeInTheDocument()
  })

  const sizes: BadgeSize[] = ['lg', 'md', 'sm']
  sizes.forEach((size) => {
    it(`should render correctly with size ${size}`, () => {
      render(<EmptyBadge size={size} aria-label={`${size} Badge`} />)
      const badge = screen.getByLabelText(`${size} Badge`)
      expect(badge).toMatchSnapshot()
    })
  })

  const colorStyles: BadgeColorStyle[] = ['danger', 'success', 'warning']
  colorStyles.forEach((color) => {
    it(`should render correctly with color ${color}`, () => {
      render(<EmptyBadge color={color} aria-label={`${color} Badge`} />)
      const badge = screen.getByLabelText(`${color} Badge`)
      expect(badge).toMatchSnapshot()
    })
  })
})
