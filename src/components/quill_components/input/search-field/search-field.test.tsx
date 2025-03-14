import { render, screen } from 'test-utils'
import SearchField from '.'
import userEvent from '@testing-library/user-event'

describe('SearchField', () => {
  it('It should render a default SearchField', () => {
    const { container } = render(<SearchField />)
    expect(container).toMatchSnapshot()
  })
  it('It should render a SearchField with a given classname and type passed a prop', () => {
    const customProps = {
      type: 'Search',
      className: 'bg-transparent',
    }
    const { container } = render(<SearchField {...customProps} />)
    expect(container).toMatchSnapshot()
  })
  it('It should handle SearchField change', async () => {
    const onChange = jest.fn()
    render(<SearchField onChange={onChange} placeholder="Search" />)
    const input = screen.getByPlaceholderText('Search')
    await userEvent.type(input, 'test')
    expect(onChange).toHaveBeenCalledTimes(4)
  })
  it('It should handle SearchField focus', async () => {
    const onFocus = jest.fn()
    render(<SearchField onFocus={onFocus} placeholder="Search" />)
    const input = screen.getByPlaceholderText('Search')
    await userEvent.click(input)
    expect(onFocus).toHaveBeenCalledTimes(1)
    expect(input).toHaveFocus()
  })
  it('It should handle SearchField blur', async () => {
    const onBlur = jest.fn()
    render(<SearchField onBlur={onBlur} placeholder="Search" />)
    const input = screen.getByPlaceholderText('Search')
    await userEvent.click(input)
    await userEvent.tab()
    expect(onBlur).toHaveBeenCalledTimes(1)
    expect(input).not.toHaveFocus()
  })

  it('It should render a TextField with success status', () => {
    const { container } = render(<SearchField status="success" />)
    expect(container).toMatchSnapshot()
  })
  it('It should render a TextField with error status', () => {
    const { container } = render(<SearchField status="error" />)
    expect(container).toMatchSnapshot()
  })
})
