import * as React from "react"
import TypeWriterEffect from "react-typewriter-effect"

// import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const words = ["First", "Second", "Third"]

  return (
    <>
      <header className="mt-8 md:mt-24">
        <div className=" text-4xl md:text-9xl font-serif font-light">
          <h1 className="mb-2 md:mb-6">Text</h1>
          <TypeWriterEffect
            startDelay={0}
            hideCursorAfterText={true}
            cursorColor="#0284c7"
            multiText={words}
            loop={true}
            nextTextDelay={1500}
            typeSpeed={80}
          />
          <h1 className="mt-2 md:mt-6">Text Longer two</h1>
        </div>
      </header>
    </>
  )
}

export default Header
