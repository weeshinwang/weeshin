import React from "react"
import { ThemeProvider } from "./theme-context"
import GlobalStyles from "./global-styles"

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
