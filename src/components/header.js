import * as React from "react"
import TypeWriterEffect from "react-typewriter-effect"

// import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const words = ["first", "second", "third"]

  return (
    <>
      <header className=" flex items-center py-12 mt-24 ">
        <div className="text-9xl font-sans font-light">
          <h1>text</h1>
          <TypeWriterEffect
            startDelay={0}
            hideCursorAfterText={true}
            cursorColor="#bbb"
            multiText={words}
            loop={true}
            nextTextDelay={1500}
            typeSpeed={80}
          />
          <h1>text Longer two</h1>
        </div>
        <div className="m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Header
