import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/layout"
import styled from "styled-components/macro"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <PostListWrapper>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.title}>
              <h2>{post.frontmatter.displayTitle}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </PostListWrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            displayTitle
          }
        }
      }
    }
  }
`

const PostListWrapper = styled.ul`
  list-style: none;
  max-width: 700px;
  margin: 0 auto;
`

export default BlogIndex
