import React, { useEffect } from "react"
import Layout from "../layout/layout"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {} from "gatsby"
import styled from "styled-components"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  // set anchor tag to open in new tab
  useEffect(() => {
    document.querySelectorAll("a").forEach((a) => {
      a.setAttribute("target", "_blank")
      a.setAttribute("rel", "noopener noreferrer")
    })
  }, [])

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
  margin: 32px auto;
  min-width: 300px;
  max-width: 700px;
  padding: 0 16px;
  line-height: 2;
  font-size: 1rem;
  & ul,
  & ol {
    padding: 0px 15px;
    margin-left: 0px;

    /* list-style-type: space-counter; */
  }
`
