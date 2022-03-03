import React, { useState } from "react"
// import Navigation from "./navigation"
// import Footer from "../components/footer"
import Loading from "./loading"

const Layout = props => {
  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    setLoading(true)
  }, 1)
  return (
    <>
      {loading ? (
        <div className="mx-auto font-serif">
          {/* <Navigation /> */}
          <main>{props.children}</main>
          {/* <Footer /> */}
        </div>
      ) : (
        <Loading />
      )}
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
