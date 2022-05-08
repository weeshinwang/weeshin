import React, { useContext } from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components/macro"
import {
  LIGHT_COLORS,
  DARK_COLORS,
  BREAKPOINTS,
  BREAKPOINT_SIZES,
} from "../utils/constants"
import ThemeContext from "./theme-context"

export default function GlobalStyles() {
  const [theme] = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle theme={theme} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  /* GRAB FROM https://www.joshwcomeau.com/css/custom-css-reset/ */
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root {
    isolation: isolate;
  }

  /*
  10. Gatsby Specific settings
  */
  /* #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    height: 100%;
  } */
  #___gatsby, #gatsby-focus-wrapper {
    all: inherit;
  }


  html, body {
    background-image: ${(props) =>
      props.theme === "dark"
        ? DARK_COLORS.homepageBgImage
        : LIGHT_COLORS.homepageBgImage}

  }

  :root {
    --font-size: 16px;
    font-size: 16px;
  }

  * {
    color: ${(props) =>
      props.theme === "dark" ? DARK_COLORS.text : LIGHT_COLORS.text};
    transition: 500ms;
  }
`
