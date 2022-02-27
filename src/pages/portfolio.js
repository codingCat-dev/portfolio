import React, { useState, useCallback } from "react"
import ImageViewer from "react-simple-image-viewer"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const images = [
    "http://placeimg.com/1200/800/nature",
    "http://placeimg.com/800/1200/nature",
    "http://placeimg.com/1920/1080/nature",
    "http://placeimg.com/1500/500/nature",
    "/static/8dbe7bb08d3f5ed9318249463df1cce7/a468c/image1.jpg",
  ]
  const openImageViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])
  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <Layout>
      <Seo title="portfolio" />
      <div>
        {images.map((src, index) => (
          <img
            className="cursor-pointer"
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
      {/* <img
        src="/static/8dbe7bb08d3f5ed9318249463df1cce7/a468c/image1.jpg"
        alt=""
      /> */}
      {/* <h1>Portfolio</h1>
      <div className="grid grid-cols-8 gap-5 my-8">
        <div className="col-span-2">
          <StaticImage src="../images/image1.jpg" />
        </div>
        <div className="col-span-3">
          <StaticImage src="../images/image1.jpg" />
        </div>
        <div className="col-span-1">
          <StaticImage src="../images/image1.jpg" />
        </div>

        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
      </div>
      <h1>Svatby</h1>
      <div className="grid grid-cols-8 gap-2 my-8">
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
        <StaticImage src="../images/image1.jpg" />
      </div> */}
    </Layout>
  )
}

export default Portfolio

// import { useStaticQuery, graphql } from "gatsby"

// const data = useStaticQuery(graphql`
//   query MyQuery {
//     allFile {
//       nodes {
//         relativePath
//       }
//     }
//   }
// `)
// console.log(data)
// console.log(allImages)
