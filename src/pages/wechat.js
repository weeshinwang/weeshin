import React from "react"
import styled from "styled-components/macro"
import Layout from "../layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function WechatPage() {
  const data = useStaticQuery(graphql`
    query GetWeChat {
      file(name: { eq: "wechat" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <Layout title="wechat">
      <WechatWrapper>
        <WechatImageWrapper>
          <GatsbyImage image={getImage(data.file)} alt="Main Logo" />
        </WechatImageWrapper>
      </WechatWrapper>
    </Layout>
  )
}

const WechatWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
`
const WechatImageWrapper = styled.div`
  width: 300px;
  height: 300px;
`
