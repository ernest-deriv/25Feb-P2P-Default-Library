import ThemeContext from 'contexts/theme'
import { useEffect, useState } from 'react'
import { Theme } from 'types'
import { useMediaQuery } from 'usehooks-ts'

export interface ThemeProviderProps {
  children: React.ReactNode
  theme?: Theme
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | undefined>(theme)
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme ?? 'light')

  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const toggleTheme = (updatedTheme: Theme) => {
    setSelectedTheme(updatedTheme)
  }

  useEffect(() => {
    if (!selectedTheme) {
      setCurrentTheme(systemPrefersDark ? 'dark' : 'light')
    } else {
      setCurrentTheme(selectedTheme)
    }
  }, [selectedTheme, systemPrefersDark])

  useEffect(() => {
    const root = document.documentElement
    if (currentTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
