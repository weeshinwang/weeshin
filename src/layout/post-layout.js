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
import rangeParser from "parse-numeric-range"
// import Comments from "../components/remark-ninja"

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

export default function PageTemplate({ data: { mdx } }) {
  const { theme } = useContext(ThemeContext)

  const codeBlockTheme = theme === "dark" ? nightOwl : nightOwlLight

  const PrismSyntaxHighlightingComponent = {
    pre: (props) => {
      const className = props.children.props.className || ""

      const matches = className.match(/language-(?<lang>.*)/)

      const shouldHighlightLine = calculateLinesToHighlight(
        props.children.props.metastring
      )

      return (
        <Highlight
          {...defaultProps}
          code={props.children.props.children.trim()}
          language={
            matches && matches.groups && matches.groups.lang
              ? matches.groups.lang.toLowerCase()
              : ""
          }
          theme={codeBlockTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => {
                console.log("🚩🚩🚩", shouldHighlightLine(i))
                if (shouldHighlightLine(i)) {
                  return (
                    <HighlightLines key={i} {...getLineProps({ line, key: i })}>
                      <LineNo>{i + 1}</LineNo>
                      <LineContent>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </HighlightLines>
                  )
                }
                return (
                  <Line key={i} {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    <LineContent>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </LineContent>
                  </Line>
                )
              })}
            </Pre>
          )}
        </Highlight>
      )
    },
  }

  // set anchor tag to open in new tab
  useEffect(() => {
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
          <SinglePostDateWrapper>
            <p>
              发布于：{mdx.frontmatter.date}
              {mdx.frontmatter.date === mdx.frontmatter.lastmod ||
                ` | 修改于：${mdx.frontmatter.lastmod}`}
            </p>
          </SinglePostDateWrapper>
        </SinglePostContentWrapper>
        <SinglePostCommentWrapper></SinglePostCommentWrapper>
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
  & * {
    text-align: justify;
  }
  background: var(--color-gray-100);
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
  padding: 10px 15px;
  /* sticky header */
  position: sticky;
  top: 0;
  background-color: inherit;
  background: var(--color-background);
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
  background: var(--color-background);
  padding: 0 20px;
  justify-self: center;
  grid-row: 2;
  min-width: 300px;
  max-width: 800px;
  line-height: 1.6rem;

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

  & h2 {
    margin: 32px 0px 16px 0px;
  }
  & h3 {
    margin: 16px 0px 8px 0px;
  }

  & h2 {
    &::before {
      content: "##";
      margin-right: 8px;
      display: inline-block;
      color: var(--color-hover-bg);
    }
  }

  & h3 {
    &::before {
      content: "###";
      margin-right: 8px;
      display: inline-block;
      color: var(--color-hover-bg);
    }
  }

  & a {
    text-decoration: none;
    border-bottom: dotted 2px var(--color-hover-bg);
  }

  & ul,
  & ol {
    padding: 10px 15px;
    margin-left: 0px;
    /* list-style-type: space-counter; */
  }
`
const SinglePostDateWrapper = styled.div`
  padding: 10px 0;
  & p {
    text-align: center;
    font-weight: bold;
  }
`

const SinglePostCommentWrapper = styled.div`
  background: var(--color-background);
  justify-self: center;
  align-self: center;
  grid-row: 3;
  & > p {
    color: var(--gray-500);
  }
`
const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.6em 0.8em;
  overflow: scroll;
`

const Line = styled.div`
  display: table-row;
  display: block;
  margin-left: -0.6em;
`

const HighlightLines = styled.div`
  display: table-row;
  background-color: var(--color-highlight-line);
  display: block;
  border-left: 0.2em solid var(--color-highlight-mark);
  margin-left: -0.8em;
  width: calc(100% + 1.6em);
`

const LineNo = styled.span`
  padding-left: 0.8rem;
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`
