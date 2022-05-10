import React, { useContext } from "react"
import Seo from "./seo"
import ThemeSwitcher from "../components/theme-switcher"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled from "styled-components/macro"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <Seo title="posts" />
      <SinglePostWrapper>
        <SintlePostHeader>
          <div>
            <Link to="/posts">⬅️</Link>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </SintlePostHeader>
        <SinglePostContentWrapper>
          <h1>{mdx.frontmatter.displayTitle}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </SinglePostContentWrapper>
        <SinglePostDateWrapper>
          <p>
            发布于：{mdx.frontmatter.date}
            {mdx.frontmatter.date == mdx.frontmatter.lastmod ||
              ` | 修改于：${mdx.frontmatter.lastmod}`}
          </p>
        </SinglePostDateWrapper>
      </SinglePostWrapper>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        displayTitle
        date(formatString: "YYYY-MM-DD")
        lastmod(formatString: "YYYY-MM-DD")
      }
    }
  }
`

const SinglePostWrapper = styled.div`
  display: grid;
  grid-template: 50px 1fr 50px / auto;
  justify-content: center;
  /* margin: 0 20px; */
  padding: 0 20px;
  & * {
    text-align: justify;
  }
  background: var(--post-background-color);
`

const SintlePostHeader = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: end;
  border-bottom: 1px solid var(--gray-500);
  padding: 5px 0;

  & > div:first-of-type {
    margin-bottom: -5px;
  }

  & > div:first-of-type:hover {
    transform: translateY(-2px);
  }
  & a {
    text-decoration: none;
    &:hover {
      background-color: initial;
    }
  }
`

const SinglePostContentWrapper = styled.div`
  justify-self: center;
  grid-row: 2;
  min-width: 330px;
  max-width: 700px;

  & pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
`
const SinglePostDateWrapper = styled.div`
  justify-self: center;
  align-self: center;
  grid-row: 3;
  & > p {
    color: var(--gray-500);
  }
`
