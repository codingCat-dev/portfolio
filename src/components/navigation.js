import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="relative">
      <nav className="grid grid-cols-6 items-center py-8 text-sm border-gray-200 border-b">
        <div className=" col-span-3">
          {/* <h1>alžběta.římanová</h1>*/}
          <h1>firstname lastname</h1>
        </div>
        <div className=" col-span-3">
          <ul className="flex justify-end">
            <li className="mr-2">
              <Link to="../">home</Link>
            </li>
            <li className="mr-2">
              <Link to="../portfolio">portfolio</Link>
            </li>
            <li className="mr-2">
              <Link to="../contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
