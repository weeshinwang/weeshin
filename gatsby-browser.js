import React from "react"
import App from "./src/components/app"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
