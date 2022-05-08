import React from "react"
import styled from "styled-components/macro"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>made by weeshin with ♥️ & ☕</p>
      <a href="https://beian.miit.gov.cn/">湘ICP备2020019461号-1</a>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  grid-area: footer;
  text-align: center;
  justify-items: center;
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
