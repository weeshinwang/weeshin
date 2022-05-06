import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Favicon from "../images/favicon.png"

export default function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          siteUrl
          logo
          description
        }
      }
    }
  `)

  const defaults = data?.site?.siteMetadata
  const title = props.title || "home"
  const description = props.description || defaults.description
  const url = new URL(props.path || "/", defaults.siteUrl)
  const logo = new URL(props.logo || defaults.logo, defaults.siteUrl)

  return (
    <Helmet htmlAttributes={{ lang: "zh-CN" }}>
      <title>🌟{title} | weeshin🌟</title>
      <link rel="icon" type="image/png" href={Favicon} />
      <link rel="canonical" href={url} />
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="all" />
      <meta name="referrer" content="same-origin" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      {/* TODO: WHAT DO THESE MEANS??? */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {logo && <meta name="og:image" content={logo} />}
    </Helmet>
  )
}
