import React from "react"
import styled from "styled-components/macro"
import Layout from "../layout/layout"
import WavingHand from "../components/waving-hand"
import SocialIcons from "../components/social-icons"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <ContentWrapper>
        <IntroWrapper>
          <p>
            <WavingHand />
            <span> 你好 </span>
          </p>
          <p>我是 weeshin</p>
        </IntroWrapper>
        <SecondaryIntroWrapper>
          <p>一个自学的前端工程师</p>
        </SecondaryIntroWrapper>
        <NavButtonWrapper>
          <NavButton>
            <StyledLink to="/projects">我的项目</StyledLink>
          </NavButton>
          <NavButton>
            <StyledLink to="/posts">我的文章</StyledLink>
          </NavButton>
          <NavButton>
            <StyledLink to="/about">关于我</StyledLink>
          </NavButton>
        </NavButtonWrapper>
        <SocialIconWrapper>
          <SocialIcons />
        </SocialIconWrapper>
      </ContentWrapper>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  max-width: 700px;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  grid-area: "main";
  align-items: center;
  justify-content: center;
`

const IntroWrapper = styled.div`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
  white-space: nowrap;
`

const SecondaryIntroWrapper = styled.div`
  & > p {
    color: var(--gray-500);
  }
`

const NavButtonWrapper = styled.div`
  transition: opacity 500ms ease-in-out;
  opacity: 0;
  height: 0;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    opacity: 1;
    height: auto;
    margin-top: 10px;
    text-align: center;
  }

  will-change: opacity;
`

const SocialIconWrapper = styled.div`
  margin-top: 20px;
`

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  border-bottom: none;

  &:hover {
    color: var(--text);
    background-color: initial;
  }
`

const NavButton = styled.div`
  will-change: background-color;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: var(--nav-button-bg);
  box-shadow: var(--shadow-elevation-low);
  border-radius: 5px;
  animation: navButtonBgAnimation 1500ms ease-in-out infinite alternate;
  animation-delay: 3s;

  @keyframes navButtonBgAnimation {
    from {
      background-color: var(--nav-button-bg);
    }
    to {
      background-color: var(--nav-button-hover-bg);
    }
  }

  &:hover {
    background-color: var(--nav-button-hover-bg);
  }
`
