import React, { useContext, useEffect } from "react"
import ThemeContext from "../components/theme-context"
import Seo from "./seo"
import ThemeSwitcher from "../components/theme-switcher"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as MdxEmbed from "mdx-embed"
import { Link } from "gatsby"
import styled from "styled-components/macro"
import Highlight, { defaultProps } from "prism-react-renderer"
import nightOwl from "prism-react-renderer/themes/nightOwl"
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight"
import rangeParser from "parse-numeric-range"
import { VideoEmbed } from "../components/media"
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

      const lang =
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang.toLowerCase()
          : ""

      const shouldHighlightLine = calculateLinesToHighlight(
        props.children.props.metastring
      )

      return (
        <Highlight
          {...defaultProps}
          code={props.children.props.children.trim()}
          language={lang}
          theme={codeBlockTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              <Lang>{lang.toUpperCase()}</Lang>
              {tokens.map((line, i) => {
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

  const EmbededComponent = {
    ...MdxEmbed,
    VideoEmbed,
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
          <Button role="button">
            <Link to="/posts">
              <svg x="0px" y="0px" viewBox="0 0 219.151 219.151">
                <g>
                  <path
                    d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
		C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575
		c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"
                  />
                  <path
                    d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
		c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
		c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
		c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"
                  />
                </g>
              </svg>
            </Link>
          </Button>
          <div>
            <ThemeSwitcher />
          </div>
        </SinglePostHeader>
        <SinglePostContentWrapper>
          <h1>{mdx.frontmatter.displayTitle}</h1>
          <MDXProvider
            components={{
              ...PrismSyntaxHighlightingComponent,
              ...EmbededComponent,
            }}
          >
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
  background: var(--color-background);
  & a {
    text-decoration: none;
    &:hover {
      background-color: initial;
    }
  }
  z-index: 1;
`

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  a {
    display: block;
  }

  &:hover a {
    transform: translateY(-6px);
  }
  a {
    transition: transform 200ms;
  }

  svg {
    width: 27px;
    path {
      fill: var(--color-text);
    }
  }
`

const Lang = styled.div`
  text-align: end;
  background-color: var(--color-gray-100);
  color: var(--color-text);
  width: fit-content;
  margin-top: -0.6em;
  margin-left: -0.8em;
  margin-bottom: 0.6em;
  padding: 0 0.5rem;
  border-radius: 10px 0 0 0;
  user-select: none;
  /* margin-left: auto;
  margin-right: 0; */
`

const SinglePostContentWrapper = styled.div`
  background: var(--color-background);
  padding: 0 3rem;
  justify-self: center;
  grid-row: 2;
  min-width: 300px;
  max-width: 900px;
  line-height: 1.8rem;
  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }

  pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    margin: 32px 0;
    box-shadow: var(--color-box-shadow-code);
  }

  span.token {
    display: inline-block;
    /* white-space: normal; */
    max-width: 100%;
    word-break: break-all;
    word-wrap: break-word;
  }

  h1 {
    margin: 16px 0;
  }

  h2 {
    margin: 32px 0px 16px 0px;
  }

  h3 {
    margin: 16px 0px 8px 0px;
  }

  h2 {
    &::before {
      content: "##";
      margin-right: 8px;
      display: inline-block;
      color: var(--color-hover-bg);
    }
  }

  h3 {
    &::before {
      content: "###";
      margin-right: 8px;
      display: inline-block;
      color: var(--color-hover-bg);
    }
  }

  a {
    text-decoration: none;
    border-bottom: dotted 2px var(--color-hover-bg);
  }

  ul,
  ol {
    padding: 10px 15px;
    margin-left: 0px;
  }

  ul li {
    list-style-type: "👉";
    padding-left: 8px;
  }

  ol li {
    padding-left: 8px;
  }

  table {
    width: 100%;
  }

  /* table,
  th,
  td {
    border: 1px solid var(--color-hover-bg);
    border-collapse: collapse;
    border-left: none;
    border-right: none;
  } */
  table {
    border: 2px solid var(--color-hover-bg);
    border-collapse: separate;
    border-spacing: 0 5px;
    border-left: none;
    border-right: none;
  }

  thead tr th {
    border-bottom: 2px solid var(--color-hover-bg);
    border-collapse: separate;
    border-spacing: 5px 5px;
  }

  td {
    padding: 0 0.5rem;
  }

  th {
    text-align: center;
  }

  table {
    margin: 1rem 0;
  }

  blockquote {
    border-left: 2px solid var(--color-quote-border);
    background-color: var(--color-quote-background);
    padding: 0.5rem 1rem;
    padding-right: 0;
    margin: 1rem 0;
  }

  video,
  .mdx-embed {
    margin: 1.5rem 0;
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
