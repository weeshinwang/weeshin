import React from "react"
import Layout from "../layout/layout"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {} from "gatsby"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout title="about">
      <h1>{mdx.frontmatter.displayTitle}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
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
