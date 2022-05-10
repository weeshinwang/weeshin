import React from "react"
import { ThemeProvider } from "./src/components/theme-context"
import GlobalStyles from "./src/components/global-styles"

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>
}
