import { createContext } from 'react'
import { Theme } from 'types'

export type ThemeContextValue = {
  theme: Theme
  toggleTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
})

export default ThemeContext
