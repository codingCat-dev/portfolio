import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="relative">
      <nav className="grid grid-cols-6 items-center py-8  ">
        <div className=" col-span-3">
          {/* <h1>alžběta.římanová</h1>*/}
          <h1>
            firstname
            <span className="animate-bounce text-2xl  text-blue-400 inline-block">
              .
            </span>
            lastname
          </h1>
        </div>
        <div className=" col-span-3">
          <ul className="flex justify-end ">
            <li className="mr-2">
              <Link
                to="../"
                // activeClassName="text-blue-400 animate-bounce inline-block "
              >
                home
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="../portfolio"
                // activeClassName="text-blue-400 animate-bounce inline-block"
              >
                portfolio
              </Link>
            </li>
            <li className="mr-2 ">
              <Link
                to="../contact"
                // activeClassName="text-blue-400 animate-bounce inline-block"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
