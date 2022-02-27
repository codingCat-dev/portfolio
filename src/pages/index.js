import * as React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="AR Photography" />
      <Header />
      <About />
    </Layout>
  )
}

export default IndexPage
