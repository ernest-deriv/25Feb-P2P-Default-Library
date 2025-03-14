import ThemeContext from 'contexts/theme'
import { useContext } from 'react'

export const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme
