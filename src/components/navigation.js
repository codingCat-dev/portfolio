import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Navigation = () => {
  const navigationLinks = [
    { linkName: "Domů", path: "../home" },
    { linkName: "O mne", path: "../portfolio" },
    { linkName: "Cenik", path: "../portfolio" },
    { linkName: "Portfolio", path: "../portfolio" },
    { linkName: "Kontakt", path: "../portfolio" },
  ]

  return (
    <nav className="flex flex-col bg-white fixed top-0 container left-1/2 -translate-x-1/2   font-extralight tracking-tight text-xs z-30 lg:text-base uppercase lg:py-2">
      <div className="flex justify-center">
        <StaticImage
          src="../images/logo/logo.png"
          className="w-8 lg:w-12"
          alt="website logo AR"
        />
      </div>
      <div className="">
        <ul className="flex justify-center items-center flex-wrap">
          {navigationLinks.map(link => (
            <li key={Math.random() * 100} className="m-1 md:mx-2 lg:mx-4">
              <Link to={link.path} className="hover:text-cyan-600">
                {link.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
