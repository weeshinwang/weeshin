import React from "react"
import styled, { keyframes, css } from "styled-components/macro"

export default function WavingHand() {
  return (
    <WavingHands role="img" aria-label="Waving hand">
      👋
    </WavingHands>
  )
}

const WavingHands = styled.span`
  display: inline-block;
  animation: ${() =>
    css`
      ${Waving} 1750ms ease-in-out both infinite
    `};
  transform-origin: 75% 85%;
  font-size: 3rem;
`

const Waving = keyframes`
0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(14deg);
  }
  30% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(14deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  60% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }`
