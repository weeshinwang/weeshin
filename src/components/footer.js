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
`

export default React.memo(Footer)
