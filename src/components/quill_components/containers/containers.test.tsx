import { render } from 'test-utils'
import FixContainer from './fix'
import FluidContainer from './fluid'

describe('FixContainer', () => {
  it('should render correctly', () => {
    const { container } = render(<FixContainer />)
    expect(container).toMatchSnapshot()
  })
})

describe('FluidContainer', () => {
  it('should render correctly', () => {
    const { container } = render(<FluidContainer />)
    expect(container).toMatchSnapshot()
  })
})
