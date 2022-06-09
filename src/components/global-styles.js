import { createGlobalStyle } from "styled-components/macro"
import "../utils/font.css"
import { COLORS } from "../utils/constants"

const GlobalStyles = createGlobalStyle`
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

  /* 11. Setting global styles variables */

  html {
    --color-text:${COLORS["text"].light};
    --color-hover-text:${COLORS["hover-text"].light};
    --color-hover-bg:${COLORS["hover-bg"].light};
    --color-code-text: ${COLORS["code-text"].light};
    --color-code-bg: ${COLORS["code-bg"].light};
    --color-button-hover-bg:${COLORS["button-hover-bg"].light};
    --color-highlight-line: ${COLORS["color-highlight-line"].light};
    --color-highlight-mark: ${COLORS["color-highlight-line"].dark};
    --color-background:${COLORS["background"].light};
    --color-background-blurred:${COLORS["background-blurred"].light};
    --color-background-muted:${COLORS["background-muted"].light};
    --color-background-gradient:${COLORS["background-gradient"].light};
    --color-gray-100:${COLORS["gray-100"].light};
    --color-gray-300:${COLORS["gray-300"].light};
    --color-gray-500:${COLORS["gray-500"].light};
    --color-gray-700:${COLORS["gray-700"].light};
    --color-gray-900:${COLORS["gray-900"].light};
    --color-box-shadow:${COLORS["box-shadow"].light};
    --color-shadow-elevation-low:${COLORS["shadow-elevation-low"].light};
    --color-shadow-elevation-medium:${COLORS["shadow-elevation-medium"].light};
    --color-shadow-elevation-high:${COLORS["shadow-elevation-high"].light};
    --color-box-shadow-code:${COLORS["box-shadow-code"].light};
    --color-shadow-elevation-low-code:${COLORS["shadow-elevation-low-code"].light};
    --color-shadow-elevation-medium-code:${COLORS["shadow-elevation-medium-code"].light};
    --color-shadow-elevation-high-code:${COLORS["shadow-elevation-high-code"].light};
    --font-size: 16px;


    &[data-theme="dark"] {
    --color-text:${COLORS["text"].dark};
    --color-hover-text:${COLORS["hover-text"].dark};
    --color-hover-bg:${COLORS["hover-bg"].dark};
    --color-code-text: ${COLORS["code-text"].dark};
    --color-code-bg: ${COLORS["code-bg"].dark};
    --color-button-hover-bg:${COLORS["button-hover-bg"].dark};
    --color-highlight-line: ${COLORS["color-highlight-line"].dark};
    --color-highlight-mark: ${COLORS["color-highlight-line"].light};
    --color-background:${COLORS["background"].dark};
    --color-background-blurred:${COLORS["background-blurred"].dark};
    --color-background-muted:${COLORS["background-muted"].dark};
    --color-background-gradient:${COLORS["background-gradient"].dark};
    --color-gray-100:${COLORS["gray-100"].dark};
    --color-gray-300:${COLORS["gray-300"].dark};
    --color-gray-500:${COLORS["gray-500"].dark};
    --color-gray-700:${COLORS["gray-700"].dark};
    --color-gray-900:${COLORS["gray-900"].dark};
    --color-box-shadow:${COLORS["box-shadow"].dark};
    --color-shadow-elevation-low:${COLORS["shadow-elevation-low"].dark};
    --color-shadow-elevation-medium:${COLORS["shadow-elevation-medium"].dark};
    --color-shadow-elevation-high:${COLORS["shadow-elevation-high"].dark};
    --color-box-shadow-code:${COLORS["box-shadow-code"].dark};
    --color-shadow-elevation-low-code:${COLORS["shadow-elevation-low-code"].dark};
    --color-shadow-elevation-medium-code:${COLORS["shadow-elevation-medium-code"].dark};
    --color-shadow-elevation-high-code:${COLORS["shadow-elevation-high-code"].dark};
    }
  }

  body {
    color: var(--color-text);
    font-size: var(--font-size);
    font-family: 'Merriweather Sans', system-ui, —apple-system, Roboto, Segoe UI, Emoji, Helvetica, Arial, sans-serif;
    h1 {
      font-size: 1.375rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }

  pre {
    padding: 0px 1.5rem;
    padding-top: 2rem;
    border-radius: 10px;
    margin: 1rem 0;
    box-shadow: var(--code-shadow-elevation-low);
    & * {
      font-family: 'JetBrains Mono', monospace;
    }
  }

  #___gatsby {
    &::before {
      content: '';
      background-image: var(--color-background-gradient);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: fixed;
      min-height: 100vh;
      width: 100vw;
      z-index: -1;
    }
    position: absolute;
    width: 100%;
  }

  code {
    font-family: 'JetBrains Mono', monospace;
    line-height: normal;
    background: var(--color-code-bg);
    color: var(--color-code-text);
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }

  /* #f47fb5 */
  a {
    color: var(--color-text);
    text-decoration: underline dotted 2px hsl(332, 84%, 73%);
    &:hover {
      background-color: var(--color-hover-bg);
      color: var(--color-hover-text);
      text-decoration: none;
      & code {
        color: var(--color-hover-text);
      }
    }
    transition: background 500ms;
  }
`
export default GlobalStyles
