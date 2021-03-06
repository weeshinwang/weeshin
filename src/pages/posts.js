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
            <li key={post.id}>
              <Link to={post.id}>
                <PostCardWrapper>
                  <h1>{post.frontmatter.displayTitle}</h1>
                  <p>{post.frontmatter.date}</p>
                </PostCardWrapper>
              </Link>
            </li>
          ))}
        </PostWrapper>
      </PostPageWrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
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
  & a {
    text-decoration: none;
    &:hover {
      color: var(--color-text);
    }
  }
`

const PostCardWrapper = styled.div`
  min-width: 330px;
  margin: 30px 0;
  box-shadow: 0px 5px 30px -8px hsl(var(--color-box-shadow));
  border-radius: 5px;
  padding: 10px;

  &:active,
  &:focus {
    background-color: var(--color-button-hover-bg);
    cursor: pointer;
    box-shadow: none;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--color-button-hover-bg);
      cursor: pointer;
      box-shadow: none;
    }
  }

  & p:first-of-type {
    color: var(--color-gray-700);
  }

  & * {
    margin: 5px 0;
  }

  & h1 {
    padding-bottom: 5px;
  }
`

export default BlogIndex
