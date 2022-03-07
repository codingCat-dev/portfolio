import * as React from "react"
import PropTypes from "prop-types"

const Article = ({ title, text, quote, quoteBold }) => {
  return (
    <article className="my-12 lg:my-24">
      <h2 className="font-noto tracking-wider text-2xl uppercase w-3/4  mx-auto  font-extralight lg:text-4xl lg:w-1/2">
        {title}
      </h2>
      <p className="font-extralight w-4/5 mx-auto my-8 lg:w-3/5">{text}</p>
      <p className="font-extralight w-4/5 mx-auto mt-8 uppercase lg:w-3/5">
        {quote}
        <strong>&nbsp;{quoteBold}</strong>
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
