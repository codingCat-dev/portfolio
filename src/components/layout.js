import React, { useState } from "react"
import Navigation from "./navigation"
import Footer from "../components/footer"

const Layout = props => {
  return (
    <>
      <div className="overflow-hidden text-center">
        <Navigation />
        <main className="mx-auto container ">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// import { useStaticQuery, graphql } from "gatsby"
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)
