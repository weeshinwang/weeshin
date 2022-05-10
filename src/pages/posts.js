import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/layout"
import styled from "styled-components/macro"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout title="posts">
      <PostPageWrapper>
        <PostWrapper>
          {posts.map(({ node: post }) => (
            <PostCardWrapper>
              <li key={post.id}>
                <Link to={post.frontmatter.title}>
                  <h1>{post.frontmatter.displayTitle}</h1>
                  <p>{post.frontmatter.date}</p>
                  <p>{post.excerpt}</p>
                </Link>
              </li>
            </PostCardWrapper>
          ))}
        </PostWrapper>
      </PostPageWrapper>
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
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`

const PostPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-content: center;
`

const PostWrapper = styled.ul`
  list-style: none;
  padding: 0 15px;
`

const PostCardWrapper = styled.div`
  min-width: 330px;
  margin: 30px 0;
  box-shadow: var(--shadow-elevation-medium);
  border-radius: 5px;
  padding: 20px;
  &:hover {
    background-color: var(--nav-button-hover-bg);
    cursor: pointer;
  }
  & > li a {
    text-decoration: none;
  }

  & > li p:first-of-type {
    color: var(--gray-500);
  }

  & > li * {
    margin: 5px 0;
  }
`

export default BlogIndex
