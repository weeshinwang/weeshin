import React, { useContext, useEffect } from "react"
import ThemeContext from "../components/theme-context"
import Seo from "./seo"
import ThemeSwitcher from "../components/theme-switcher"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled from "styled-components/macro"
import Highlight, { defaultProps } from "prism-react-renderer"
import nightOwl from "prism-react-renderer/themes/nightOwl"
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight"
// import Comments from "../components/remark-ninja"

export default function PageTemplate({ data: { mdx } }) {
  const { theme } = useContext(ThemeContext)

  const codeBlockTheme = theme === "dark" ? nightOwl : nightOwlLight

  const PrismSyntaxHighlightingComponent = {
    pre: (props) => {
      const className = props.children.props.className || ""

      const matches = className.match(/language-(?<lang>.*)/)

      return (
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          language={
            matches && matches.groups && matches.groups.lang
              ? matches.groups.lang.toLowerCase()
              : ""
          }
          theme={codeBlockTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
    },
  }

  // set anchor tag to open in new tab
  useEffect(() => {
    console.log("😂😂😂")
    document.querySelectorAll("a").forEach((a) => {
      a.setAttribute("target", "_blank")
      a.setAttribute("rel", "noopener noreferrer")
    })
  }, [])

  return (
    <>
      <Seo title="posts" />
      <SinglePostWrapper>
        <SinglePostHeader>
          <div>
            <Link to="/posts">⬅️</Link>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </SinglePostHeader>
        <SinglePostContentWrapper>
          <h1>{mdx.frontmatter.displayTitle}</h1>
          <MDXProvider components={PrismSyntaxHighlightingComponent}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
          {/* <Comments /> */}
        </SinglePostContentWrapper>
        <SinglePostDateWrapper>
          <p>
            发布于：{mdx.frontmatter.date}
            {mdx.frontmatter.date === mdx.frontmatter.lastmod ||
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
  grid-template-rows: 50px 1fr 50px;
  justify-content: center;
  padding: 0 20px;
  & * {
    text-align: justify;
  }
  background: var(--color-background);
  margin: 0 auto;
  min-height: 100%;
`

const SinglePostHeader = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  line-height: 1;
  align-items: end;
  border-bottom: 1px solid var(--color-gray-500);
  padding: 10px 0;
  /* sticky header */
  position: sticky;
  top: 0;
  background-color: inherit;

  & > div:first-of-type {
    padding: 0;
    margin: 0;

    /* @media not all and (hover: none) {
      &:hover {
        transform: none;
      }
    } */
    /* TODO: should be optimized for doom flicker */
    &:hover {
      transform: translateY(-2px);
    }
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
  min-width: 300px;
  max-width: 700px;

  & pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  & span.token {
    display: inline-block;
    /* white-space: normal; */
    max-width: 100%;
    word-break: break-all;
    word-wrap: break-word;
  }

  & h1 {
    margin: 16px 0;
  }

  & h2,
  & h3 {
    margin-top: 16px;
  }

  & a {
    text-decoration: none;
    border-bottom: dotted 2px hsl(332, 84%, 73%);
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
