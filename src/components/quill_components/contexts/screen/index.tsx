import { createContext } from 'react'

export type BreakpointContextValue = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  isXXl: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const BreakpointContext = createContext<BreakpointContextValue>({
  isXs: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  isXXl: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
})

export default BreakpointContext
