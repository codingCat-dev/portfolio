import React, { useState, useCallback } from "react"
import ImageViewer from "react-simple-image-viewer"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query myImages {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" }
          relativeDirectory: { eq: "portfolio" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                base64
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  const onOpenViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const onCloseViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const allImages = data.allFile.edges.map(
    ({ node }) => node.childImageSharp.fluid
  )

  const imageSrc = allImages.map(item => item.src)

  return (
    <Layout>
      <Seo title="portfolio" />
      <div className="grid grid-cols-4 gap-4 my-24 ">
        {allImages.map((image, index) => (
          <img
            className="cursor-pointer w-full"
            src={image.src}
            onClick={() => onOpenViewer(index)}
            key={image.base64}
            alt="Portfolio images"
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={imageSrc}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={onCloseViewer}
          />
        )}
      </div>
    </Layout>
  )
}

export default Portfolio
