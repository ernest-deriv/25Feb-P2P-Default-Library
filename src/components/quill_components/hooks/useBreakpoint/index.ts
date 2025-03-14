import BreakpointContext from 'contexts/screen'
import { useContext } from 'react'

export const useBreakpoint = () => {
  const screens = useContext(BreakpointContext)
  return screens
}

export default useBreakpoint
