import React from "react"
import styled from "styled-components"

export default function SoundToggle() {
  return (
    <>
      <svg width={24} height={24} viewBox="0 0 18 18" fill="none">
        <FilledPath
          d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
          stroke-linecap="round"
          stroke-linejoin="round"
          // shouldWiggle={triggerWiggle}
        />
        <Path
          d={`
            M14.3025 3.69751
            C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
            C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025
          `}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          // style={{
          //   opacity: soundEnabled ? 1 : 0,
          //   transitionDelay: soundEnabled ? "150ms" : "0ms",
          // }}
        />
        <Path
          d={`
            M11.655 6.34501
            C12.358 7.04824 12.753 8.00189 12.753 8.99626
            C12.753 9.99063 12.358 10.9443 11.655 11.6475
          `}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          // style={{
          //   opacity: soundEnabled ? 1 : 0,
          //   transitionDelay: soundEnabled ? "0ms" : "150ms",
          // }}
        />
      </svg>
    </>
  )
}

const Path = styled.path``

const FilledPath = styled(Path)``