import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav className="grid grid-cols-6 items-center py-8 border-green-500 border ">
      <div className="text-xl border border-red-300 col-span-3">
        {/* <h1>alžběta.římanová</h1>*/}
        <h1>firstname lastname</h1>
      </div>
      <div className="border border-green-300 col-span-3 py-0.5">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="../">home</Link>
          </li>
          <li>
            <Link to="../portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="../pricelist">pricelist</Link>
          </li>
          <li>
            <Link to="../contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
