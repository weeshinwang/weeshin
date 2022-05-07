import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import Logo from "./logo"
import Nav from "./nav"
import ThemeSwitcher from "./theme-switcher"

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <DesktopNav />
      </Left>
      <RightDesktop>
        <IconWrapper>
          <ThemeSwitcher />
        </IconWrapper>
      </RightDesktop>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 48px;
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0;
  margin: 10px auto;
`

const Left = styled.div`
  display: flex;
  flex: 4;
  justify-content: space-around;
  align-items: flex-end;
`

const RightDesktop = styled.div`
  flex: 1;
`

const LogoWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 25%;
  border: 1px solid lightyellow;
  overflow: hidden;
  transition: 750ms ease-in-out;
  &:hover {
    transform: rotate(360deg);
    cursor: pointer;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 32px;
`

const DesktopNav = styled(Nav)``

export default React.memo(Header)
