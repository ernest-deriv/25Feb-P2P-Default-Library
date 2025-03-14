import { ComponentProps } from 'react'
import Tab from '..'

const MockTab = ({
  size,
  iconPosition,
  ...props
}: ComponentProps<typeof Tab.Container> &
  ComponentProps<typeof Tab.Trigger>) => {
  return (
    <Tab.Container id="test" size={size} iconPosition={iconPosition}>
      <Tab.List>
        <Tab.Trigger {...props}>Forex</Tab.Trigger>
        <Tab.Trigger {...props}>Derived Indices</Tab.Trigger>
        <Tab.Trigger disabled={true} {...props}>
          Stocks
        </Tab.Trigger>
      </Tab.List>
      <Tab.Content>
        <Tab.Panel>Forex Tab</Tab.Panel>
        <Tab.Panel>Derived indices Tab</Tab.Panel>
        <Tab.Panel>Stocks Tab</Tab.Panel>
      </Tab.Content>
    </Tab.Container>
  )
}
export default MockTab
