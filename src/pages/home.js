import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Testimonial from "../components/testimonial"

const Home = () => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-32 ">
        <StaticImage
          className="w-full brightness-75 grayscale"
          src="../images/index/image28.jpg"
          alt="hi"
          height={500}
        />
      </div>
      <div className="my-16">
        <h3 className="font-noto tracking-wider text-2xl uppercase  py-6  font-extralight lg:text-4xl">
          Přinutím tě si
          <br />
          vzpomenout
        </h3>
        <p className="font-extralight w-1/2 mx-auto mt-12">
          Jsou okamžiky, které se stanou jen jednou za život, letmá objetí, oči,
          které se blíží k slzám a vytoužená setkání, ze kterých naskakuje husí
          kůže.
        </p>
        <p className="font-extralight w-1/2 mx-auto mt-12 uppercase text-sm">
          protože jsou to příběhy, vzpomínky, momenty a emoce, a nakonec,
          <strong> to je život</strong>
        </p>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-2 px-2  lg:grid-cols-6">
        <StaticImage
          className="w-full h-72 brightness-75 grayscale lg:mb-8"
          src="../images/index/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mt-8"
          src="../images/index/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mb-8"
          src="../images/index/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mt-8"
          src="../images/index/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mb-8"
          src="../images/index/image28.jpg"
          alt="hi"
        />
        <StaticImage
          className="w-full brightness-75 h-72 grayscale lg:mt-8"
          src="../images/index/image28.jpg"
          alt="hi"
        />
      </div>
      <div className=" mt-24 bg-cyan-50 font-extralight">
        <h4 className="uppercase font-noto text-3xl pt-12">pěkná slova</h4>
        <Testimonial />
      </div>
    </Layout>
  )
}

export default Home
