import React from "react"
import styled from "styled-components"

export function VideoEmbed({ src, type = "mp4", title, showTitle = false }) {
  return (
    <>
      <video controls style={{ width: "100%", position: "relative" }}>
        <source src={src} type={`video/${type}`} />
        <Title>{title}</Title>
      </video>
      {showTitle || <Title>{title}</Title>}
    </>
  )
}

const Title = styled.p`
  text-align: center;
  color: var(--color-gray-700);
`
