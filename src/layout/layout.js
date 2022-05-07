import React from "react"
import styled from "styled-components/macro"
import GlobalStyle from "../components/global-styles"
import Seo from "./seo"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        <Seo
          title={title}
          description={description}
          image={image}
          path={path}
        />
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutWrapper>
    </>
  )
}

const LayoutWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 8fr 1fr / 50px 1fr 50px;
  grid-template-areas:
    "header header header"
    "left main right"
    "footer footer footer";
`

const MainWrapper = styled.div`
  grid-area: main;
`
