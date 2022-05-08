import React from "react"

import { ThemeProvider } from "./src/components/theme-context"

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>
}
