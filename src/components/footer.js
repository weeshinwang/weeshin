import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        <span>🌞</span>
        <span>
          <Link to="https://github.com/weeshinwang">github</Link>
        </span>
        <span>|</span>
        <Link to="https://gitee.com/weeshin">gitee</Link>
        <span>|</span>
        <Link to="mailto://weeshin@foxmail.com">email</Link>
        <span>|</span>
        <Link to="https://github.com/weeshinwang">wechat</Link>
        <span>🌞</span>
      </p>
      <p>made by weeshin with ♥️ & ☕</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 10px;
  text-align: center;
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
