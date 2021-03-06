import React from "react"
import styled from "styled-components/macro"
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
  min-height: 100%;
  display: grid;
  grid-template: 60px 1fr 60px / auto minmax(min-content, 1100px) auto;
  grid-template-areas:
    "header header header"
    "left main right"
    "footer footer footer";
`

const MainWrapper = styled.main`
  grid-area: main;
`
