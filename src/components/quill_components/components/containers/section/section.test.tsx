import { render } from 'test-utils'

import Section from '.'

describe('Section', () => {
  it('should render section component', () => {
    render(<Section />)

    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('should render article component when as prop is passed', () => {
    render(<Section as="article" />)

    expect(document.querySelector('article')).toBeInTheDocument()
  })
})
