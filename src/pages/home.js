import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TestimonialSlider from "../components/testimonialSlider"
import Article from "../components/article"

const Home = () => {
  return (
    <Layout>
      <div className="my-12 lg:mt-32 ">
        <StaticImage
          className="w-full brightness-75 grayscale"
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

      <div className=" grid grid-cols-2 gap-2 px-2  lg:grid-cols-6">
        <StaticImage
          className="w-full h-72 brightness-75 grayscale lg:mb-8"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mt-8"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mb-8"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mt-8"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mb-8"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mt-8"
          src="../images/homepage/image28.jpg"
          alt="hi"
        />
      </div>
      <TestimonialSlider />
    </Layout>
  )
}

export default Home
