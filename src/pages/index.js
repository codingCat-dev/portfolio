import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Seo title="AR Photography" />
      <StaticImage
        class="w-screen h-screen grayscale brightness-50"
        src="../images/index/image28.jpg"
        alt="mother and daugher, love and happiness, jumping on bridge "
      />
      <Header />
    </div>
  )
}

export default IndexPage
