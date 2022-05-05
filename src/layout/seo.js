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
          favicon
          logo
          description
        }
      }
    }
  `)

  // const defaults = data?.site?.siteMetadata

  const title = props.title || "home"
  // const description = props.description || defaults.description
  // const image = new URL(props.image || defaults.image, defaults.siteUrl)
  // const url = new URL(props.path || "/", defaults.siteUrl)
  // console.log(defaults.logo)
  // const logo = defaults.logo
  // const logo = new URL(defaults.logo, defaults.siteUrl)

  return (
    <Helmet>
      <title>🌟{title} | weeshin🌟</title>
      <link rel="icon" type="image/png" href={Favicon} />
      {/* <meta name="icon" href={logo} /> */}

      {/* <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />} */}
    </Helmet>
  )
}
