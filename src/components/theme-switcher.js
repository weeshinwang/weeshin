import React, { useLayoutEffect, useContext } from "react"
import styled from "styled-components"
import { THEME_STORAGE_KEY } from "../utils/constants"
import ThemeContext from "./theme-context"

export default function ThemeSwitcher() {
  const storageKey = THEME_STORAGE_KEY
  const ISSERVER = typeof window === "undefined"

  const setPreference = () => {
    if (ISSERVER) return
    localStorage.setItem(storageKey, theme)
    reflectPreference()
  }

  const [theme, setTheme] = useContext(ThemeContext)

  useLayoutEffect(setPreference)

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme)
  }

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <SwitcherWrapper aria-label={theme} onClick={handleClick}>
        <Svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 24 24">
          <mask className="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
          <circle
            className="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <g className="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </Svg>
      </SwitcherWrapper>
    </>
  )
}

const SwitcherWrapper = styled.button`
  --size: 1.5rem;
  --icon-fill: hsl(210 10% 15%);
  --icon-fill-hover: hsl(210 10% 30%);

  background: none;
  border: none;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  outline-offset: 5px;

  /* TODO: should this line  be removed for accessibility
  button:focus { outline:0 !important; } */

  &:focus {
    outline: 0;
  }

  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  [data-theme="dark"] & {
    --icon-fill: hsl(210 15% 90%);
    --icon-fill-hover: hsl(210 10% 70%);
  }

  /* @media (hover: none) {
    --size: 48px;
  } */
`

const Svg = styled.svg`
  --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
  --ease-out-5: cubic-bezier(0, 0, 0, 1);
  --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
  --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);

  /* TODO: wechat browser is not supported */
  & > :is(.moon, .sun, .sun-beams) {
    transform-origin: center center;
  }

  & > .moon,
  & > .sun,
  & > .sun-beams {
    transform-origin: center center;
  }

  & > :is(.moon, .sun) {
    fill: var(--icon-fill);

    ${SwitcherWrapper}:is(:hover, :focus-visible) > & {
      fill: var(--icon-fill-hover);
    }
  }

  & > .sun-beams {
    stroke: var(--icon-fill);
    stroke-width: 2px;

    ${SwitcherWrapper}:is(:hover, :focus-visible) & {
      stroke: var(--icon-fill-hover);
    }
  }

  [data-theme="dark"] & {
    & > .sun {
      transform: scale(1.75);
    }

    & > .sun-beams {
      opacity: 0;
    }

    & > .moon > circle {
      transform: translateX(-7px);

      @supports (cx: 1) {
        transform: translateX(0);
        cx: 17;
      }
    }
  }

  & > .sun {
    transition: transform 0.5s var(--ease-elastic-3);
  }

  & > .sun-beams {
    transition: transform 0.5s var(--ease-elastic-4), opacity 0.5s var(--ease-3);
  }

  & .moon > circle {
    transition: transform 0.25s var(--ease-out-5);

    @supports (cx: 1) {
      transition: cx 0.25s var(--ease-out-5);
    }
  }

  [data-theme="dark"] & {
    & > .sun {
      transform: scale(1.75);
      transition-timing-function: var(--ease-3);
      transition-duration: 0.25s;
    }

    & > .sun-beams {
      transform: rotateZ(-25deg);
      transition-duration: 0.15s;
    }

    & > .moon > circle {
      transition-delay: 0.25s;
      transition-duration: 0.5s;
    }
  }
`
