import { render, screen } from 'test-utils'
import Tab from '..'

describe('<Tab.List/>', () => {
  it('should render correctly', () => {
    render(<Tab.List>List</Tab.List>)
    const list = screen.getByText('List')
    expect(list).toBeInTheDocument()
  })
})
