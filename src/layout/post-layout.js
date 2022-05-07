import * as React from "react"
import { Link } from "gatsby"

export default function PostLayout({ children, pageContext }) {
  return (
    <>
      {children}
      <Link to="/">&larr; back</Link>
    </>
  )
}
