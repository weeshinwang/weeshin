import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import Logo from "./logo"
import Nav from "./nav"
import ThemeSwitcher from "./theme-switcher"

const Header = () => {
  return (
    <HeaderWrapper>
      <Left>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
      </Left>
      <DesktopNav />
      <RightDesktop>
        <IconWrapper>
          <ThemeSwitcher />
        </IconWrapper>
      </RightDesktop>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  grid-area: header;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  justify-items: center;
  align-items: end;
`

const Left = styled.div`
  grid-column: 1/2;
  justify-self: end;
`

const DesktopNav = styled(Nav)`
  grid-column: 2/3;
`

const RightDesktop = styled.div`
  grid-column: 3/4;
  justify-self: start;
`

const LogoWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 25%;
  overflow: hidden;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const IconWrapper = styled.div`
  /* display: flex;
  justify-content: flex-end;
  padding-right: 32px; */
`

export default React.memo(Header)
