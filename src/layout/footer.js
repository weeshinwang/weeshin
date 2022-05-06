import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        made by with <Link to="/">weeshin</Link> ♥️ & ☕
      </p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0px;
  text-align: center;
  & a {
    text-decoration: underline dotted #f47fb5;
    color: initial;
    &:hover {
      background-color: #f47fb5;
      color: white;
      text-decoration: none;
    }
    transition: 0.5s;
  }
`
