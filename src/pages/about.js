import React from "react"
import Layout from "../layout/layout"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {} from "gatsby"
import styled from "styled-components"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout title="about">
      <AboutPageWrapper>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </AboutPageWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GetAboutContent {
    mdx(frontmatter: { type: { eq: "about" } }) {
      id
      body
      frontmatter {
        title
        displayTitle
      }
    }
  }
`
const AboutPageWrapper = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  min-width: 300px;
  max-width: 700px;
  padding: 0 16px;
`
