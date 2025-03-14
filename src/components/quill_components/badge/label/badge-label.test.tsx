import { render, screen } from 'test-utils'
import { LabelBadge } from '.'
import { BadgeColorStyle, BadgeSize } from '../types'

describe('<Badge.Label/>', () => {
  it('should render correctly', () => {
    render(<LabelBadge>1</LabelBadge>)
    const badge = screen.getByText('1')
    expect(badge).toBeInTheDocument()
  })

  const sizes: BadgeSize[] = ['lg', 'md', 'sm']
  sizes.forEach((size) => {
    it(`should render correctly with size ${size}`, () => {
      render(<LabelBadge size={size} aria-label={`${size} Badge`} />)
      const badge = screen.getByLabelText(`${size} Badge`)
      expect(badge).toMatchSnapshot()
    })
  })

  const colorStyles: BadgeColorStyle[] = ['danger', 'success', 'warning']
  colorStyles.forEach((color) => {
    it(`should render correctly with color ${color}`, () => {
      render(<LabelBadge color={color} aria-label={`${color} Badge`} />)
      const badge = screen.getByLabelText(`${color} Badge`)
      expect(badge).toMatchSnapshot()
    })
  })
})
