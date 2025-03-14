import { useMediaQuery } from 'usehooks-ts'
import QuillTailwindConfig from '../../../quill-tailwind/tailwind.config.cjs'
import BreakpointContext, { BreakpointContextValue } from 'contexts/screen'
import { useMemo } from 'react'

const screens = QuillTailwindConfig!.theme!.screens as Record<string, string>

export interface ScreenProviderProps {
  children: React.ReactNode
}

export const BreakpointProvider = ({ children }: ScreenProviderProps) => {
  const isXs = useMediaQuery(`(max-width: ${screens.sm})`)
  const isSm = useMediaQuery(`(min-width: ${screens.sm})`)
  const isMd = useMediaQuery(`(min-width: ${screens.md})`)
  const isLg = useMediaQuery(`(min-width: ${screens.lg})`)
  const isXl = useMediaQuery(`(min-width: ${screens.xl})`)
  const isXXl = useMediaQuery(`(min-width: ${screens['2xl']})`)
  const isMobile = useMediaQuery(`(max-width: ${screens.md})`)
  const isTablet = useMediaQuery(
    `(min-width: ${screens.md}) and (max-width: ${screens.lg})`,
  )
  const isDesktop = useMediaQuery(`(min-width: ${screens.lg})`)

  const value: BreakpointContextValue = useMemo(() => {
    return {
      isXs,
      isSm,
      isMd,
      isLg,
      isXl,
      isXXl,
      isMobile,
      isTablet,
      isDesktop,
    }
  }, [isDesktop, isLg, isMd, isMobile, isSm, isTablet, isXXl, isXl, isXs])

  return (
    <BreakpointContext.Provider value={value}>
      {children}
    </BreakpointContext.Provider>
  )
}

export default BreakpointProvider
