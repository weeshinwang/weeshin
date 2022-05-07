import React from "react"
import styled from "styled-components/macro"
import Layout from "../layout/layout"
import WavingHand from "../components/waving-hand"
import SocialIcons from "../components/social-icons"

export default function Home() {
  return (
    <Layout>
      <ContentWrapper>
        <IntroWrapper>
          <div>
            <WavingHand />
            <span>你好，我是 weeshin</span>
            <p>一个自学的前端工程师</p>
          </div>
          <div>
            <Button>我的项目</Button>
            <Button>我的文章</Button>
          </div>
          <div>
            <SocialIconWrapper>
              <SocialIcons />
            </SocialIconWrapper>
          </div>
        </IntroWrapper>
      </ContentWrapper>
    </Layout>
  )
}

const ContentWrapper = styled.div`
  max-width: 700px;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 5px;
  justify-self: center;
  margin: 0 auto;
  display: flex;
  grid-area: "main";
`

const IntroWrapper = styled.div`
  flex: 2;
`

const FrontImageWrapper = styled.div`
  flex: 1;
  align-self: center;
`

const Button = styled.button``

const SocialIconWrapper = styled.div``
