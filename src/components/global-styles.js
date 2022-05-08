import styled, { createGlobalStyle } from "styled-components/macro"
import {
  LIGHT_COLORS,
  DARK_COLORS,
  BREAKPOINTS,
  BREAKPOINT_SIZES,
} from "../utils/constants"

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
    background-image: ${LIGHT_COLORS.homepageBgImage}

    /* background-image: linear-gradient(
  325deg,
  hsl(258deg 100% 7%) 0%,
  hsl(289deg 100% 6%) 11%,
  hsl(313deg 100% 6%) 22%,
  hsl(331deg 88% 7%) 33%,
  hsl(349deg 70% 8%) 44%,
  hsl(10deg 68% 8%) 56%,
  hsl(22deg 69% 7%) 67%,
  hsl(30deg 53% 7%) 78%,
  hsl(37deg 29% 8%) 89%,
  hsl(48deg 11% 9%) 100%
); */
  }
  :root {
    --font-size: 16px
  }
  * {
    color: ${LIGHT_COLORS.text};
  }
`
export default GlobalStyle
