import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="O mne"></Seo>
      <div className="grid grid-cols-2 relative font-noto">
        <div className="">
          <h2 className="text-5xl text-right mt-12">Ahoj, jsem</h2>
        </div>
        <div className="relative ">
          <span className="ml-4 text-5xl absolute mt-12 z-30 ">Alzbeta</span>
          <StaticImage
            src="../images/portfolio/imaage6.jpg"
            className="w-11/12 h-72"
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
