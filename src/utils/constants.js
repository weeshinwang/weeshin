export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
export const HTML_THEME_PROP = "data-theme"
export const BOX_SHADOW_VARIABLE = "--color-box-shadow"
export const CODE_BOX_SHADOW_VARIABLE = "--color-box-shadow-code"

export const LIGHT_COLORS = {
  text: "hsl(222deg, 22%, 5%)",
  hoverBg: "hsl(332.3,84.2%,72.7%)",
  hoverText: "hsl(0deg, 0%, 100%)",
  codeText: "hsl(0deg, 79%, 63%)",
  codeBg: "hsla(44, 6%, 50%, 0.15)",
  highlightLine: "hsl(325deg, 50%, 90%)",
  quoteBorder: "hsl(160, 80%, 35%)",
  quoteBackground: "hsl(160, 80%, 95%)",
  gray: {
    100: "hsl(225deg, 25%, 95%)",
    200: "hsl(225deg, 16%, 90%)",
    300: "hsl(225deg, 8%, 80%)",
    400: "hsl(225deg, 8%, 70%)",
    500: "hsl(225deg, 7%, 60%)",
    // Accessible:
    600: "hsl(225deg, 15%, 50%)",
    700: "hsl(225deg, 12%, 40%)",
    900: "hsl(225deg, 25%, 20%)",
    1000: "hsl(225deg, 15%, 15%)",
  },
  gradientBackground: `linear-gradient(
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
  )`,
  background: "hsl(0deg, 0%, 100%)",
  blurredBackground: "hsla(0deg, 0%, 100%, 0.85)",
  primary: "hsl(245deg, 100%, 60%)",
  secondary: "hsl(333deg, 100%, 45%)",
  tertiary: "hsl(255deg, 85%, 30%)",
  decorative: "hsl(200deg, 75%, 65%)",
  muted: "hsl(210deg, 55%, 92%)",
  mutedBackground: "hsla(210deg, 55%, 92%, 0.85)",
  error: "hsl(340deg, 95%, 50%)",
  errorBackground: "hsla(340deg, 95%, 43%, 0.1)",
  success: "hsl(160deg, 100%, 40%)",
  successBackground: "hsla(160deg, 100%, 40%, 0.1)",
  alert: "hsl(37deg, 100%, 50%)",
  alertBackground: "hsla(52deg, 100%, 50%, 0.25)",
  venn: ["hsl(190deg, 100%, 65%)", "hsl(340deg, 100%, 65%)"],

  boxShadow: {
    baseBox: {
      shadowColor: "347deg 32% 66%",
      shadowElevationLow: `0.7px 0.8px 1.2px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.41),
      2.6px 2.8px 4.3px -2.5px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.41)`,
      shadowElevationMedium: `0.7px 0.8px 1.2px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.57),
      12.8px 14.2px 21.5px -2.5px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.57)`,
      shadowElevationHigh: `0.7px 0.8px 1.2px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.71),
      13px 14.4px 21.8px -1.2px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.71),
      56.7px 62.9px 95.3px -2.5px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.71)`,
    },
    codeBox: `0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)`,
  },
  buttonBg: "hsl(335, 80%, 95%)",
  buttonHoverBg: "hsl(350, 70%, 85%)",
}

LIGHT_COLORS.syntax = {
  bg: "hsl(225deg, 25%, 97%)",
  highlight: "hsl(225deg, 25%, 93%)",
  txt: "#2A2A2A",
  comment: "#467790",
  prop: "#da0079",
  bool: "#bf00b8",
  val: "#78909C",
  str: "#651fff",
  name: "#AA00FF",
  del: "rgb(255, 85, 85)",
  regex: "#3600d6",
  fn: "#3D5AFE",
}

export const DARK_COLORS = {
  text: "hsl(0deg, 0%, 100%)",
  hoverBg: "hsl(332.3,84.2%,72.7%)",
  hoverText: "hsl(0deg, 0%, 100%)",
  codeText: "hsl(0deg, 79%, 63%)",
  codeBg: "hsla(44, 6%, 50%, 0.15)",
  highlightLine: "hsl(325deg, 50%, 20%)",
  quoteBorder: "hsl(160, 80%, 40%)",
  quoteBackground: "hsl(160, 90%, 7%)",
  gray: {
    100: "hsl(210deg, 15%, 20%)",
    200: "hsl(210deg, 15%, 25%)",
    300: "hsl(210deg, 10%, 40%)",
    400: "hsl(210deg, 9%, 45%)",
    500: "hsl(210deg, 8%, 50%)",
    // Accessible:
    600: "hsl(210deg, 12%, 55%)",
    700: "hsl(210deg, 14%, 66%)",
    900: "hsl(210deg, 25%, 88%)",
    1000: "hsl(210deg, 25%, 96%)",
  },
  gradientBackground: `linear-gradient(
    315deg,
    hsl(353deg 100% 15%) 0%,
    hsl(342deg 100% 14%) 3%,
    hsl(335deg 92% 14%) 8%,
    hsl(328deg 79% 13%) 15%,
    hsl(318deg 62% 12%) 25%,
    hsl(302deg 46% 12%) 39%,
    hsl(280deg 39% 12%) 56%,
    hsl(259deg 33% 12%) 73%,
    hsl(239deg 29% 11%) 88%,
    hsl(225deg 33% 9%) 100%
  )`,
  background: "hsl(210deg, 30%, 8%)",
  blurredBackground: "hsla(210deg, 30%, 8%, 0.85)",
  primary: "hsl(230deg, 100%, 67%)",
  secondary: "hsl(333deg, 100%, 52%)",
  tertiary: "hsl(53deg, 100%, 50%)",
  decorative: "hsl(200deg, 50%, 60%)",
  muted: "hsl(210deg, 38%, 15%)",
  mutedBackground: "hsla(210deg, 38%, 15%, 0.85)",
  error: "hsl(340deg, 95%, 60%)",
  errorBackground: "hsla(340deg, 95%, 43%, 0.1)",
  success: "hsl(160deg, 100%, 40%)",
  successBackground: "hsla(160deg, 100%, 40%, 0.1)",
  alert: "hsl(30deg, 100%, 50%)",
  alertBackground: "hsla(38deg, 100%, 50%, 0.1)",
  venn: ["hsl(250deg, 100%, 50%)", "hsl(175deg, 100%, 50%)"],

  boxShadow: {
    baseBox: {
      shadowColor: "265deg 26% 42%",
      shadowElevationLow: `0.3px 0.5px 0.7px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34);`,
      shadowElevationMedium: `    0.3px 0.5px 0.7px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.36);`,
      shadowElevationHigh: `0.3px 0.5px 0.7px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      1.9px 3.2px 4.2px -0.4px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      3.5px 6px 7.8px -0.7px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      5.8px 9.8px 12.8px -1.1px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      9.2px 15.7px 20.5px -1.4px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      14.4px 24.5px 32px -1.8px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      21.9px 37.2px 48.6px -2.1px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34),
      32.3px 54.9px 71.7px -2.5px hsl(var(${BOX_SHADOW_VARIABLE}) / 0.34)`,
    },
    codeBox: `0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)`,
  },
  buttonBg: "hsl(320, 50%, 15%)",
  buttonHoverBg: "hsl(265deg 26% 42%)",
}

DARK_COLORS.syntax = {
  bg: "hsl(210deg, 30%, 12%)",
  highlight: "hsl(210deg, 30%, 18%)",
  txt: "#FFF",
  comment: "#6c8998",
  prop: "#FF39A8",
  bool: "#FFD600",
  val: "#61747D",
  str: "rgb(155, 109, 255)",
  name: "#C653FF",
  del: "#FF5555",
  regex: "#ffd700",
  fn: "rgb(0, 190, 255)",
}

export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 563,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export const BREAKPOINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(min-width: ${BREAKPOINT_SIZES.xs}px and max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(min-width: ${BREAKPOINT_SIZES.sm}px and max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.md}px and max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(min-width: ${BREAKPOINT_SIZES.lg}px and max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  smAndSmaller: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  mdAndSmaller: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lgAndSmaller: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xlAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndLarger: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
  smAndLarger: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  mdAndLarger: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
  lgAndLarger: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
  xlAndLarger: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
  mobile: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
}

export const FONT_STYLES = {
  baseFontSize: "16px",
}

// export const SPRINGS = {
//   default: {
//     // This is literally the default for React Spring.
//     // Kept here for reference, not because I should use it.
//     tension: 170,
//     friction: 26,
//   },
//   light: {
//     tension: 170,
//     friction: 18,
//   },
//   springy: {
//     tension: 300,
//     friction: 10,
//   },
//   lush: {
//     tension: 170,
//     friction: 50,
//   },
//   molasses: {
//     tension: 170,
//     friction: 75,
//   },
// }

// export const READING_WIDTH = 850
// export const EXTRA_WIDE_WIDTH = 1024

// const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i

// const userAgent =
//   typeof window !== "undefined" ? window.navigator.userAgent : "node"

// export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent)

// export const UNIT = 8

// export const Z_INDICES = {
//   hero: 1,
//   mainContent: 10,
//   header: 100,
// }

// // This key is used in localStorage to remember theme preferences
// export const PREFERS_DARK_KEY = "prefers-dark"

// export const PREFERS_DARK_CSS_PROP = `--${PREFERS_DARK_KEY}`
// export const COLOR_SWAP_TRANSITION_DURATION = 350

// export const THEME = {
//   unit: UNIT,
//   breakpoints: BREAKPOINTS,
// }

// export const HEADER_HEIGHT = 60

// export const TIGHT_SPRING = {
//   tension: 450,
//   friction: 25,
// }

// export const MAX_NUM_OF_LIKES = 16
// export const CONVERTKIT_TAGS_BY_ID = {
//   spring: "1800658",
//   "primary-newsletter": "1800626",
//   careers: "1350186",
//   technical: "1350187",
//   "joy-of-react-updates": "2988052",
// }

// export const THUMB_FOCUS_GRADIENT = `
//   radial-gradient(
//     hsl(48deg 100% 75% / 1),
//     hsl(48deg 100% 75% / 0) 40%
//   ),
//   conic-gradient(
//     from 90deg at 50% 50%,
//     hsl(45deg 100% 55%),
//     hsl(52deg 100% 75%),
//     hsl(45deg 100% 55%),
//     hsl(52deg 100% 75%),
//     hsl(45deg 100% 55%),
//     hsl(52deg 100% 95%),
//     hsl(45deg 100% 55%)
//   )
// `

// export const LIGHT_COLORS = {
//   text: "hsl(222deg, 22%, 5%)",
//   hover: "hsl(332.3,84.2%,72.7%)",
//   background: "hsl(0deg, 0%, 100%)",
//   blurredBackground: "hsla(0deg, 0%, 100%, 0.85)",
//   primary: "hsl(245deg, 100%, 60%)",
//   secondary: "hsl(333deg, 100%, 45%)",
//   tertiary: "hsl(255deg, 85%, 30%)",
//   decorative: "hsl(200deg, 75%, 65%)",
//   muted: "hsl(210deg, 55%, 92%)",
//   mutedBackground: "hsla(210deg, 55%, 92%, 0.85)",
//   error: "hsl(340deg, 95%, 50%)",
//   errorBackground: "hsla(340deg, 95%, 43%, 0.1)",
//   success: "hsl(160deg, 100%, 40%)",
//   successBackground: "hsla(160deg, 100%, 40%, 0.1)",
//   alert: "hsl(37deg, 100%, 50%)",
//   alertBackground: "hsla(52deg, 100%, 50%, 0.25)",
//   venn: ["hsl(190deg, 100%, 65%)", "hsl(340deg, 100%, 65%)"],
//   gray: {
//     100: "hsl(225deg, 25%, 95%)",
//     200: "hsl(225deg, 16%, 90%)",
//     300: "hsl(225deg, 8%, 80%)",
//     400: "hsl(225deg, 8%, 70%)",
//     500: "hsl(225deg, 7%, 60%)",
//     // Accessible:
//     600: "hsl(225deg, 15%, 50%)",
//     700: "hsl(225deg, 12%, 40%)",
//     900: "hsl(225deg, 25%, 20%)",
//     1000: "hsl(225deg, 15%, 15%)",
//   },
// }

// LIGHT_COLORS.subtleBackground = LIGHT_COLORS.gray[100]
// LIGHT_COLORS.subtleFloating = LIGHT_COLORS.background
// LIGHT_COLORS.homepageLight = "hsl(204deg, 67%, 85%)"
// LIGHT_COLORS.homepageDark = "hsl(202deg, 71%, 90%)"
// LIGHT_COLORS.homepageBg = LIGHT_COLORS.homepageLight
// LIGHT_COLORS.info = LIGHT_COLORS.primary

// LIGHT_COLORS.syntax = {
//   bg: "hsl(225deg, 25%, 97%)",
//   highlight: "hsl(225deg, 25%, 93%)",
//   txt: "#2A2A2A",
//   comment: "#467790",
//   prop: "#da0079",
//   bool: "#bf00b8",
//   val: "#78909C",
//   str: "#651fff",
//   name: "#AA00FF",
//   del: "rgb(255, 85, 85)",
//   regex: "#3600d6",
//   fn: "#3D5AFE",
// }

// export const DARK_COLORS = {
//   text: "hsl(0deg, 0%, 100%)",
//   background: "hsl(210deg, 30%, 8%)",
//   blurredBackground: "hsla(210deg, 30%, 8%, 0.85)",
//   primary: "hsl(230deg, 100%, 67%)",
//   secondary: "hsl(333deg, 100%, 52%)",
//   tertiary: "hsl(53deg, 100%, 50%)",
//   decorative: "hsl(200deg, 50%, 60%)",
//   muted: "hsl(210deg, 38%, 15%)",
//   mutedBackground: "hsla(210deg, 38%, 15%, 0.85)",
//   error: "hsl(340deg, 95%, 60%)",
//   errorBackground: "hsla(340deg, 95%, 43%, 0.1)",
//   success: "hsl(160deg, 100%, 40%)",
//   successBackground: "hsla(160deg, 100%, 40%, 0.1)",
//   alert: "hsl(30deg, 100%, 50%)",
//   alertBackground: "hsla(38deg, 100%, 50%, 0.1)",
//   venn: ["hsl(250deg, 100%, 50%)", "hsl(175deg, 100%, 50%)"],
//   gray: {
//     100: "hsl(210deg, 15%, 20%)",
//     200: "hsl(210deg, 15%, 25%)",
//     300: "hsl(210deg, 10%, 40%)",
//     400: "hsl(210deg, 9%, 45%)",
//     500: "hsl(210deg, 8%, 50%)",
//     // Accessible:
//     600: "hsl(210deg, 12%, 55%)",
//     700: "hsl(210deg, 14%, 66%)",
//     900: "hsl(210deg, 25%, 88%)",
//     1000: "hsl(210deg, 25%, 96%)",
//   },
// }

// DARK_COLORS.subtleBackground = DARK_COLORS.background
// DARK_COLORS.subtleFloating = "hsl(210deg, 22%, 15%)"
// DARK_COLORS.homepageLight = "hsla(200deg, 100%, 85%, 0)"
// DARK_COLORS.homepageDark = "hsla(200deg, 100%, 85%, 0.1)"
// DARK_COLORS.homepageBg = DARK_COLORS.background
// DARK_COLORS.info = DARK_COLORS.primary

// DARK_COLORS.syntax = {
//   bg: "hsl(210deg, 30%, 12%)",
//   highlight: "hsl(210deg, 30%, 18%)",
//   txt: "#FFF",
//   comment: "#6c8998",
//   prop: "#FF39A8",
//   bool: "#FFD600",
//   val: "#61747D",
//   str: "rgb(155, 109, 255)",
//   name: "#C653FF",
//   del: "#FF5555",
//   regex: "#ffd700",
//   fn: "rgb(0, 190, 255)",
// }

export const COLORS = {
  text: {
    light: LIGHT_COLORS.text,
    dark: DARK_COLORS.text,
  },
  "hover-text": {
    light: LIGHT_COLORS.hoverText,
    dark: DARK_COLORS.hoverText,
  },
  "hover-bg": {
    light: LIGHT_COLORS.hoverBg,
    dark: DARK_COLORS.hoverBg,
  },
  "code-text": {
    light: LIGHT_COLORS.codeText,
    dark: DARK_COLORS.codeText,
  },
  "code-bg": {
    light: LIGHT_COLORS.codeBg,
    dark: DARK_COLORS.codeBg,
  },
  "button-bg": {
    light: LIGHT_COLORS.buttonBg,
    dark: DARK_COLORS.buttonBg,
  },
  "button-hover-bg": {
    light: LIGHT_COLORS.buttonHoverBg,
    dark: DARK_COLORS.buttonHoverBg,
  },
  "color-highlight-line": {
    light: LIGHT_COLORS.highlightLine,
    dark: DARK_COLORS.highlightLine,
  },
  "color-quote-border": {
    light: LIGHT_COLORS.quoteBorder,
    dark: DARK_COLORS.quoteBorder,
  },
  "color-quote-background": {
    light: LIGHT_COLORS.quoteBackground,
    dark: DARK_COLORS.quoteBackground,
  },
  background: {
    light: LIGHT_COLORS.background,
    dark: DARK_COLORS.background,
  },
  "background-blurred": {
    light: LIGHT_COLORS.blurredBackground,
    dark: DARK_COLORS.blurredBackground,
  },
  "background-muted": {
    light: LIGHT_COLORS.mutedBackground,
    dark: DARK_COLORS.mutedBackground,
  },
  "background-gradient": {
    light: LIGHT_COLORS.gradientBackground,
    dark: DARK_COLORS.gradientBackground,
  },
  "gray-100": {
    light: LIGHT_COLORS.gray[100],
    dark: DARK_COLORS.gray[100],
  },
  "gray-300": {
    light: LIGHT_COLORS.gray[300],
    dark: DARK_COLORS.gray[300],
  },
  "gray-500": {
    light: LIGHT_COLORS.gray[500],
    dark: DARK_COLORS.gray[500],
  },
  "gray-700": {
    light: LIGHT_COLORS.gray[700],
    dark: DARK_COLORS.gray[700],
  },
  "gray-900": {
    light: LIGHT_COLORS.gray[900],
    dark: DARK_COLORS.gray[900],
  },
  "box-shadow": {
    light: LIGHT_COLORS.boxShadow.baseBox.shadowColor,
    dark: DARK_COLORS.boxShadow.baseBox.shadowColor,
  },
  "shadow-elevation-low": {
    light: LIGHT_COLORS.boxShadow.baseBox.shadowElevationLow,
    dark: DARK_COLORS.boxShadow.baseBox.shadowElevationLow,
  },
  "shadow-elevation-medium": {
    light: LIGHT_COLORS.boxShadow.baseBox.shadowElevationMedium,
    dark: DARK_COLORS.boxShadow.baseBox.shadowElevationMedium,
  },
  "shadow-elevation-high": {
    light: LIGHT_COLORS.boxShadow.baseBox.shadowElevationHigh,
    dark: DARK_COLORS.boxShadow.baseBox.shadowElevationHigh,
  },
  "box-shadow-code": {
    light: LIGHT_COLORS.boxShadow.codeBox,
    dark: DARK_COLORS.boxShadow.codeBox,
  },
}
