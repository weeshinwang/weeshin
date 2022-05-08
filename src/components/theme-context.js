import React, { useState } from "react"
import { THEME_STORAGE_KEY } from "../utils/constants"

const ThemeContext = React.createContext()

export function ThemeProvider({ children }) {
  const storageKey = THEME_STORAGE_KEY

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
  }

  const defaultTheme = getColorPreference()

  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
