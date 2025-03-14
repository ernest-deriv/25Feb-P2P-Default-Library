import {
  RenderOptions,
  RenderResult,
  render as rtlRender,
  screen,
} from 'test-utils'
import { LabelPairedCircleInfoSmBoldIcon } from '@deriv/quill-icons/LabelPaired'
import Tab from '..'
import { TabContextType } from '../container'
import userEvent from '@testing-library/user-event'
import { TabSize } from '../types'

const render = (
  ui: React.ReactElement,
  options?: RenderOptions & {
    wrapperProps?: TabContextType
  },
): RenderResult => {
  const { wrapperProps, ...renderOptions } = options || {}
  return rtlRender(ui, {
    wrapper: (props: TabContextType) => (
      <Tab.Container {...props} {...wrapperProps} />
    ),
    ...renderOptions,
  })
}

describe('<Tab.Trigger/>', () => {
  it('should render correctly', () => {
    render(<Tab.Trigger>Trigger</Tab.Trigger>)
    const trigger = screen.getByText('Trigger')
    expect(trigger).toBeInTheDocument()
  })
  it('should render the quill icon as children', () => {
    render(
      <Tab.Container id="tab">
        <Tab.Trigger icon={LabelPairedCircleInfoSmBoldIcon}>
          trigger
        </Tab.Trigger>
      </Tab.Container>,
    )
    const triggerIcon = screen.getByTestId('dt-tab-trigger-icon')
    expect(triggerIcon).toBeInTheDocument()
  })

  it('should set first item active initialy', () => {
    render(
      <>
        <Tab.Trigger>Tab 1</Tab.Trigger>
        <Tab.Trigger>Tab 2</Tab.Trigger>
        <Tab.Trigger>Tab 3</Tab.Trigger>
      </>,
    )
    const firstTab = screen.getByRole('tab', { name: 'Tab 1' })
    expect(firstTab).toHaveAttribute('aria-selected', 'true')
  })

  it('should set the clicked item active and others not active', async () => {
    render(
      <>
        <Tab.Trigger>Tab 1</Tab.Trigger>
        <Tab.Trigger>Tab 2</Tab.Trigger>
        <Tab.Trigger>Tab 3</Tab.Trigger>
      </>,
    )
    const secondTab = screen.getByRole('tab', { name: 'Tab 2' })
    await userEvent.click(secondTab)
    expect(secondTab).toHaveAttribute('aria-selected', 'true')
    const firstTab = screen.getByRole('tab', { name: 'Tab 1' })
    expect(firstTab).toHaveAttribute('aria-selected', 'false')
  })

  const sizes: TabSize[] = ['sm', 'md']
  sizes.forEach((size) => {
    it(`should render correctly with size ${size}`, () => {
      render(
        <Tab.Trigger>
          <p>{size} trigger</p>
        </Tab.Trigger>,
        {
          wrapperProps: {
            size,
          },
        },
      )
      const actionRoot = screen.getByText(`${size} trigger`)
      expect(actionRoot).toMatchSnapshot()
    })
  })
})
