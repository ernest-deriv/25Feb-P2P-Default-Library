import { render } from 'test-utils'
import TradeButton, { TradeButtonProps } from '.'

const tradeButtonVariants: TradeButtonProps['variant'][] = [
  'primary',
  'secondary',
  'tertiary',
]

const tradeButtonSizes: TradeButtonProps['size'][] = ['lg', 'md', 'sm', 'xl']

describe('Trade Button', () => {
  it('Should render Default Button', () => {
    const { getByRole } = render(<TradeButton />)
    expect(getByRole('button')).toMatchSnapshot()
  })

  it('Should render Sell Trade Button with Sell label', () => {
    const { getByRole } = render(
      <TradeButton tradeType="sell">Sell</TradeButton>,
    )
    const tradeButton = getByRole('button')
    expect(tradeButton).toMatchSnapshot()
    expect(tradeButton).toHaveTextContent('Sell')
  })

  it('Should render Buy Trade Button with Buy label', () => {
    const { getByRole } = render(<TradeButton tradeType="buy">Buy</TradeButton>)
    const tradeButton = getByRole('button')
    expect(tradeButton).toMatchSnapshot()
    expect(tradeButton).toHaveTextContent('Buy')
  })

  tradeButtonVariants.forEach((variant) => {
    it(`Should render ${variant} Trade Button`, () => {
      const { getByRole } = render(<TradeButton variant={variant} />)
      expect(getByRole('button')).toMatchSnapshot()
    })
  })

  tradeButtonSizes.forEach((size) => {
    it(`Should render ${size} Trade Button`, () => {
      const { getByRole } = render(<TradeButton size={size} />)
      expect(getByRole('button')).toMatchSnapshot()
    })
  })
})
