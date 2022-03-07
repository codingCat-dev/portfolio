import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TestimonialSlider from "../components/testimonialSlider"
import Article from "../components/article"

const Home = () => {
  return (
    <Layout>
      <div>
        <StaticImage
          className="w-full brightness-75 "
          src="../images/homepage/image28.jpg"
          alt="hi"
          height={500}
        />
      </div>
      <Article
        title="Přinutím tě si vzpomenout"
        text="Jsou okamžiky, které se stanou jen jednou za život, letmá objetí, oči,
          které se blíží k slzám a vytoužená setkání, ze kterých naskakuje husí
          kůže."
        quote="protože jsou to příběhy, vzpomínky, momenty a emoce, a nakonec,"
        quoteBold="to je život"
      />

      <div className=" grid grid-cols-1 gap-3 px-2  lg:grid-cols-5">
        <StaticImage
          className="w-full h-72 brightness-75 lg:mb-10  "
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72  lg:mt-10"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72  lg:mb-10"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72  lg:mt-10"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72  lg:mb-10"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
      </div>
      <TestimonialSlider />
    </Layout>
  )
}

export default Home
