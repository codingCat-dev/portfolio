import * as React from "react"
import PropTypes from "prop-types"

const Article = ({ title, text, quote, quoteBold }) => {
  return (
    <article className="my-6 lg:my-24">
      <h2 className="font-noto tracking-wider text-2xl uppercase mx-auto px-3  font-extralight lg:text-4xl lg:w-1/2">
        {title}
      </h2>
      <p className="font-extralight px-3  mx-auto my-8 lg:w-3/5 lg:px-0">
        {text}
      </p>
      <p className="font-extralight px-3 mx-auto mt-8 uppercase lg:w-3/5 lg:px-0">
        {quote}
        <strong className="pl-1 text-blue-600">&nbsp;{quoteBold}</strong>
      </p>
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  quote: PropTypes.string,
  quoteBold: PropTypes.string,
}
export default Article
