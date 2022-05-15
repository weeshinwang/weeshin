import React from "react"
import App from "./src/components/app"

import {
  INITIAL_COLOR_MODE_CSS_PROP,
  HTML_THEME_PROP,
  COLOR_MODE_KEY,
  COLORS,
} from "./src/utils/constants"
import { minify } from "terser"

function setColorsByTheme() {
  const colors = "🌈"
  const colorModeKey = "🔑"
  const colorModeCssProp = "⚡️"
  const htmlThemeProp = "🚩"

  const prefersDarkFromMQ = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches

  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = "light"
  if (typeof persistedPreference === "string") {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light"
  }

  localStorage.setItem(colorModeKey, colorMode)

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)
  root.setAttribute(htmlThemeProp, colorMode)

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP)
    .replace("🚩", HTML_THEME_PROP)

  let calledFunction = `(${boundFn})()`

  calledFunction = minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`
    },
    ""
  )

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([<FallbackStyles key="fallback-styles" />])
  setPreBodyComponents([<MagicScriptTag key="first-render-styles" />])
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
