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
        {/* <LinkButtonWrapper>
          <Button>
            <StyledLink to="/prjects">我的项目</StyledLink>
          </Button>
          <Button>
            <StyledLink to="posts">我的文章</StyledLink>
          </Button>
        </LinkButtonWrapper> */}
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

const SecondaryIntroWrapper = styled.div``

const LinkButtonWrapper = styled.div`
  margin-top: 50px;
  font-size: 1.2rem;
`

const SocialIconWrapper = styled.div`
  margin-top: 30px;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 5px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0 10px;
  background-color: #f47fb5;
  & > a {
    text-decoration: none;
    &:visited {
      border-color: white;
    }
  }
`

const StyledLink = styled(Link)`
  color: white;
`
