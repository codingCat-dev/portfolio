import React, { useState } from "react"

const Testimonial = () => {
  const testimonials = [
    {
      author: "John Doe",
      testimonial:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      author: "Bakica Kakica",
      testimonial:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      author: "Smoke oke",
      testimonial:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ]

  return (
    <div className="mx-auto pb-12 pt-4 w-1/2">
      <p>{testimonials[0].testimonial}</p>
      <p className="uppercase my-4 font-normal">{testimonials[0].author}</p>
    </div>
  )
}

export default Testimonial
