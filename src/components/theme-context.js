import React, { useState, useMemo, useEffect } from "react"
import {
  COLOR_MODE_KEY,
  HTML_THEME_PROP,
  INITIAL_COLOR_MODE_CSS_PROP,
  COLORS,
} from "../utils/constants"

const ThemeContext = React.createContext()

export function ThemeProvider({ children }) {
  const [theme, rawSetTheme] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColor = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )

    rawSetTheme(initialColor)
  }, [])

  const contextValue = useMemo(() => {
    const setTheme = (value) => {
      const root = window.document.documentElement

      localStorage.setItem(COLOR_MODE_KEY, value)

      root.setAttribute(HTML_THEME_PROP, value)

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`
        root.style.setProperty(cssVarName, colorByTheme[value])
      })

      rawSetTheme(value)
    }

    return { theme, setTheme }
  }, [theme, rawSetTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
