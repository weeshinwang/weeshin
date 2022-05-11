import React, { useContext } from "react"
import { createGlobalStyle } from "styled-components/macro"
import { LIGHT_COLORS, DARK_COLORS } from "../utils/constants"
import ThemeContext from "./theme-context"
import "../utils/font.css"

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

  --code-shadow-color: 0deg 0% 63%;
  --code-shadow-elevation-low:
    0.7px 0.6px 1px hsl(var(--code-shadow-color) / 0.34),
    1.1px 1.1px 1.8px -1.2px hsl(var(--code-shadow-color) / 0.34),
    2.6px 2.6px 4.1px -2.5px hsl(var(--code-shadow-color) / 0.34);
  --code-shadow-elevation-medium:
    0.7px 0.6px 1px hsl(var(--code-shadow-color) / 0.36),
    2.2px 2.1px 3.4px -0.8px hsl(var(--code-shadow-color) / 0.36),
    5.4px 5.3px 8.5px -1.7px hsl(var(--code-shadow-color) / 0.36),
    13.2px 12.9px 20.8px -2.5px hsl(var(--code-shadow-color) / 0.36);
  --code-shadow-elevation-high:
    0.7px 0.6px 1px hsl(var(--code-shadow-color) / 0.34),
    3.8px 3.8px 6px -0.4px hsl(var(--code-shadow-color) / 0.34),
    7.2px 7px 11.3px -0.7px hsl(var(--code-shadow-color) / 0.34),
    11.8px 11.6px 18.6px -1.1px hsl(var(--code-shadow-color) / 0.34),
    18.8px 18.5px 29.7px -1.4px hsl(var(--code-shadow-color) / 0.34),
    29.4px 28.9px 46.4px -1.8px hsl(var(--code-shadow-color) / 0.34),
    44.7px 43.9px 70.5px -2.1px hsl(var(--code-shadow-color) / 0.34),
    65.8px 64.6px 103.7px -2.5px hsl(var(--code-shadow-color) / 0.34);



    --nav-button-bg: ${(props) =>
      props.theme === "dark" ? `hsl(320, 50%, 15%)` : `hsl(335, 80%, 95%)`};

    --nav-button-hover-bg: ${(props) =>
      props.theme === "dark" ? `hsl(265deg 26% 42%)` : `hsl(350, 70%, 85%)`};

    --gray-500: ${(props) =>
      props.theme === "dark" ? `hsl(225deg, 7%, 60%)` : `hsl(210deg, 8%, 50%)`};

    --font-size: 16px;
    font-size: var(--font-size);

    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  body {
    margin: 0;
    background-size:contain
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

  pre {
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px 0;
    box-shadow: var(--code-shadow-elevation-low);
    & * {
      font-family: 'Roboto Mono', monospace;
    }
  }

  /* #f47fb5 */
  a {
    text-decoration: underline dotted 2px hsl(332, 84%, 73%);
    &:hover {
      background-color: var(--hover-bg);
      color: var(--hover-text);
      text-decoration: none
    }
    transition: background 500ms;
  }
`
