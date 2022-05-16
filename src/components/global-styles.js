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
    --color-button-hover-bg:${COLORS["button-hover-bg"].light};
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

    &[data-theme="dark"]{
      --color-text:${COLORS["text"].dark};
    --color-hover-text:${COLORS["hover-text"].dark};
    --color-hover-bg:${COLORS["hover-bg"].dark};
    --color-button-hover-bg:${COLORS["button-hover-bg"].dark};
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
    background: var(--color-background-gradient);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    transition: color 350ms ease 0s, background 350ms ease 0s;
    font-size: var(--font-size);
  }

  body * {
    color: var(--color-text);
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
      background-color: var(--color-hover-bg);
      color: var(--color-hover-text);
      text-decoration: none;
      & code {
        color: var(--color-hover-text);
      }
    }
    transition: background 500ms;
  }
/*
  *, *::before, *::after {
    transition: background 0.4s ease 0s, background-color 0.4s ease 0s, border-color 0.4s ease 0s, background-image 0.4s ease 0s
  } */
`
export default GlobalStyles
