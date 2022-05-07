import { createGlobalStyle } from "styled-components/macro"

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
    isolation: isolate;
  }

  html, body{


    background-image: linear-gradient(
      315deg,
      hsl(240deg 100% 93%) 0%,
      hsl(266deg 83% 92%) 9%,
      hsl(297deg 62% 91%) 18%,
      hsl(324deg 96% 93%) 27%,
      hsl(337deg 100% 94%) 36%,
      hsl(351deg 100% 95%) 45%,
      hsl(7deg 100% 95%) 55%,
      hsl(19deg 100% 95%) 64%,
      hsl(28deg 100% 95%) 73%,
      hsl(36deg 100% 95%) 82%,
      hsl(45deg 100% 96%) 91%,
      hsl(56deg 100% 97%) 100%
    );

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


`
export default GlobalStyle
