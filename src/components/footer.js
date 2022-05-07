import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>made by weeshin with ♥️ & ☕</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  text-align: center;
  grid-area: footer;
  & a {
    text-decoration: underline dotted #f47fb5;
    color: initial;
    &:hover {
      background-color: #f47fb5;
      color: white;
      text-decoration: none;
    }
    transition: 0.3s;
  }
`

export default React.memo(Footer)
