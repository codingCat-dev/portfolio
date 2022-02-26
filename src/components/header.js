import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <>
      <header className="border border-gray-500  grid grid-cols-6 py-12 ">
        <div className="col-span-4 text-9xl font-serif">
          <h2 className="border-green-500 border">text</h2>
          <h2 className="border-green-500 border">text longer</h2>
          <h2 className="border-green-500 border">text longer two</h2>
        </div>
        <div className="border  border-red-500 col-span-2">hi</div>
      </header>
      <div className="grid grid-cols-2  text-xl">
        <div className="border border-blue-500">
          <h3>Hello i'm name lastname</h3>
        </div>
        <div className="border border-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio
          dolores earum autem sapiente eligendi quisquam ipsa tenetur suscipit
          explicabo! Lorem ipsum, dolor sit amet consectetur
          <br />
          <br />
          Excepturi, facilis distinctio aspernatur maiores totam quis pariatur
          quo sequi autem id sed error laudantium nesciunt ex mollitia, nam,
        </div>
      </div>
    </>
  )
}

export default Header
