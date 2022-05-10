import React, { useContext } from "react"
import { createGlobalStyle } from "styled-components/macro"
import { LIGHT_COLORS, DARK_COLORS } from "../utils/constants"
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
  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  /* 11. Define Global Variables */
  html {
    --background-image: ${(props) =>
      props.theme === "dark"
        ? DARK_COLORS.homepageBgImage
        : LIGHT_COLORS.homepageBgImage};
    --post-background-color: ${(props) =>
      props.theme === "dark"
        ? DARK_COLORS.background
        : LIGHT_COLORS.background};
    --text: ${(props) =>
      props.theme === "dark" ? DARK_COLORS.text : LIGHT_COLORS.text};
    --hover-bg: ${(props) =>
      props.theme === "dark" ? DARK_COLORS.hoverBg : LIGHT_COLORS.hoverBg};
    --hover-text: ${(props) =>
      props.theme === "dark" ? DARK_COLORS.hoverText : LIGHT_COLORS.hoverText};
    --blurred-background: ${(props) =>
      props.theme === "dark"
        ? DARK_COLORS.blurredBackground
        : LIGHT_COLORS.blurredBackground};
    --muted-background: ${(props) =>
      props.theme === "dark"
        ? DARK_COLORS.mutedBackground
        : LIGHT_COLORS.mutedBackground};


    --shadow-color: ${(props) =>
      props.theme === "dark" ? "265deg 26% 42%" : "347deg 32% 66%"};

    --shadow-elevation-low: ${(props) =>
      props.theme === "dark"
        ? `0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
        0.5px 0.9px 1.2px -1.2px hsl(var(--shadow-color) / 0.34),
        1.3px 2.2px 2.9px -2.5px hsl(var(--shadow-color) / 0.34)`
        : `0.7px 0.8px 1.2px hsl(var(--shadow-color) / 0.41),
    2.6px 2.8px 4.3px -2.5px hsl(var(--shadow-color) / 0.41)`};

    --shadow-elevation-medium: ${(props) =>
      props.theme === "dark"
        ? `0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    1.1px 1.8px 2.4px -0.8px hsl(var(--shadow-color) / 0.36),
    2.7px 4.5px 5.9px -1.7px hsl(var(--shadow-color) / 0.36),
    6.5px 11px 14.4px -2.5px hsl(var(--shadow-color) / 0.36)`
        : `0.7px 0.8px 1.2px hsl(var(--shadow-color) / 0.57),
    12.8px 14.2px 21.5px -2.5px hsl(var(--shadow-color) / 0.57)`};

    --shadow-elevation-high: ${(props) =>
      props.theme === "dark"
        ? `0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.9px 3.2px 4.2px -0.4px hsl(var(--shadow-color) / 0.34),
    3.5px 6px 7.8px -0.7px hsl(var(--shadow-color) / 0.34),
    5.8px 9.8px 12.8px -1.1px hsl(var(--shadow-color) / 0.34),
    9.2px 15.7px 20.5px -1.4px hsl(var(--shadow-color) / 0.34),
    14.4px 24.5px 32px -1.8px hsl(var(--shadow-color) / 0.34),
    21.9px 37.2px 48.6px -2.1px hsl(var(--shadow-color) / 0.34),
    32.3px 54.9px 71.7px -2.5px hsl(var(--shadow-color) / 0.34)`
        : `0.7px 0.8px 1.2px hsl(var(--shadow-color) / 0.71),
    13px 14.4px 21.8px -1.2px hsl(var(--shadow-color) / 0.71),
    56.7px 62.9px 95.3px -2.5px hsl(var(--shadow-color) / 0.71)`};

    --nav-button-bg: ${(props) =>
      props.theme === "dark" ? `hsl(320, 50%, 15%)` : `hsl(335, 80%, 95%)`};

    --nav-button-hover-bg: ${(props) =>
      props.theme === "dark" ? `hsl(265deg 26% 42%)` : `hsl(350, 70%, 85%)`};

    --gray-500: ${(props) =>
      props.theme === "dark" ? `hsl(225deg, 7%, 60%)` : `hsl(210deg, 8%, 50%)`};

    --font-size: 16px;
    font-size: var(--font-size);
  }
  body {
    background-image: var(--background-image);
    transition: background 300ms;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  body * {
    color: var(--text);
    h1 {
      font-size: 1.375rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    font-family: Roboto, sans-serif;
  }

  a {
    text-decoration: underline dotted #f47fb5;
    &:hover {
      background-color: var(--hover-bg);
      color: var(--hover-text);
      text-decoration: none
    }
    transition: background 500ms;
  }
`
