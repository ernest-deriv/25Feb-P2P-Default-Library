import { render } from 'test-utils'
import SocialAppleButton from '.'
import userEvent from '@testing-library/user-event'

describe('Social Google Button', () => {
  it('Should render Default Button', () => {
    const { container } = render(<SocialAppleButton>Label</SocialAppleButton>)
    expect(container).toMatchSnapshot()
  })

  it('Should render IconButton with className=opacity-50', () => {
    const { container } = render(
      <SocialAppleButton className="opacity-50">Label</SocialAppleButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Primary Variant', () => {
    const { container } = render(
      <SocialAppleButton variant="primary">Label</SocialAppleButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Secondary Variant', () => {
    const { container } = render(
      <SocialAppleButton variant="secondary">Label</SocialAppleButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render properly with fullWidth true', () => {
    const { container } = render(
      <SocialAppleButton fullWidth>Label</SocialAppleButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render no label if hideLabel is true', () => {
    const { container } = render(
      <SocialAppleButton hideLabel>Label</SocialAppleButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should handle onClick', async () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <SocialAppleButton onClick={onClick}>Label</SocialAppleButton>,
    )
    await userEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
