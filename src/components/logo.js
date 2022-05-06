import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query GetLogo {
      file(name: { eq: "logo" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  `)

  return (
    <>
      <GatsbyImage image={getImage(data.file)} alt="Main Logo" />
    </>
  )
}

export default Logo
