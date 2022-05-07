import React from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.title}>
              <h2>{post.frontmatter.displayTitle}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
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
export default BlogIndex
