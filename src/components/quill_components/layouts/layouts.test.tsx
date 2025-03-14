import { render } from 'test-utils'
import { AppLayout } from '.'

describe('AppLayout', () => {
  it('should render with proper classes', () => {
    const { container } = render(<AppLayout />)
    expect(container).toMatchSnapshot()
  })
})
