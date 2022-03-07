import * as React from "react"
import Testimonial from "react-testimonial"
// array map does not work on this component!
const TestimonialSlider = () => (
  <article className="py-6 my-12 border-t border-b border-gray-400 lg:my-24 lg:py-10">
    <h3 className="uppercase font-noto text-3xl ">pěkná slova</h3>
    <Testimonial timer={100}>
      <div className="font-extralight px-3 mx-auto lg:w-2/3 lg:px-0 ">
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus
          error debitis molestias facere aliquam doloremque illo in, harum,
          placeat, nostrum perspiciatis esse quia sunt. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Quisquam excepturi laborum
          pariatur. Perferendis, libero? Odio!
        </p>
        <p className="uppercase font-noto">
          Martha Stewart
          <span className="text-blue-600 px-1">&#38;</span>
          John Doe
        </p>
      </div>
      <div className="font-extralight px-3 mx-auto lg:w-2/3 lg:px-0 ">
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus
          error debitis molestias facere aliquam doloremque illo in, harum,
          placeat, nostrum perspiciatis esse quia sunt. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Quisquam excepturi laborum
          pariatur. Perferendis, libero? Odio! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quisquam excepturi laborum pariatur.
          Perferendis, libero? Odio!
        </p>
        <p className="uppercase font-noto">Rick Babylon</p>
      </div>
      <div className="font-extralight px-3 mx-auto lg:w-2/3 lg:px-0 ">
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus
          error debitis molestias facere aliquam doloremque illo in, harum,
          placeat, nostrum perspiciatis esse quia sunt. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Quisquam excepturi laborum
          pariatur. Perferendis, libero? Odio!
        </p>
        <p className="uppercase font-noto">
          Liza Albertov<span className="text-blue-600 px-1">&#38;</span>
          Mike Johnkovich
        </p>
      </div>
    </Testimonial>
  </article>
)

export default TestimonialSlider
