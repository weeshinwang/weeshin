import React from "react"
import App from "./src/components/app"

import { COLOR_MODE_KEY, HTML_THEME_PROP } from "./src/utils/constants"
// import { minify } from "terser"

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  const ISSERVER = typeof window === "undefined";
  const getColorPreference = () => {
    if (ISSERVER) return "light"
    if (localStorage.getItem("${COLOR_MODE_KEY}")) {
      return localStorage.getItem("${COLOR_MODE_KEY}")
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  };
  const colorMode = getColorPreference();
  const root = document.documentElement;
  root.setAttribute("${HTML_THEME_PROP}", colorMode);
})()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="first-render-styles" />)
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
